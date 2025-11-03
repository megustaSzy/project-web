import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";




const prisma = new PrismaClient();


// UPDATE
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

export const PUT = async(request: NextRequest, { params }: { params: { id: string }}) => {

    const id = params.id

    const data = await request.json();

    const check = await prisma.tb_destination.findFirst({
        where: {
            id: {
                not: Number(id)
            },
            name: data.name
        },
        select: {
            id: true
        }
    })

    if(check){
        return NextResponse.json({
            message: "data destinasi gagal diubah",
            success: false
        })
    }

    await prisma.tb_destination.update({
        where: {
            id: Number(id)
        },
        data: {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            price: data.price,
            location: data.location
        }
    });

    return NextResponse.json({
        message: "data destinasi berhasil dihapus",
        success: true
    })
}