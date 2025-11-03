import { PrismaClient } from "@/generated/prisma";
import { deleteDestination, getDestinationsById, updateDestination } from "@/services/destinationService";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// DELETE
export const DELETE = async (req: NextRequest,
    context: { params: Promise<{ id: string }> }) => {

        const {id} = await context.params;
        const userId = Number(id);


        // validasi ID
        if(isNaN(userId)) {
            return NextResponse.json({
                message: "id tidak valid",
                success: false
            });
        }

        const result = await deleteDestination(userId);
        return NextResponse.json(result);
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

    await updateDestination(Number(id), data)

    return NextResponse.json({
        message: "data destinasi berhasil dihapus",
        success: true
    })
}
// GET by ID

export const GET = async (request: NextRequest,  { params }: { params: {id: string} }) => {

    const id = params.id

    const destination = await getDestinationsById(Number(id))

    if(!destination) {
        return NextResponse.json({
            message: "destinasi tidak ditemukan",
            success: false
        })
    }

    return NextResponse.json({
        destination
    })


}