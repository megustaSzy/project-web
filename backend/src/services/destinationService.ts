import { PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();


// ambil destinasi
export const getAllDestinations= async () => {
    return await prisma.tb_destination.findMany({
        orderBy: {
            id: 'asc'
        },
    });
};

//tambah destinasi baru
export const createDestination = async (data: {
    name: string;
    location: string;
    description?: string;
    price: number
}) => {

    // validasi
    if(!data.name || !data.location || !data.price) {
        return {
            message: "semua field wajib diisi",
            success: false
        };
    }

    await prisma.tb_destination.create({
        data
    })

    return {
        message: "destinasi berhasil ditambahkan",
        success: true
    }

}