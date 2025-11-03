import { deleteDestination, getDestinationById, updateDestination } from "@/services/destinationService";
import { NextRequest, NextResponse } from "next/server";

// 🟢 GET by ID
export const GET = async (req: Request,
  context: { params: Promise<{ id: string }> }) => {
  try {
    const { id } = await context.params;
    const destId = Number(id);

    if (isNaN(destId)) {
      return NextResponse.json(
        { message: "id tidak valid", success: false },
      );
    }

    const destination = await getDestinationById(destId);

    if (!destination) {
      return NextResponse.json(
        { message: "destination tidak ditemukan", success: false },
      );
    }

    return NextResponse.json({destination });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "gagal mengambil data destination", success: false },
    );
  }
};

//  DELETE by ID
export const DELETE = async (req: NextRequest,
    context: { params: Promise<{ id: string }> }) => {
  try {
    const { id } = await context.params;
    const destId = Number(id);

    if (isNaN(destId)) {
      return NextResponse.json(
        { message: "id tidak valid", success: false },
      );
    }

    const result = await deleteDestination(destId);
    const status = result.success ? 200 : 404;

    return NextResponse.json(result, { status });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "terjadi kesalahan saat menghapus destination", success: false },
    );
  }
};

// 🟠 PUT update by ID
export const PUT = async (request: NextRequest,
    context: { params: Promise<{ id: string }> }) => {
  try {
    const { id } = await context.params;
    const destId = Number(id);
    const data = await request.json();

    if (isNaN(destId)) {
      return NextResponse.json(
        { message: "id tidak valid", success: false },
      );
    }

    const result = await updateDestination(destId, data);
    const status = result.success ? 200 : 404;

    return NextResponse.json(result, { status });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "terjadi kesalahan saat mengubah destination", success: false },
    );
  }
};
