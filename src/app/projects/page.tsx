"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import ProjectModel from "../components/ProjectModel";
const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#i2", {
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: "#i2",
        start: "top 80%",
        end: "top 20%",
      },
    });
  }, []);
  return (
    <section className="text-3xl px-32 flex flex-col items-center pt-[5vh] scroll-smooth">
      <h1 className="text-center text-4xl py-8">Projects</h1>
      <div className="grid grid-cols-3 gap-4 items-center justify-center">
        <ProjectModel id={0} name={"das"} type={"dcdsc"} image={""} small />
        <ProjectModel
          id={0}
          name={"cdscds"}
          type={"cdscdscds"}
          image={""}
          small
        />
        <ProjectModel
          id={0}
          name={"cdscdscds"}
          type={"cdscdscdscdscd"}
          image={""}
          small
        />
        <ProjectModel id={0} name={"cds"} type={"cds"} image={""} small />
        <ProjectModel
          id={0}
          name={"cdscdscds"}
          type={" dsc acas dwf ds sdff sd "}
          image={""}
          small
        />
        <ProjectModel
          id={0}
          name={"asdsa"}
          type={"asdas dsad a"}
          image={""}
          small
        />
      </div>
    </section>
  );
};

export default Page;
