import prisma from "@/app/db";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
    try {
        
        const skills = await prisma.skill.findMany({
            include: {
                Category: {
                    select: {
                    name: true
                    }
                }
            },
        });
        return NextResponse.json(skills, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Bad Request", status: 400});
    }
}