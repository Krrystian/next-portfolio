import prisma from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const aboutMe = await prisma.aboutMe.findMany({
            select: {
                section: true,
                description: true,
            }
        });
        return NextResponse.json(aboutMe, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Bad Request", status: 400});
    }
}