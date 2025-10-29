import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
