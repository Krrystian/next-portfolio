"use client";
import useAnimationHook from "./hooks/useAnimationHook";
import Link from "next/link";
import Input from "./components/Input";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { sendMail } from "@/utils/mail";
import ProjectItem from "./components/ProjectItem";
import { motion, scroll, useScroll, useTransform } from "framer-motion";
import ScrollBar from "./components/ScrollBar";
import Navbar from "./components/Navbar";
import AddSkillModal from "./components/modals/AddSkillModal";
import ShowMessageModal from "./components/modals/ShowMessageModal";
import ProjectModal from "./components/modals/ProjectModal";
import MenuList from "./components/MenuList";

type Skill = {
  id: number;
  icon: string;
  description: string;
  Category: {
    name: string;
  };
};
type AboutMe = {
  section: string;
  description: string;
};
type Project = {
  id: string;
  title: string;
  shortDescription: string;
  images: string[];
};

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [aboutMe, setAboutMe] = useState<AboutMe[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [submit, setSubmit] = useState(false);

  const skillList = async () => {
    await fetch("/api/skill/getSkills").then(async (res) => {
      const data = await res.json();
      setSkills(data);
    });
  };
  const aboutMeList = async () => {
    await fetch("/api/aboutme/getAbout").then(async (res) => {
      const data = await res.json();
      setAboutMe(data);
    });
  };
  const projectFavList = async () => {
    await fetch("/api/project/getFavourite").then(async (res) => {
      const data = await res.json();
      setProjects(data);
    });
  };

  useEffect(() => {
    skillList();
    aboutMeList();
    projectFavList();

    // const about = document.getElementById("about") as Element;
    // scroll(
    //   (progress) => {
    //     setScrollY(progress);
    //   },
    //   {
    //     axis: "y",
    //     source: about,
    //   }
    // );
  }, []);

  useAnimationHook();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setSubmit(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("Email"),
      name: formData.get("Name"),
      message: formData.get("Message"),
    };
    try {
      await fetch("/api/contact/newMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(async (data) => {
        const res = await data.json();
        if (data.status === 400) {
          console.error(res.error);
          setLoading(false);
          return;
        }
        setLoading(false);
        sendMail({
          to: "krystiancichorz708@gmail.com",
          name: res.name as string,
          subject: "PORTFOLIO WEBSITE - NEW MESSAGE " + res.email,
          body: `<h1>EMAIL: ${res.email}</h1>
                <p>NAME: ${res.name}</p>
                <p>${res.message}</p>`,
        });
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start 0.8", "end center"],
  });

  return (
    <main className="relative">
      <ScrollBar />
      <Navbar />
      <AddSkillModal />
      <ShowMessageModal />
      <ProjectModal />
      <MenuList />

      <div
        className="h-screen min-w-screen flex justify-center items-center sticky top-0"
        id="landing_page"
      >
        <div className="flex flex-col gap-4">
          <p
            className="lg:text-7xl md:text-4xl text-3xl font-extrabold opacity-0"
            id="l1"
          >
            Hello! My name is
          </p>
          <p
            className="lg:text-9xl md:text-6xl text-4xl text-green-500 font-extrabold opacity-0"
            id="l2"
          >
            Krystian Cichorz.
          </p>
          <p
            className="lg:text-7xl md:text-4xl text-3xl font-extrabold opacity-0"
            id="l3"
          >
            I am a fullstack developer.
          </p>
        </div>
      </div>
      <div className="relative bg-[#191919] min-h-screen  w-screen flex flex-col justify-center items-center pb-[50px]">
        <svg
          className="absolute top-0 translate-y-[-60%] w-full"
          viewBox="0 0 1440 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 52H345H633.064C668.205 52 700.584 32.9482 717.65 2.2293V2.2293C718.674 0.385941 721.326 0.385942 722.35 2.2293V2.2293C739.416 32.9482 771.795 52 806.936 52H1440V152H0V52Z"
            fill="#191919"
          />
        </svg>
        <div className="flex flex-col gap-16 z-20">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              image={project.images[0]}
              description="lorem ipsum"
              github="#"
              demo="#"
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        {/* <svg
          viewBox="0 0 1440 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 translate-y-[60%] w-full z-10"
        >
          <path
            d="M0 100H345H633.064C668.206 100 700.584 119.052 717.65 149.771C718.674 151.614 721.326 151.614 722.35 149.771C739.416 119.052 771.795 100 806.936 100H1440V0H0V100Z"
            fill="#191919"
          />
        </svg> */}
      </div>
      <div
        className="relative py-[192px] w-screen flex flex-col justify-center items-center bg-white gap-48 text-xl"
        ref={aboutRef}
      >
        {/* <svg
          width="312"
          height="1287"
          viewBox="0 0 312 1287"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full top-0"
        >
          <motion.path
            d="M186.5 1L9.19655 259.962C-2.16367 276.555 -1.13687 298.67 11.7119 314.138L256.38 608.686C267.452 622.015 269.887 640.519 262.64 656.259L95.3284 1019.64C87.5895 1036.45 90.9284 1056.28 103.744 1069.63L311.5 1286"
            stroke="#191919"
            strokeWidth="5"
            style={{ pathLength: scrollYProgress }}
          />
        </svg> */}
        <svg
          width="355"
          height="2000"
          viewBox="0 0 355 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-10px] h-full self-start"
        >
          <motion.path
            d="M2 0L353 166.667L2 333.333L353 500L2 666.667L353 833.333L2 1000L353 1166.67L2 1333.33L353 1500L2 1666.67L353 1833.33L2 2000"
            stroke="#191919"
            strokeWidth="20"
            style={{ pathLength: scrollYProgress }}
            strokeLinecap={"round"}
          />
        </svg>
        <svg
          width="355"
          height="2000"
          viewBox="0 0 355 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-10px] h-full self-start"
        >
          <motion.path
            d="M353 0L2 166.667L353 333.333L2 500L353 666.667L2 833.333L353 1000L2 1166.67L353 1333.33L2 1500L353 1666.67L2 1833.33L353 2000"
            stroke="#191919"
            strokeWidth="20"
            style={{ pathLength: scrollYProgress }}
            strokeLinecap={"round"}
          />
        </svg>
        <svg
          width="355"
          height="2000"
          viewBox="0 0 355 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-10px] h-full self-end"
        >
          <motion.path
            d="M2 0L353 166.667L2 333.333L353 500L2 666.667L353 833.333L2 1000L353 1166.67L2 1333.33L353 1500L2 1666.67L353 1833.33L2 2000"
            stroke="#191919"
            strokeWidth="20"
            style={{ pathLength: scrollYProgress }}
            strokeLinecap={"round"}
          />
        </svg>
        <svg
          width="355"
          height="2000"
          viewBox="0 0 355 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-10px] h-full self-end"
        >
          <motion.path
            d="M353 0L2 166.667L353 333.333L2 500L353 666.667L2 833.333L353 1000L2 1166.67L353 1333.33L2 1500L353 1666.67L2 1833.33L353 2000"
            stroke="#191919"
            strokeWidth="20"
            style={{ pathLength: scrollYProgress }}
            strokeLinecap={"round"}
          />
        </svg>

        <div className="w-[40%] text-[#191919] flex flex-col gap-8">
          <h2 className="text-9xl font-bold text-center">Experience</h2>
          {aboutMe
            .filter((about) => about.section === "experience")
            .map((about) => (
              <p key={about.section} className="text-justify">
                {about.description}
              </p>
            ))}
        </div>
        <div className="w-[40%] text-[#191919] flex flex-col gap-8">
          <h2 className="text-9xl font-bold text-center">Hobbies</h2>
          {aboutMe
            .filter((about) => about.section === "hobbies")
            .map((about) => (
              <p key={about.section} className="text-justify">
                {about.description}
              </p>
            ))}
        </div>
        <div className="w-[60%] text-[#191919] flex flex-col self-center items-center">
          <h2 className="text-9xl font-bold pb-8 text-center">Technologies</h2>
          <h3 className="text-4xl font-bold text-center pb-4">Frontend</h3>
          <div className="flex gap-4 ">
            {skills
              .filter((skill) => skill.Category.name === "FRONTEND")
              .map((skill) => (
                <p className="bg-green-500 text-white px-4 py-2 flex gap-2 justify-center items-center">
                  <Image
                    src={skill.icon}
                    alt={""}
                    width={20}
                    height={20}
                  ></Image>
                  {skill.description}
                </p>
              ))}
          </div>
          <h3 className="text-4xl font-bold text-center p-4">Backend</h3>
          <div className="flex gap-4">
            {skills
              .filter(
                (skill) =>
                  skill.Category.name === "BACKEND" ||
                  skill.Category.name === "DEVOPS"
              )
              .map((skill) => (
                <p className="bg-green-500 text-white px-4 py-2 flex gap-2 justify-center items-center">
                  <Image
                    src={skill.icon}
                    alt={""}
                    width={20}
                    height={20}
                  ></Image>
                  {skill.description}
                </p>
              ))}
          </div>
          <h3 className="text-4xl font-bold text-center p-4">Languages</h3>
          <div className="flex gap-4">
            {skills
              .filter((skill) => skill.Category.name === "LANGUAGES")
              .map((skill) => (
                <p className="bg-green-500 text-white px-4 py-2 flex gap-2 justify-center items-center">
                  <Image
                    src={skill.icon}
                    alt={skill.description}
                    width={20}
                    height={20}
                  ></Image>
                  {skill.description}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="relative md:h-screen min-w-screen flex md:flex-row flex-col justify-center items-center bg-white">
        <h2
          className="md:absolute tracking-widest hidden md:flex col-span-3 text-4xl items-center justify-center w-full font-extrabold"
          id="contact_title_middle"
        >
          <span id="contact_title_left">CON</span>
          TACT
        </h2>
        <h2 className="md:absolute tracking-widest col-span-3 text-4xl flex items-center justify-center w-full font-extrabold pb-5 top-[5vh]">
          <span id="contact_title_left_top" className="md:opacity-0 ">
            CON
          </span>
          <span id="contact_title_right_top" className="md:opacity-0">
            TACT
          </span>
        </h2>
        <figure
          className="absolute hidden md:block h-full bg-black left-0 w-0 -translate-x-8 z-10"
          id="left_wall"
        />

        <div className="md:grid md:grid-cols-2 flex flex-col w-full h-full justify-center items-center select-auto">
          <form
            className="w-full flex justify-center relative pb-[67px] md:pb-0"
            id="contact_form"
            method="post"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-8 w-full md:w-1/2">
              <div
                id="contact_body"
                className={`flex flex-col gap-8 duration-500 transition-all ${
                  submit ? "opacity-0 -z-10" : "opacity-100 z-0"
                }`}
              >
                <Input placeholder="Email" type="email" />
                <Input placeholder="Name" />
                <Input placeholder="Message" type="textarea" />
              </div>
              <button
                type="submit"
                id="contact_button"
                disabled={submit ? true : false}
                className={`bg-green-500 text-white md:w-1/3 w-full self-center absolute bottom-0 md:translate-y-16 duration-1000 transition-all ${
                  submit ? "h-full md:translate-y-0" : "h-10"
                }`}
              >
                {submit ? "Thank you for contacting me!" : "Send"}
              </button>
            </div>
          </form>
          <div className="text-xl md:p-4 py-7" id="contact_words">
            <p className="">
              I hope you enjoyed your stay here. It was a pleasure to host you
              in my humble corner. Hope to talk to you again someday, but for
              now, take care and experience your beautiful day.
            </p>
            <br />
            <p
              id="contact_hidden"
              className={`overflow-hidden duration-500 ${
                submit ? "h-full" : "h-0"
              }`}
            >
              Thank you for contacting me. I will try to respond to your message
              in the next few days.
            </p>
            <p className="italic font-bold text-black/60">Krystian Cichorz</p>
          </div>
        </div>
        <footer className="md:absolute bottom-0 w-full bg-black text-white px-2 py-1 z-20 flex justify-between text-sm md:text-base">
          <p>
            Designed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={
                aboutMe
                  .filter((about) => about.section === "github")
                  .map((about) => about.description)
                  .flat()[0]
              }
              className="underline"
            >
              Krystian Cichorz.
            </a>
          </p>
          <p>
            Icons by{" "}
            <a href="https://icons8.com/" className="underline">
              Icons8.
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
