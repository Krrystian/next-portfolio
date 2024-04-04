"use client";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Modal";
import { toggleProjectModal } from "@/app/store/dboardSlice";

enum STEPS {
  BASIC = 0,
  STACK = 1,
  SKILLS = 2,
  IMAGES = 3,
  LINKS = 4,
}
const ProjectModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = React.useState<number>(0);
  const [skills, setSkills] = React.useState<any[]>([]);
  const project = useSelector(
    (state: any) => state.dboardSlice.addProjectModal
  );
  const fetchStacks = async () => {
    await fetch("/api/skill/getSkills").then((res) => {
      res.json().then((data) => {
        setSkills(data);
      });
    });
  };
  useEffect(() => {
    fetchStacks();
  }, []);
  const bodyBasic = (
    <div className="grid grid-cols-4 gap-y-4 text-xl w-[60%]">
      <label htmlFor="title" className="self-center text-center">
        Title:
      </label>
      <input
        required
        type="text"
        id="title"
        placeholder="Type title here..."
        className="border-b-2 border-black px-1 py-2 outline-none col-span-3"
      />
      <textarea
        required
        id="description"
        placeholder="Type description here..."
        className=" px-1 py-2 outline-none col-span-4 resize-none"
        rows={10}
      />
    </div>
  );
  const bodyStack = (
    <div className="grid grid-cols-4 gap-y-4 text-xl w-[60%]"></div>
  );

  let child: React.ReactElement;
  const currentStep = useMemo(() => {
    if (step === STEPS.BASIC) {
      return bodyBasic;
    } else if (step === STEPS.STACK) {
      return <div>DESCRIPTION</div>;
    } else if (step === STEPS.SKILLS) {
      return <div>SKILLS</div>;
    } else if (step === STEPS.IMAGES) {
      return <div>IMAGES</div>;
    } else if (step === STEPS.LINKS) {
      return <div>LINKS</div>;
    }
    return <div>Error</div>;
  }, [step]);
  const body = (
    <div>
      <form className="flex justify-center">{currentStep}</form>
      <div className="flex w-full *:p-4 gap-4 tracking-wider">
        <button
          className="w-full hover:bg-black hover:text-white duration-300 border-black border-2 rounded-xl"
          onClick={() => {
            if (step > 0 && step <= 4) setStep(step - 1);
          }}
        >
          BACK
        </button>
        <button
          className="w-full hover:bg-black hover:text-white duration-300 border-black border-2 rounded-xl"
          onClick={() => {
            if (step >= 0 && step < 4) setStep(step + 1);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
  if (!project) return null;
  return (
    <Model
      title="New Project"
      body={body}
      exit={() => dispatch(toggleProjectModal())}
    />
  );
};

export default ProjectModal;
