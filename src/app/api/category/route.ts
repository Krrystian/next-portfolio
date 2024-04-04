import prisma from "@/app/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({message: "Unauthorized", status: 401});
    }
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({message: "Bad Request", status: 400});
  }
}