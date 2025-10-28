import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

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


export const POST = async(request: NextRequest) => {
    // simpan data
    const data = await request.json();
}