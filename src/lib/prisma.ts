import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };

type XenvKeyType = "string" | "number" | "boolean";
type XenvReturnType = string | number | boolean;
async function xenv(key: string): Promise<string>;
async function xenv(key: string, parse: "string"): Promise<string>;
async function xenv(key: string, parse: "number"): Promise<number>;
async function xenv(key: string, parse: "boolean"): Promise<boolean>;
async function xenv(
  key: string,
  parse: XenvKeyType = "string",
): Promise<XenvReturnType> {
  const env = await prisma.environment.findUnique({
    where: { key },
  });

  if (!env) throw new Error(`Environment variable "${key}" not found`);

  return (
    (
      {
        string: (): string => String(env.value),
        number: (): number => Number(env.value),
        boolean: (): boolean => Boolean(env.value),
      } satisfies Record<XenvKeyType, () => XenvReturnType>
    )[parse] ?? (() => String(env.value))
  )();
}

export { xenv };
