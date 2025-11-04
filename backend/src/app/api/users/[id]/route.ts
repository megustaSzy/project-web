import { 
    deleteUser, 
    getUserById, 
    isEmailUsedByAnotherUser, 
    updateUser } 
    from "@/services/userService";
import { NextRequest, NextResponse } from "next/server";



// GET id
export const GET = async (req: Request,
  context: { params: Promise<{ id: string }> }) => {

  const { id } = await context.params; 
  const userId = Number(id);

  // Validasi ID
  if (isNaN(userId)) {
    return NextResponse.json(
      {
        message: "ID tidak valid",
        success: false,
      });
  }

  // Ambil user berdasarkan ID
    const user = await getUserById(userId);

  // Jika data tidak ditemukan
    if (!user) {
        return NextResponse.json(
            {
                message: "user tidak ditemukan",
                success: false,
            });
        }

  // Jika data ditemukan
    return NextResponse.json({
        user,
    });
};

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

        const result = await deleteUser(userId);
        return NextResponse.json(result);
}


// buat service PUT
export const PUT = async (request: NextRequest,
    context: { params: Promise<{ id: string }> }) => {
        
        const { id } = await context.params
        const userId = Number(id)
        const data = await request.json();

        if(isNaN(userId)) {
            return NextResponse.json({
                message: "id tidak valid",
                success: false
            })
        }

        const emailUsed = await isEmailUsedByAnotherUser(userId, data.email);
        if(emailUsed) {
            return NextResponse.json({
                message: "email sudah digunakan user lain",
                success: false
            });
        }

        await updateUser(userId, data);
        return NextResponse.json({
            message: "data berhasil diubah",
            success: true
        });
}