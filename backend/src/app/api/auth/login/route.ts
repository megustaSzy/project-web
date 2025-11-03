import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";


const prisma = new PrismaClient();

export const POST = async(request: NextRequest) => {
    try {
        
        const { email, password } = await request.json();

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
            });
        }

        // bandingkan hash
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
            return NextResponse.json({
                message: "password salah",
                success: false
            });
        }

        // sukses login

        return NextResponse.json({
            message: "Login berhasil",
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.log("Login error", error)

        return NextResponse.json({
            message: "terjadi kesalahan saat login",
            success: true
        })
    }
}