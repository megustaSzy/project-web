import { NextRequest, NextResponse } from "next/server";
import { getOrderById, updateOrderStatus, deleteOrder } from "@/services/orderService";

//  GET /api/orders/[id]
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = Number(params.id);
    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json({ message: "Order tidak ditemukan", success: false });
    }

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal mengambil data order", success: false });
  }
};

//  PATCH (update status)
export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = Number(params.id);
    const { status } = await req.json();
    const result = await updateOrderStatus(id, status);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal memperbarui status", success: false });
  }
};

//  DELETE
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = Number(params.id);
    const result = await deleteOrder(id);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal menghapus order", success: false });
  }
};




