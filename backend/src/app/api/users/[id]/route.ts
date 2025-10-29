import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// ambil data user berdasarkan id
export const GET = async(request: NextRequest,
    { params }: { params: { id: string}}) => {

        const id = Number(params.id);

        // validasi id
        if (isNaN(id)) {
            return NextResponse.json({
                message: "id tidak valid",
                success: false
            });
        }
    }