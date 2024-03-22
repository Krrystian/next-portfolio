import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function DELETE(request: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
          return NextResponse.json({message: "Unauthorized", status: 401});
        }
        const prisma = new PrismaClient();
        const { 
            id
        } = await request.json();
        const skill = await prisma.skill.delete({
            where: {
                id
            }
        });
        return NextResponse.json(skill, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Bad Request", status: 400});
    }
}