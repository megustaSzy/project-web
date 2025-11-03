import { PrismaClient, Role } from "@/generated/prisma";

const prisma = new PrismaClient();

interface UserData {
    name: string,
    email: string,
    password: string,
    role?: Role
}

// ambil user dari DB
export const getAllUsers = async () => {
    return prisma.tb_user.findMany({
        orderBy: {
            id: 'asc'
        }
    });
};

// ambil user berdasarkan ID

export const getUserById = async (id: number) => {
    return prisma.tb_user.findUnique({
        where: {
            id
        }
    })
}


// cek email apakah sudah diapkai user lain
export const isEmailUsedByAnotherUser = async (id: number, email: string) => {
    const existing = await prisma.tb_user.findFirst({
        where: {
            id: {
                not: id,
            },
            email
        },
    });
    return !!existing;
}


// create new user
export const createUser = async (data: UserData) => {
    const existing = await prisma.tb_user.findUnique({
        where: {
            email: data.email
        },
    });

    if(existing) {
        return {
            message: "email sudah terdaftar",
            success: false
        };
    }

    await prisma.tb_user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role || "User",
        }
    });

    return {
        success: true
    }
};

// UPDATE USER
export const updateUser = async (id: number, data: UserData) => {
    await prisma.tb_user.update({
        where: {
            id
        },
        data
    })
}

// delete user
export const deleteUser = async (id: number) => {
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



