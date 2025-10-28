import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async() => {
    const users = await prisma.tb_user.findMany({
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

    // menampilkan data users
    return NextResponse.json({
        users: users
    })
};

