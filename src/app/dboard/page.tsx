"use client";
import React from "react";
import Input from "../components/Input";
const Page = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("Email"),
      password: formData.get("Password"),
    };
    console.log(data);
  };
  return (
    <section className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-4xl my-8">Welcome</h1>
      <form
        className="w-1/4 flex flex-col text-center gap-8"
        method="post"
        onSubmit={onSubmit}
      >
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <button
          type="submit"
          className="text-xl bg-green-500 text-white py-2 hover:bg-green-600 duration-500"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Page;
