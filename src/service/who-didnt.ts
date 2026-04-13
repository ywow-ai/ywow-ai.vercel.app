"use server";

import type { IgUser } from "@/generated/prisma/client";
import { prisma, xenv } from "@/lib/prisma";
import lodash from "lodash";
import axios, { isAxiosError } from "axios";

export const execute = async () => {
  const startTime = Date.now();
  console.log("Starting WhoDidnt process...");

  try {
    console.log("Loading environment variables...");
    const throttle = await xenv("WHODIDNT_THROTTLE", "number");
    const maxRetry = await xenv("WHODIDNT_MAX_RETRY", "number");
    const xIgAppId = await xenv("WHODIDNT_X_IG_APP_ID");
    const xCsrfToken = await xenv("WHODIDNT_X_CSRF_TOKEN");
    const sessionId = await xenv("WHODIDNT_SESSION_ID");
    const dsUserId = await xenv("WHODIDNT_DS_USER_ID");
    const docId = await xenv("WHODIDNT_DOC_ID");
    const baseURL = await xenv("WHODIDNT_BASE_URL");
    const perPage = await xenv("WHODIDNT_PER_PAGE", "number");
    const dcWebhookId = await xenv("WHODIDNT_DISCORD_WEBHOOK_ID");
    const dcToken = await xenv("WHODIDNT_DISCORD_TOKEN");
    const excepts = await prisma.whodidntException.findMany();
    console.log("Environment variables loaded");

    const attempt = {
      maxRetry,
      retryCount: 0,
      canRetry() {
        this.retryCount++;
        return this.retryCount <= this.maxRetry;
      },
      reset() {
        this.retryCount = 0;
      },
    };

    const cl = axios.create({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-IG-App-ID": xIgAppId,
        "X-CSRFToken": xCsrfToken,
        Cookie: `sessionid=${sessionId};csrftoken=${xCsrfToken};ds_user_id=${dsUserId}`,
      },
    });

    const dc = axios.create({
      baseURL: "https://discord.com/api/webhooks",
    });

    console.log("Fetching followers...");
    const followers = await (async () => {
      attempt.reset();
      const url = new URL(`${baseURL}/friendships/${dsUserId}/followers`);
      url.searchParams.set("count", String(perPage));
      url.searchParams.set("search_surface", "follow_list_page");
      let data: IgUser[] = [];
      let hasMoreData: boolean = true;
      let latestPayloads: unknown = {};

      while (hasMoreData) {
        try {
          const { data: result } = await cl.get<WhoDidntPaginate<IgUser>>(
            url.toString(),
          );

          data = [...data, ...result.users];
          url.searchParams.set("max_id", String(result.next_max_id));
          hasMoreData = result.has_more;

          attempt.reset();
          console.log(`Done fetching followers url ${url.toString()}...`);
          await new Promise<void>((resolve) => {
            setTimeout(resolve, throttle * 1000);
          });
        } catch (error) {
          if (isAxiosError(error)) {
            console.log(`error attempt ${attempt.retryCount}`, error.message);
          } else {
            console.log(`error attempt ${attempt.retryCount}`, error);
          }

          const isEqual = lodash.isEqual(
            Object.fromEntries(url.searchParams),
            latestPayloads,
          );

          if (isEqual && !attempt.canRetry()) {
            console.log("Max attempt reached, same payload, can't retry");

            const body = new FormData();
            body.append(
              "payload_json",
              JSON.stringify({
                embeds: [
                  {
                    title: "Max attempt reached, same payload, can't retry",
                    description: url.searchParams,
                    color: 16711680,
                  },
                ],
              }),
            );

            await dc.post(`/${dcWebhookId}/${dcToken}`, body);

            return false;
          }

          latestPayloads = Object.fromEntries(url.searchParams);

          await new Promise<void>((resolve) => {
            setTimeout(resolve, throttle * 1000);
          });
        }
      }

      console.log(`Followers fetched: ${data.length} users`);

      return data;
    })();

    if (!followers) return 1;

    console.log("Fetching following...");
    const following = await (async () => {
      attempt.reset();
      const url = new URL(`${baseURL}/friendships/${dsUserId}/following`);
      url.searchParams.set("count", String(perPage));
      url.searchParams.set("search_surface", "follow_list_page");
      let data: IgUser[] = [];
      let hasMoreData: boolean = true;
      let latestPayloads: unknown = {};

      while (hasMoreData) {
        try {
          const { data: result } = await cl.get<WhoDidntPaginate<IgUser>>(
            url.toString(),
          );
          data = [...data, ...result.users];
          url.searchParams.set("max_id", String(result.next_max_id));
          hasMoreData = result.has_more;

          attempt.reset();
          console.log(`Done fetching following url ${url.toString()}...`);
          await new Promise<void>((resolve) => {
            setTimeout(resolve, throttle * 1000);
          });
        } catch (error) {
          if (isAxiosError(error)) {
            console.log(`error attempt ${attempt.retryCount}`, error.message);
          } else {
            console.log(`error attempt ${attempt.retryCount}`, error);
          }

          const isEqual = lodash.isEqual(
            Object.fromEntries(url.searchParams),
            latestPayloads,
          );

          if (isEqual && !attempt.canRetry()) {
            console.log("Max attempt reached, same payload, can't retry");

            const body = new FormData();
            body.append(
              "payload_json",
              JSON.stringify({
                embeds: [
                  {
                    title: "Max attempt reached, same payload, can't retry",
                    description: url.searchParams,
                    color: 16711680,
                  },
                ],
              }),
            );

            await dc.post(`/${dcWebhookId}/${dcToken}`, body);

            return false;
          }

          latestPayloads = Object.fromEntries(url.searchParams);

          await new Promise<void>((resolve) => {
            setTimeout(resolve, throttle * 1000);
          });
        }
      }

      console.log(`Following fetched: ${data.length} users`);

      return data;
    })();

    if (!following) return 1;

    console.log("Calculating mutuals...");
    const mutuals: IgUser[] = following.filter(({ id: xId }) =>
      followers.some(({ id: yId }) => yId === xId),
    );
    console.log(`Mutuals: ${mutuals.length} users`);

    console.log("Calculating not follow back...");
    const notFollowBack: IgUser[] = following.filter(
      ({ id: xId }) => !followers.some(({ id: yId }) => yId === xId),
    );
    console.log(`Not follow back: ${notFollowBack.length} users`);

    console.log("Sending not follow back report to Discord...");
    await (async () => {
      const body = new FormData();
      body.append(
        "payload_json",
        JSON.stringify({
          embeds: [
            {
              title: "Not Follow Back",
              description: notFollowBack
                .map(({ username }) => username)
                .join(", "),
              color: 16776960,
            },
          ],
        }),
      );

      await dc.post(`/${dcWebhookId}/${dcToken}`, body);
      console.log("Not follow back report sent");
    })();

    console.log("Filtering unfollow targets (excluding exceptions)...");
    const unfollowtarget = notFollowBack.filter(
      ({ id: xId }) => !excepts.some(({ id: yId }) => yId === xId),
    );
    console.log(`Unfollow targets: ${unfollowtarget.length} users`);

    console.log("Sending unfollow target list to Discord...");
    await (async () => {
      const body = new FormData();
      body.append(
        "payload_json",
        JSON.stringify({
          embeds: [
            {
              title: "Unfollow Target",
              description: unfollowtarget
                .map(({ username }) => username)
                .join(", "),
              color: 16744192,
            },
          ],
        }),
      );

      await dc.post(`/${dcWebhookId}/${dcToken}`, body);
      console.log("Unfollow target list sent");
    })();

    console.log("Starting unfollow process...");
    const unfollow = await (async () => {
      let data: IgUser[] = [];
      let latestPayloads: unknown = {};
      while (unfollowtarget.length !== 0) {
        attempt.reset();
        let done: boolean = false;
        const user = unfollowtarget.pop();
        if (user) {
          const params = new URLSearchParams();
          params.set("doc_id", docId);
          params.set(
            "variables",
            JSON.stringify({
              target_user_id: user.id,
              container_module: "profile",
            }),
          );

          while (!done) {
            try {
              await cl.post("https://www.instagram.com/graphql/query", params);

              console.log(`Unfollowed ${user.username}`);
              attempt.reset();
              await new Promise<void>((resolve) => {
                setTimeout(resolve, throttle * 1000);
              });
              done = true;
            } catch (error) {
              if (isAxiosError(error)) {
                console.log(
                  `error attempt ${attempt.retryCount}`,
                  error.message,
                );
              } else {
                console.log(`error attempt ${attempt.retryCount}`, error);
              }

              const isEqual = lodash.isEqual(
                Object.fromEntries(params),
                latestPayloads,
              );

              if (isEqual && !attempt.canRetry()) {
                console.log("Max attempt reached, same payload, can't retry");

                done = true;
                return false;
              }

              latestPayloads = Object.fromEntries(params);

              await new Promise<void>((resolve) => {
                setTimeout(resolve, throttle * 1000);
              });
            }
          }
          data = [...data, user];
        }
      }

      return data;
    })();

    if (!unfollow) return 1;

    console.log("Sending unfollow completion report to Discord...");
    await (async () => {
      const body = new FormData();
      body.append(
        "payload_json",
        JSON.stringify({
          embeds: [
            {
              title: "Unfollow Done",
              description: unfollow.map(({ username }) => username).join(", "),
              color: 255,
            },
          ],
        }),
      );

      await dc.post(`/${dcWebhookId}/${dcToken}`, body);
      console.log("Unfollow completion report sent");
    })();

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`WhoDidnt process completed in ${duration} seconds`);
    console.log(
      `Summary: ${followers.length} followers, ${following.length} following, ${mutuals.length} mutuals, ${unfollow.length} unfollowed`,
    );

    return { followers, following, mutuals, notFollowBack, unfollowtarget };
  } catch (error) {
    console.log(error);
    return 1;
  }
};
