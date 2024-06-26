import prisma from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { projectId: string } }) {
    try {
      const project = await prisma.project.findFirst({
        where: {
          id: params.projectId
        },
        include: {
          stack: {
            select: {
              description: true,
            },
          },
        },
      });
      if (!project) {
        return NextResponse.json({message: "Project not found", status: 404});
      }
      return NextResponse.json(project, {status: 200});
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({message: "Internal Server Error", status: 500});
    }
  }