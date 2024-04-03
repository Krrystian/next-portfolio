"use client";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Modal";
import { toggleProjectModal } from "@/app/store/dboardSlice";

enum STEPS {
  BASIC = 0,
  DESCRIPTION = 1,
  SKILLS = 2,
  IMAGES = 3,
  LINKS = 4,
}
const ProjectModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = React.useState<number>(0);
  const project = useSelector(
    (state: any) => state.dboardSlice.addProjectModal
  );
  const bodyBasic = (
    <div className="grid grid-cols-2 gap-y-4 text-xl">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        placeholder="Type title here..."
        className="border-b-2 border-black px-1 py-2 outline-none"
      />
      <textarea
        id="description"
        placeholder="Type description here..."
        className=" px-1 py-2 outline-none col-span-2 resize-none"
        rows={10}
      />
    </div>
  );

  let child: React.ReactElement;
  const currentStep = useMemo(() => {
    if (step === STEPS.BASIC) {
      return bodyBasic;
    } else if (step === STEPS.DESCRIPTION) {
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
      {currentStep}
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
