import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const destinations = await prisma.tb_destination.findMany({
            orderBy: {
                id: 'asc'
            }
        });

        return NextResponse.json({
            destinations
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json({
            message: "gagal mengambil data destinasi",
            success: false
        })
    }
}