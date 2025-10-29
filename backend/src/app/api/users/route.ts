import { PrismaClient } from "@/generated/prisma";
import next from "next";
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
                success: false,
                message: "email sudah terdaftar"
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
            success: true,
            message: "user berhasil dibuat"
        });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "terjadi kesalahan saat membuat user"
        })
    }
}