import prisma from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            where: {
            favorite: true
            },
            select: {
            title: true,
            id: true,
            description: true
            }
        });
        return NextResponse.json(projects, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Bad Request", status: 400});
    }
}