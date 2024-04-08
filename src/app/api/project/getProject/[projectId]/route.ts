import prisma from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, {projectId}: {projectId: string}) {
    try {
        const project = await prisma.project.findFirst({
            where: {
            id: projectId
            },
            include: {
            stack: {
                select: {
                icon: true,
                description: true,
                },
            },
            },
        });
        if (!project) {
            return NextResponse.json({message: "Project not found", status: 404});
        }
        console.log(project);
        return NextResponse.json(project, {status: 200});
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({message: "Internal Server Error", status: 500});
    }
}
