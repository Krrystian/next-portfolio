import prisma from "@/app/db";
import { connect } from "http2";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized", status: 401 });
    }
  try {
    const {title, description, frontend_select, backend_select, devops_select, languages_select, tools_select, images, github, demo} = await request.json();
    const select = {
        frontend: frontend_select,
        backend: backend_select,
        devops: devops_select,
        languages: languages_select,
        tools: tools_select
    };
    const combinedSelect = select.frontend.concat(select.backend, select.devops, select.languages, select.tools);
    const project = await prisma.project.create({
      data: {
      title,
      description,
      images,
      github,
      demo,
      favorite: false,
      stack: {
        connect: combinedSelect.map((id:any) => ({ id })),
      }
      },
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Bad Request", status: 400 });
  }
}
