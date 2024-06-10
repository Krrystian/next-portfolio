import prisma from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            where: {
                favorite: true
            },
            select: {
                id: true,
                title: true,
                description: true,
                stack: true,
                images: true,
                github: true,
                demo: true,
            }
        });
        return NextResponse.json(projects, {status: 200});
    } catch (error) {
        console.log(error); 
        return NextResponse.json({message: "Bad Request", status: 400});
    }
}