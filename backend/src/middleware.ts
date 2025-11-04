import { NextRequest, NextResponse } from "next/server";
import path from "path";


export function middleware (req: NextRequest) {
    const role = req.headers.get("x-role");
    const pathname = req.nextUrl.pathname;
    const method = req.method;

    if(pathname.startsWith("/api/destinations")) {
        if(method !== "GET" && role !== "Admin") {
            return NextResponse.json({
                message: "akses ditolak, hanya admin yang bisa",
                success: false
            });
        }
    }

    // proteksi GET semua order (hanya admin)

    if(pathname === "/api/orders" && method === "GET") {
        if (role !== "Admin") {
            return NextResponse.json({
                message: "akses ditolak: hanya Admin yang bisa melihat semua pesanan",
                success: false
            })
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"]
}