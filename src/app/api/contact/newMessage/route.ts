import prisma from "@/app/db";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isValidEmail = regex.test(email);
    if (!isValidEmail) {
      return NextResponse.json({ message: "Invalid Email", status: 400 });
    }
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message
        },
    });
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Bad Request", status: 400 });
  }
}
