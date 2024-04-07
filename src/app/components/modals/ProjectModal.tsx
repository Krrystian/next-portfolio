"use client";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Modal";
import { toggleProjectModal } from "@/app/store/dboardSlice";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import ImageUpload from "../ImageUpload";

enum STEPS {
  BASIC = 0,
  STACK = 1,
  IMAGES = 2,
  LINKS = 3,
}
const ProjectModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = React.useState<number>(0);
  const [skills, setSkills] = React.useState<any[]>([]);
  const [buttonText, setButtonText] = React.useState<string>("NEXT");
  const project = useSelector(
    (state: any) => state.dboardSlice.addProjectModal
  );
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      frontend_select: [],
      backend_select: [],
      devops_select: [],
      languages_select: [],
      tools_select: [],
      images: [],
      github: "",
      demo: "",
    },
  });

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
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    fetch("/api/project/addProject", {
      body: JSON.stringify(data),
      method: "POST",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          dispatch(toggleProjectModal());
        });
      }
    });
  };

  const bodyBasic = (
    <div className="grid grid-cols-4 gap-y-4 text-xl w-[60%]">
      <label htmlFor="title" className="self-center text-center">
        Title:
      </label>
      <input
        type="text"
        id="title"
        {...register("title", { required: true })}
        placeholder="Type title here..."
        className="border-b-2 border-black px-1 py-2 outline-none col-span-3"
      />
      <textarea
        id="description"
        {...register("description", { required: true })}
        placeholder="Type description here..."
        className=" px-1 py-2 outline-none col-span-4 resize-none"
        rows={10}
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
            id="frontend_select"
            {...register("frontend_select")}
            multiple
            className="w-full border-2 border-black outline-none"
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
            id="backend_select"
            {...register("backend_select")}
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
            id="devops_select"
            {...register("devops_select")}
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
            id="languages_select"
            {...register("languages_select")}
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
            id="tools_select"
            {...register("tools_select")}
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
  const bodyImages = (
    <div className="flex flex-col text-xl">
      <ImageUpload
        callback={(files) => {
          setValue("images", files);
          console.log(files);
        }}
      />
    </div>
  );
  const bodyLinks = (
    <div className="grid grid-cols-4 text-xl w-[60%] gap-4">
      <label htmlFor="githubLinkProject" className="self-center text-center">
        Github:
      </label>
      <input
        type="text"
        id="githubLinkProject"
        {...register("github", { required: true })}
        placeholder="Type link here..."
        className="border-b-2 border-black px-1 py-2 outline-none col-span-3"
      />
      <label htmlFor="demoLinkProject" className="self-center text-center">
        Demo:
      </label>
      <input
        type="text"
        id="demobLinkProject"
        {...register("demo", { required: true })}
        placeholder="Type link here..."
        className="border-b-2 border-black px-1 py-2 outline-none col-span-3"
      />
    </div>
  );

  let child: React.ReactElement;
  const currentStep = useMemo(() => {
    if (step === STEPS.BASIC) {
      return bodyBasic;
    } else if (step === STEPS.STACK) {
      return bodyStack;
    } else if (step === STEPS.IMAGES) {
      setButtonText("NEXT");
      return bodyImages;
    } else if (step === STEPS.LINKS) {
      setButtonText((prev) => (prev = "FINISH"));
      return bodyLinks;
    }
    return <div>Error</div>;
  }, [step]);
  const body = (
    <div>
      <form
        className="flex justify-center flex-col items-center"
        id="project_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {currentStep}
        <div className="absolute bottom-4 px-4 flex w-full *:p-4 gap-4 tracking-wider">
          <button
            type="button"
            className="w-full hover:bg-black hover:text-white duration-300 border-black border-2 rounded-xl"
            onClick={() => {
              if (step > 0 && step <= 3) setStep(step - 1);
            }}
          >
            BACK
          </button>
          <button
            type="button"
            className={`w-full hover:bg-black hover:text-white duration-300 border-black border-2 rounded-xl ${
              step === 3 && "hidden"
            }`}
            onClick={() => {
              if (step >= 0 && step < 3) setStep(step + 1);
            }}
          >
            {buttonText}
          </button>
          <button
            type="submit"
            className={`w-full hover:bg-black hover:text-white duration-300 border-black border-2 rounded-xl ${
              step === 3 ? "visible" : "hidden"
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
