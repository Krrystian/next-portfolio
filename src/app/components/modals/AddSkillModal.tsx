"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Model from "./Modal";
import { useSelector } from "react-redux";
const AddSkillModal = () => {
  const addSkill = useSelector((state: any) => state.dboardSlice.addSkillModal);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (addSkill) {
      fetch("api/category", { method: "GET" });
    }
  }, [addSkill]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { icon, desc } = event.currentTarget.elements as any;
    //    const formData = new FormData(event?.currentTarget);
  };
  const body = (
    <form
      className="grid grid-cols-2 gap-4 p-4 w-[60%] self-center"
      onSubmit={onSubmit}
    >
      <label
        htmlFor="icon"
        className="text-center self-center text-xl tracking-wide"
      >
        Icon name:
      </label>
      <input
        id="icon"
        type="text"
        className="border-b-2 border-black text-xl py-2 px-1 focus:outline-none"
        placeholder="Type icon name"
        required
      />
      <label
        htmlFor="desc"
        className="text-center self-center text-xl tracking-wide"
      >
        Description:
      </label>
      <input
        id="desc"
        type="text"
        className="border-b-2 border-black text-xl py-2 px-1 focus:outline-none"
        placeholder="Type description"
        required
      />
      {/* <label
        htmlFor="category"
        className="text-center self-center text-xl tracking-wide"
      >
        Category:
      </label>
      <select
        id="category"
        className="border-b-2 border-black text-xl py-2 px-1 focus:outline-none"
      >
        <option value=""></option>
      </select> */}
      <button
        type="submit"
        className="border-2 border-black p-4 w-full col-span-2 rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
      >
        Add skill
      </button>
    </form>
  );
  return <Model title="Add skill" body={body} />;
};

export default AddSkillModal;
