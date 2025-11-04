import { createDestination, getAllDestinations } from "@/services/destinationService";
import { NextRequest, NextResponse } from "next/server";

// GET semua destinasi
export const GET = async () => {
  try {
    const destinations = await getAllDestinations();

    return NextResponse.json({
      destinations,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ 
        message: "gagal mengambil data destination", 
        success: false },
    );
  }
};

//POST buat destinasi baru
export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    const { role } = data;

    if(role != "Admin") {
      return NextResponse.json({
        message: "Akses ditolak hanya admin yg bisa menambah destinasi",
        success: false
      })
    }

    // Validasi input sederhana
    if (!data.name || !data.notelp || !data.price || !data.location) {
      return NextResponse.json(
        { message: "data tidak lengkap", success: false },
        { status: 400 }
      );
    }

    const result = await createDestination(data);
    const status = result.success ? 201 : 400;

    return NextResponse.json(result, { status });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "terjadi kesalahan saat membuat destination", success: false },
      { status: 500 }
    );
  }
};
