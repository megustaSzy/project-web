import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient

interface DestinationData {
  name: string;
  notelp: string;
  description?: string;
  imageUrl?: string;
  price: number;
  location: string;
}

// Ambil semua destinasi
export const getAllDestinations = async () => {
  return prisma.tb_destination.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

// Ambil destinasi berdasarkan ID
export const getDestinationById = async (id: number) => {
  return prisma.tb_destination.findUnique({
    where: { id },
  });
};

// Buat destinasi baru
export const createDestination = async (data: DestinationData) => {
  try {
    await prisma.tb_destination.create({
      data,
    });

    return {
      message: "destination berhasil dibuat",
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "gagal membuat destination",
      success: false,
    };
  }
};

// Update destinasi
export const updateDestination = async (id: number, data: DestinationData) => {
  const destination = await prisma.tb_destination.findUnique({ where: { id } });

  if (!destination) {
    return {
      message: "destination tidak ditemukan",
      success: false,
    };
  }

  await prisma.tb_destination.update({
    where: { id },
    data,
  });

  return {
    message: "destination berhasil diperbarui",
    success: true,
  };
};

// DELETE
export const deleteDestination = async (id: number) => {
  const destination = await prisma.tb_destination.findUnique({
    where: { id },
  });

  if (!destination) {
    return {
      message: "destination tidak ditemukan",
      success: false,
    };
  }

  await prisma.tb_destination.delete({
    where: { id },
  });

  return {
    message: "destination berhasil dihapus",
    success: true,
  };
};
