import { PrismaClient } from "@/generated/prisma";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

// ambil data user berdasarkan id
export const GET = async(request: NextRequest,
    { params }: { params: { id: string}}) => {

    }