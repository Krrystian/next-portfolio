import prisma from "@/app/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function PUT(request: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
          return NextResponse.json({message: "Unauthorized", status: 401});
        }
        const { id } = await request.json();
        console.log(id);
        const contact = await prisma.contact.update({
          where: { id },
          data: { wasSeen: true },
        });
        return NextResponse.json({message: "Successfull update",status: 200});
    } catch (error) {
        return NextResponse.json({message: "Bad Request", status: 400});
    }
}