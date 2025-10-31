import { createDestination, getAllDestinations } from "@/services/destinationService";
import { NextRequest, NextResponse } from "next/server";

// response GET
export const GET = async () => {
    const destinations = await getAllDestinations();

    return NextResponse.json({
        destinations
    })
}

export const POST = async (req: NextRequest) => {
    const data = await req.json();
    const result = await createDestination(data);

    return NextResponse.json(result)
};