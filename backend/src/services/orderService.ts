import { PrismaClient, Status } from "@/generated/prisma";


const prisma = new PrismaClient();


interface OrderData {
  userId: number;
  destinationId: number;
  jadwal: string;
  quantity: number;
}

// 🔵 Ambil semua pesanan
export const getAllOrders = async () => {
  return prisma.tb_order.findMany({
    include: {
      user: { select: { name: true, email: true } },
      destination: { select: { name: true, price: true } },
    },
    orderBy: { id: "asc" },
  });
};

// 🟢 Ambil pesanan berdasarkan userId
export const getOrdersByUserId = async (userId: number) => {
  return prisma.tb_order.findMany({
    where: { userId },
    include: {
      destination: { select: { name: true, price: true, location: true } },
    },
    orderBy: { id: "desc" },
  });
};

// 🟣 Ambil pesanan berdasarkan ID
export const getOrderById = async (id: number) => {
  return prisma.tb_order.findUnique({
    where: { id },
    include: {
      user: true,
      destination: true,
    },
  });
}

// create pesanan baru

export const createOrder = async(data: OrderData) => {
    const destination = await prisma.tb_destination.findUnique({
        where: {
            id: data.destinationId
        }
    });

    if(!destination) {
        return {
            message: "destinasi tidak ditemukan",
            success: false
        }
    };

    const totalPrice = destination.price * data.quantity;

    await prisma.tb_order.create({
        data: {
            userId: data.userId,
            destinationId: data.destinationId,
            jadwal: data.jadwal,
            quantity: data.quantity,
            totalPrice,
            status: "Pending",
        }
    });

    return {
        message: "pesanan berhasil dibuat",
        success: true
    }
}

// update status pesanan
export const updateOrder = async(id: number, status: string) => {
    const order = await prisma.tb_order.findUnique({
        where: {
            id
        }
    });

    if(!order) {
        return{
            message: "order tidak ditemukan",
            success: false
        }
    }

    await prisma.tb_order.update({
        where: {
            id
        },
        data: {
            status: status as Status
        }
    });

    return {
        message: "status pesanan diperbarui",
        success: true
    }
}


export const deleteOrder = async(id: number) => {
    const order = await prisma.tb_order.findUnique({
        where: {
            id
        }
    });

    if(!order) {
        return {
            message: "order tidak ditemukan",
            success: false
        }
    }

    await prisma.tb_order.delete({
        where: {
            id
        }
    });

    return {
        message: "pesanan berhasil dihapus",
        success: true
    }
}



