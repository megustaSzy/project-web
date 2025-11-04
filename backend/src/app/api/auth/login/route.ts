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
                message: "email dan password wajib diisi",
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
        const isPasswordValid = await bcrypt.compare(password, user.password);


        if(!isPasswordValid) {
            return NextResponse.json({
                message: "password salah",
                success: false
            });
        }


        const { password: _, ...userWithoutPassword } = user;
        // sukses login

        return NextResponse.json({
            message: "Login berhasil",
            success: true,
            user: userWithoutPassword,
        });

    } catch (error) {
        console.log("Login error", error)

        return NextResponse.json({
            message: "terjadi kesalahan saat login",
            success: true
        })
    }
}