import {PrismaClient} from "@prisma/client";

const prismaClient = () => new PrismaClient();
const client = prismaClient();

export const Prisma = {client};
