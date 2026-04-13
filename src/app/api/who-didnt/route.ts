import { execute } from "@/service/who-didnt";

export const GET = async () => {
  await execute();
  return Response.json({
    message:
      "Process has started. You will receive a notification upon completion.",
    status: "processing",
    webhookStatus: "pending",
  });
};
