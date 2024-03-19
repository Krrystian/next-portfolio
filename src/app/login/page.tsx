"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import { useFormStatus } from "react-dom";
import { signIn } from "next-auth/react";
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await signIn("credentials", {
        callbackUrl: "/dboard",
        email: formData.get("Email") as string,
        password: formData.get("Password") as string,
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const LoginButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="text-xl bg-green-500 text-white py-2 hover:bg-green-600 duration-500"
        aria-disabled={pending}
      >
        Login
      </button>
    );
  };
  return (
    <section className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-4xl my-8">Welcome</h1>
      <form
        className="w-1/4 flex flex-col text-center gap-8"
        onSubmit={onSubmit}
      >
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <LoginButton />
      </form>
      {/* <div>{errorMessage && <p>{errorMessage}</p>}</div> */}
    </section>
  );
};

export default Page;
