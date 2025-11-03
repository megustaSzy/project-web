import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export const POST = async(request: NextRequest) => {
    try {
        
        const { name, email, password } = await request.json();

        /// validasi input
        if(!email || !password) {
            return NextResponse.json({
                message: "email wajib diisi",
                success: false
            });
        };

        const user = await prisma.tb_user.findUnique({
            where: {
                email
            }
        });

        if(!user) {
            return NextResponse.json({
                message: "email tidak ditemukan",
                success: false
            })
        }

    } catch (error) {
        
    }
}