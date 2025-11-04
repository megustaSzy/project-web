import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";



const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
    try {
        const { name, email, password, role } = await request.json();

        // validasi dta input
        if(!name || !email || !password) {
            return NextResponse.json({
                message: "nama, email, password wajib diisi",
                success: false
            })
        }

        // cek apakah email sudah terdaftar
        const existingUser = await prisma.tb_user.findUnique({
            where: {
                email
            }
        });

        if(existingUser) {
            return NextResponse.json({
                message: "email sudah terdaftar",
                success: false
            })
        }

        // enkripsi password
        const hashedPassword = await bcrypt.hash(password, 10)

        // simpan user baru ke db
        await prisma.tb_user.create({
            data: {
                name,
                email,
                password: hashedPassword, // 123456
                role: role || "User"
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });

        return NextResponse.json({
            message: "registrasi berhasil",
            success: true
        })


    } catch (error) {
        console.log(error);

        return NextResponse.json({
            message: "terjadi kesalahan saat registrasi",
            success: false
        })
    }
}