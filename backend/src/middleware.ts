import { NextRequest } from "next/server";


export function middleware (req: NextRequest) {
    const role = req.headers.get("x-role");
    const pathname = req.nextUrl.pathname;
    const method = req.method;
}