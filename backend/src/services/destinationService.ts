import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

interface DestinationData {
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    location: string
}

// GET destinations
export const getAllDestinations = async () => {
    return prisma.tb_destination.findMany({
        orderBy: {
            id: 'asc'
        }
    })
}

// GET by ID destinations
export const getDestinationsById = async (id: number) => {
    return prisma.tb_destination.findUnique({
        where: {
            id
        }
    })
}

export const createDestination = async(data: DestinationData) => {
    const existing = await prisma.tb_destination.findFirst({
        where: {
            name: data.name
        }
    })

    if(existing) {
        return {
            message: "nama destinasi gagal disimpan",
            success: false
        };
    }

    await prisma.tb_destination.create({
        data: {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            price: data.price,
            location: data.location
        }
    });

    return {
        success: true
    }
}

export const updateDestination = async(id: number, data: DestinationData) => {
    await prisma.tb_destination.update({
        where: {
            id
        },
        data
    })
}

export const deleteDestination = async (id: number) => {
    const user = await prisma.tb_user.findUnique({
        where: {
            id
        }
    });
    
    if(!user) {
        return {
            message: "user tidak ditemukan",
            success: false
        }
    }

    await prisma.tb_user.delete({
        where: {
            id
        }
    });

    return {
        message: "user berhasil dihapus",
        success: true
    }
}