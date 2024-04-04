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
  const [buttonText, setButtonText] = React.useState<string>("NEXT");
  const [form, setForm] = React.useState<any>({
    title: "",
    description: "",
    skills: [],
  });
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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.title, form.description, form.skills);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value });
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, description: e.target.value });
  };
  const handleSelectedSkillsChange = (e: any) => {
    const values = Array.from(
      e.currentTarget.selectedOptions,
      (option: any) => option.value
    );
    setForm({ ...form, skills: values });
  };

  const bodyBasic = (
    <div className="grid grid-cols-4 gap-y-4 text-xl w-[60%]">
      <label htmlFor="title" className="self-center text-center">
        Title:
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Type title here..."
        className="border-b-2 border-black px-1 py-2 outline-none col-span-3"
        onChange={handleTitleChange}
      />
      <textarea
        id="description"
        name="description"
        placeholder="Type description here..."
        className=" px-1 py-2 outline-none col-span-4 resize-none"
        rows={10}
        onChange={handleDescriptionChange}
      />
    </div>
  );
  const bodyStack = (
    <div className="flex flex-col text-xl">
      <h2 className="w-full text-center text-xl pb-16">CHOOSE SKILLS</h2>
      <div className="col-span-3 grid grid-cols-5 gap-4 select-none">
        <div>
          <h3 className="w-full text-center text-xl">FRONTEND</h3>
          <select
            name="frontend_select"
            id="frontend_select"
            multiple
            className="w-full border-2 border-black outline-none"
            onChange={handleSelectedSkillsChange}
          >
            {skills
              .filter((skill: any) => skill.Category.name === "FRONTEND")
              .map((skill: any) => (
                <option
                  key={skill.id}
                  className="border-b-2 text-center w-full"
                  value={skill.id}
                >
                  {skill.description}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h3 className="w-full text-center text-xl ">BACKEND</h3>
          <select
            name="backend_select"
            id="backend_select"
            multiple
            className="w-full border-2 border-black outline-none"
          >
            {skills
              .filter((skill: any) => skill.Category.name === "BACKEND")
              .map((skill: any) => (
                <option
                  key={skill.id}
                  className="border-b-2 text-center w-full"
                  value={skill.id}
                >
                  {skill.description}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h3 className="w-full text-center text-xl ">DEVOPS</h3>
          <select
            name="devops_select"
            id="devops_select"
            multiple
            className="w-full border-2 border-black outline-none"
          >
            {skills
              .filter((skill: any) => skill.Category.name === "DEVOPS")
              .map((skill: any) => (
                <option
                  key={skill.id}
                  className="border-b-2 text-center w-full"
                  value={skill.id}
                >
                  {skill.description}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h3 className="w-full text-center text-xl ">LANGUAGES</h3>
          <select
            name="languages_select"
            id="languages_select"
            multiple
            className="w-full border-2 border-black outline-none"
          >
            {skills
              .filter((skill: any) => skill.Category.name === "LANGUAGES")
              .map((skill: any) => (
                <option
                  key={skill.id}
                  className="border-b-2 text-center w-full"
                  value={skill.id}
                >
                  {skill.description}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h3 className="w-full text-center text-xl ">TOOLS</h3>
          <select
            name="tools_select"
            id="tools_select"
            multiple
            className="w-full border-2 border-black outline-none"
          >
            {skills
              .filter((skill: any) => skill.Category.name === "TOOLS")
              .map((skill: any) => (
                <option
                  key={skill.id}
                  className="border-b-2 text-center w-full"
                  value={skill.id}
                >
                  {skill.description}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );

  let child: React.ReactElement;
  const currentStep = useMemo(() => {
    if (step === STEPS.BASIC) {
      return bodyBasic;
    } else if (step === STEPS.STACK) {
      return bodyStack;
    } else if (step === STEPS.SKILLS) {
      return <div>SKILLS</div>;
    } else if (step === STEPS.IMAGES) {
      setButtonText("NEXT");
      return <div>IMAGES</div>;
    } else if (step === STEPS.LINKS) {
      setButtonText((prev) => (prev = "FINISH"));
      return <div>LINKS</div>;
    }
    return <div>Error</div>;
  }, [step]);
  const body = (
    <div>
      <form
        className="flex justify-center flex-col items-center"
        id="project_form"
        onSubmit={onSubmit}
      >
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
            type="button"
            className={`w-full hover:bg-black hover:text-white duration-300 border-black border-2 rounded-xl ${
              step === 4 && "hidden"
            }`}
            onClick={() => {
              if (step >= 0 && step < 4) setStep(step + 1);
            }}
          >
            {buttonText}
          </button>
          <button
            type="submit"
            className={`w-full hover:bg-black hover:text-white duration-300 border-black border-2 rounded-xl ${
              step === 4 ? "visible" : "hidden"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </form>
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
