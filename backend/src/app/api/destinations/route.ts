import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();


// GET destinations
export const GET = async() => {
    try {
        const destination = await prisma.tb_destination.findMany({
            orderBy: {
                id: 'asc'
            }
        })

        return NextResponse.json({
            destination
        })
    } catch (error) {
        console.log(error)

        return NextResponse.json({
            message: "gagal mengambil data tujuan",
            success: false
        })
    }
}


// POST destination

export const POST = async (request: NextRequest) => {
    try {
        
        const data = await request.json();

        const check = await prisma.tb_destination.findFirst({
            where: {
                name: data.name
            },
            select: {
                name: true
            }
        })

        if(check) {
            return {
                message: "nama destinasi gagal disimpan",
                success: false
            };
        }

        await prisma.tb_destination.create({
            data: {
                name: data.name,
                description: data.description,
                imageUrl: data.imageUrl,
                price: data.price,
                location: data.location
            }
        })

        return NextResponse.json({
            message: "data destinasi berhasil ditambahkan",
            success: true
        })

    } catch (error) {
        console.log(error)

        return NextResponse.json({
            message: "gagal membuat destinasi",
            success: false
        })
    }
}