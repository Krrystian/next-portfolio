import prisma from "@/app/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
          return NextResponse.json({message: "Unauthorized", status: 401});
        }
        const { title, description } = await request.json();
        const about = await prisma.aboutMe.create({
          data: {
            section: title,
            description: description,
            createdAt: new Date(),

          },
        });
        console.log(about);
        return NextResponse.json(about, {status: 201});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: error, status: 400});
    }
}