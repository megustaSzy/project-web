import { createOrder, getAllOrders, getOrdersByUserId } from "@/services/orderService";
import { NextRequest, NextResponse } from "next/server";



export const GET = async (req: NextRequest)=> {
    try {
        
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        let orders;

        if (userId ) {
            orders =  await getOrdersByUserId(Number(userId))
        } else {
            orders = await getAllOrders();
        }

        return NextResponse.json({
            success: true,
            orders
        })

    } catch (error) {
        
        console.log(error);
        return NextResponse.json({
            message: "gagal mengambil data orders",
            success: false
        })

    }
}

// create order
export const POST = async (req: NextRequest) => {
    try {
    const data = await req.json();
    const result = await createOrder(data);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal membuat pesanan", success: false });
  }
}