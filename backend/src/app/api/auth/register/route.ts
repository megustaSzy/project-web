import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";



const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
    try {
        const { name, email, password } = await request.json();

        // validasi dta input
        if(!name || !email || !password) {
            return NextResponse.json({
                message: "nama, email, wajib diisi",
                success: false
            })
        }

        // cek apakah email sudah terdaftar
        const existingUser = await prisma.tb_user.findUnique({
            where: {
                email
            }
        })


    } catch (error) {
        
    }
}