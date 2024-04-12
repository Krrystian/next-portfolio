import prisma from "@/app/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();
    try {
        if (!session) {
          return NextResponse.json({message: "Unauthorized", status: 401});
        }
        const message = await prisma.contact.findMany();
        return NextResponse.json(message, {status: 200});
    } catch (error:any) {
        return NextResponse.json({message: "Bad Request", status: 400, error: error.message});
    }
}
export const dynamic = 'force-dynamic';