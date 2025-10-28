import { PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();

export const GET = async() => {
    try {
        const user = await prisma.tb_user.findMany({
            orderBy: {
                id: 'asc',
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true, 
                role: true,
                createdAt: true
            }
        });
    } catch (error) {

    }
}

