"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import { useFormState, useFormStatus } from "react-dom";

const Page = () => {
  // const [loading, setLoading] = useState(false);
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (loading) return;
  //   setLoading(true);
  //   const formData = new FormData(e.currentTarget);
  //   const data = {
  //     email: formData.get("Email"),
  //     password: formData.get("Password"),
  //   };
  //   console.log(data);
  //   setLoading(false);
  // };

  //const [errorMessage, dispatch] = useFormState(authenticate, undefined);

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
      <form className="w-1/4 flex flex-col text-center gap-8">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <LoginButton />
      </form>
      {/* <div>{errorMessage && <p>{errorMessage}</p>}</div> */}
    </section>
  );
};

export default Page;
