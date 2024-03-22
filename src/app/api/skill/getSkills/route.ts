import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
    try {
        const prisma = new PrismaClient();
        const skills = await prisma.skill.findMany({
            include: {
            Category: {
                select: {
                name: true
                }
            }
            },
            orderBy: {
            Category: {
                name: 'asc'
            }
            }
        });
        return NextResponse.json(skills, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Bad Request", status: 400});
    }
}