import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async() => {
    const users = await prisma.tb_user.findMany({
        orderBy: {
            id: 'asc',
        },
    });

    // menampilkan data users
    return NextResponse.json({
        users: users
    })
};


export const POST = async(request: NextRequest) => {
    try {
        const data = await request.json();
    
        // cek apakah email sudah ada
        const existingUser = await prisma.tb_user.findUnique({
            where: {
                email: data.email
            },
        });
    
        if(existingUser) {
            return NextResponse.json({
                message: "email sudah terdaftar",
                success: false,
            });
        }
        // simpen user baru
        await prisma.tb_user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role || "User"
            },
        });
    
        return NextResponse.json({
            message: "user berhasil dibuat",
            success: true
        });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "terjadi kesalahan saat membuat user",
            success: false
        })
    }
}