import { PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();

export const GET = async() => {
    const user = await prisma.tb_user.findMany({
        orderBy: {
            id: 'asc',
        }
    })
}