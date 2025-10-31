import { createUser, getAllUsers } from "@/services/userService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await getAllUsers();

    return NextResponse.json({ 
        users 
    });

  } catch (error) {

    console.error(error);
    
    return NextResponse.json({
      message: "Gagal mengambil data user",
      success: false,
    });
  }
};


export const POST = async(request: NextRequest) => {
    try {
        const data = await request.json();
        
        const result = await createUser(data);

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