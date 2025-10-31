import { NextRequest, NextResponse } from "next/server";

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

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();



    } catch (error) {
        
    }
}