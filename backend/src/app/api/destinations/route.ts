import { createDestination, getAllDestinations } from "@/services/destinationService";
import { NextRequest, NextResponse } from "next/server";

// GET destinations
export const GET = async() => {
    try {
        const destination = await getAllDestinations();

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
            
        const result = await createDestination(data);
    
        if(!result.success) {
            return NextResponse.json(result);
        }
        
        return NextResponse.json({
            message: "user berhasil dibuat",
            success: true
        });
            
        } catch (error) {
            console.error(error);
            return NextResponse.json({
                message: "terjadi kesalahan saat membuat user",
                success: false
            })
        }
}