import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";




const prisma = new PrismaClient();

export const DELETE = async(request: NextRequest, { params }: { params: { id: string }}) => {
    
    const check = await prisma.tb_destination.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    if(!check) {
        return NextResponse.json({
            message: "data destinasi gagal dihapus",
            success: false
        })
    }

    await prisma.tb_destination.delete({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json({
        message: "data destinasi berhasil dihapus",
        success: true
    })
}