import prisma from "@/app/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const session = await getServerSession();
        if (!session) {
          return NextResponse.json({message: "Unauthorized", status: 401});
        }
        const message = await prisma.contact.findMany();
        return NextResponse.json(message, {status: 200});
    } catch (error:any) {
        return NextResponse.json({message: "Bad Request", status: 400, error: error.message});
    }
}