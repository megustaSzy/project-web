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


// ambil user berdasarkan ID

export const getUserById = async (id: number) => {
    return prisma.tb_user.findUnique({
        where: {
            id
        }
    })
}


// cek email apakah sudah diapkai user lain
export const isEmailUsedByAnotherUser = async (id: number, email: string) => {
    const existing = await prisma.tb_user.findFirst({
        where: {
            id: {
                not: id,
            },
            email
        },
    });
    return !!existing;
}