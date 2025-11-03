import { getOrdersByUserId } from "@/services/orderService";
import { NextResponse } from "next/server";

// ambik semua id
export const GET = async (
  req: Request,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    // Ambil param ID dari URL (pakai await karena Promise)
    const { id } = await context.params;
    const userId = Number(id);

    if (isNaN(userId)) {
      return NextResponse.json({
        message: "ID user tidak valid",
        success: false,
      });
    }

    const orders = await getOrdersByUserId(userId);

    if (!orders || orders.length === 0) {
      return NextResponse.json({
        message: "belum ada pesanan untuk user ini",
        success: true,
        orders: [],
      });
    }

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "gagal mengambil riwayat pesanan",
      success: false,
    });
  }
};
