import { PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();

interface orderData {
    userId: number,
    destinationId: number,
    jadwal: string,
    quantity: number
}

// ambil semua pesanann
export const getAllOrders = async () => {
  return prisma.tb_order.findMany({
    include: {
      user: { select: { name: true, email: true } },
      destination: { select: { name: true, price: true } },
    },
    orderBy: { id: "asc" },
  });
};




