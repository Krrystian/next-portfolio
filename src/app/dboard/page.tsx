"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();
  if (!session || !session.user) {
    redirect("/");
  }
};

export default Page;
