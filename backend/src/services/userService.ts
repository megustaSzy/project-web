import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();


// ambil user dari DB
export const getAllUsers = async () => {
    return prisma.tb_user.findMany({
        orderBy: {
            id: 'asc'
        }
    });
};