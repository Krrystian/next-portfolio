"use client";
import { toggleAddSkillModal } from "@/app/store/dboardSlice";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
interface ModelProps {
  title: string;
  body: React.ReactNode;
}
const Model: React.FC<ModelProps> = ({ title, body }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleAddSkillModal());
  };
  return (
    <div className="bg-black/50 z-[100] h-full w-full absolute flex justify-center items-center">
      <div className="relative w-3/5 h-3/5 bg-white rounded-xl">
        <IoClose
          size={40}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={closeModal}
        />
        <h2 className="w-full text-3xl border-b-4 text-center mt-4 pb-4">
          {title}
        </h2>
        <div className="w-full justify-center flex flex-col p-4">{body}</div>
      </div>
    </div>
  );
};

export default Model;
