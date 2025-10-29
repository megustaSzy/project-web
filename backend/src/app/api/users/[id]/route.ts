import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET id
export const GET = async (req: Request,
  context: { params: Promise<{ id: string }> }) => {

  const { id } = await context.params; 
  const userId = Number(id);

  // Validasi ID
  if (isNaN(userId)) {
    return NextResponse.json(
      {
        message: "ID tidak valid",
        success: false,
      });
  }

  // Ambil user berdasarkan ID
    const user = await prisma.tb_user.findUnique({
        where: { id: userId },
    });

  // Jika data tidak ditemukan
    if (!user) {
        return NextResponse.json(
            {
                message: "user tidak ditemukan",
                success: false,
            });
        }

  // Jika data ditemukan
    return NextResponse.json({
        user,
    });
};

// DELETE
export const DELETE = async (req: NextRequest,
    context: { params: Promise<{ id: string }> }) => {

        const {id} = await context.params
        const userId = Number(id)

        // validasi ID
        if(isNaN(userId)) {
            return NextResponse.json({
                message: "id tidak valid",
                success: false
            });
        }

        // cek apakah user ada
        const user = await prisma.tb_user.findUnique({
            where: {
                id: userId
            }
        });

        // jika user tidak ditemukan
        if(!user) {
            return NextResponse.json({
                message: "user gagal dihapus",
                success: false
            })
        }

        await prisma.tb_user.delete({
            where: {
                id: userId
            }
        });

        return NextResponse.json({
            message: "user berhasil dihapus",
            success: true
        })
}


// buat service PUT
export const PUT = async (request: NextRequest,
    context: { params: Promise<{ id: string }> }) => {
        
        const { id } = await context.params
        const userId = Number(id)
        const data = await request.json();

        if(isNaN(userId)) {
            return NextResponse.json({
                message: "id tidak valid",
                success: false
            })
        }

    // cek apakah id sudah ada / belum
        const check = await prisma.tb_user.findFirst({
            where : {
                id : {
                    not: userId
                },
                email: data.email
            },
            select : {
                id : true
            }
    })

    // jika data tidak ditemukan
    if (check) {
        return NextResponse.json({
            message: "Data user gagal diubah (email user sudah digunakan)",
            success: false
        })
    }

    //update data user
    await prisma.tb_user.update({
        where : {
            id : userId
        },
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role
        } 
    })

    return NextResponse.json({
            message: "Data user berhasil diubah",
            success: true
        })

}