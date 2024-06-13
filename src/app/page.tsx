"use client";
import useAnimationHook from "./hooks/useAnimationHook";
import Input from "./components/Input";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { sendMail } from "@/utils/mail";
import ProjectItem from "./components/ProjectItem";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ScrollBar from "./components/ScrollBar";
import Navbar from "./components/Navbar";
import AddSkillModal from "./components/modals/AddSkillModal";
import ShowMessageModal from "./components/modals/ShowMessageModal";
import ProjectModal from "./components/modals/ProjectModal";
import MenuList from "./components/MenuList";
import Loading from "./components/Loading";
import Mouse from "./components/Mouse";

//LINKI NA GŁÓWNEJ STRONIE ZROBIĆ
//DB pozmieniac zdjecia na lepsze

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
  description: string[];
  github: string;
  demo: string;
  id: string;
  title: string;
  images: {
    url: string;
    main: boolean;
  }[];
  stack: {
    description: string;
  }[];
};

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [aboutMe, setAboutMe] = useState<AboutMe[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [submit, setSubmit] = useState(false);
  const [skillLoadingValue, setSkillLoadingValue] = useState(0);
  const [prepared, setPrepared] = useState(false);
  const skillList = async () => {
    await fetch("/api/skill/getSkills").then(async (res) => {
      const data = await res.json();
      setSkills(data);
      setSkillLoadingValue(40 / data.length);
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
      console.log(data);
    });
  };

  useEffect(() => {
    skillList();
    aboutMeList();
    projectFavList();
  }, []);

  useAnimationHook(prepared);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Send");
  const [loadingWidth, setLoadingWidth] = useState(0);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const increaseLoading = (value: number) => {
    setLoadingWidth((prev) => prev + value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus("Loading...");
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
          setStatus("Error sending message. Try again later.");
          setLoading(false);
          return;
        }
        setStatus("Message sent!");
        setLoading(false);
        sendMail({
          to: "krystiancichorz708@gmail.com",
          name: res.name as string,
          subject: "PORTFOLIO WEBSITE - NEW MESSAGE " + res.email,
          body: `<h1>EMAIL: ${res.email}</h1>
                <p>NAME: ${res.name}</p>
                <p>${res.message}</p>`,
        });
        if (nameRef.current && emailRef.current && messageRef.current) {
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        }
      });
    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Try again later.");
      setLoading(false);
    }
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start 0.8", "end center"],
  });

  const expRef = useRef<HTMLDivElement>(null);
  const hobRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const conRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { scrollYProgress: scrollYProgressExp } = useScroll({
    target: expRef,
    offset: ["start 0.6", "center center"],
  });
  const { scrollYProgress: scrollYProgressHob } = useScroll({
    target: hobRef,
    offset: ["start 0.6", "center center"],
  });
  const { scrollYProgress: scrollYProgressTech } = useScroll({
    target: techRef,
    offset: ["start 0.6", "0.2 center"],
  });
  const { scrollYProgress: scrollYCon } = useScroll({
    target: conRef,
    offset: ["start center", "center center"],
  });
  const { scrollYProgress: scrollYForm } = useScroll({
    target: formRef,
    offset: ["center 0.8", "end 0.8"],
  });
  const wd = useTransform(scrollYCon, [0, 1], ["0%", "100%"]);
  return (
    <>
      <div
        className={`duration-1000 transition-all fixed  ${
          prepared ? "opacity-0 -z-10" : "opacity-100 z-[60]"
        }`}
      >
        <Loading
          width={loadingWidth}
          complete={() => {
            if (!prepared) {
              setPrepared(true);
            }
          }}
        />
      </div>
      <Mouse />
      <main className="relative">
        <ScrollBar />
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
              className="lg:text-7xl md:text-4xl text-4xl font-extrabold opacity-0"
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
              className="lg:text-7xl md:text-4xl text-4xl font-extrabold opacity-0"
              id="l3"
            >
              Fullstack developer.
            </p>
          </div>
        </div>
        <div className="relative bg-[#191919] min-h-screen w-screen flex flex-col justify-center items-center pb-[50px]">
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
            {projects.length > 0 &&
              projects.map((project, index) => (
                <ProjectItem
                  key={project.id}
                  title={project.title}
                  image={
                    project.images.find((image: any) => image.main == true)
                      ?.url || ""
                  }
                  description={project.description}
                  github={project.github}
                  demo={project.demo}
                  loaded={() => increaseLoading(20)}
                  reverse={index % 2 !== 0}
                  stack={project.stack}
                />
              ))}
          </div>
        </div>
        <div
          className="relative w-screen overflow-y-hidden flex flex-col justify-center items-center bg-white gap-48 text-xl overflow-x-hidden"
          ref={aboutRef}
        >
          <svg
            viewBox="0 0 1063 2004"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-5px] scale-105 h-full hidden md:block"
          >
            <motion.path
              d="M13.5 1L207.255 121.044C231.089 135.81 258.042 144.805 285.967 147.311L602.765 175.742C623.107 177.567 642.989 182.841 661.561 191.338L899.346 300.124C936.659 317.194 967.019 346.5 985.397 383.186L1025.47 463.18C1062.27 536.641 1044.66 625.698 982.663 679.618L945.447 711.986C894 756.733 821.685 768.569 758.656 742.559L542.436 653.33C518.752 643.556 493.254 638.951 467.647 639.823L249.879 647.236C189.95 649.276 134.972 681.026 103.251 731.913L28.3129 852.13C-10.295 914.066 -7.68253 993.184 34.9269 1052.44L78.4817 1113.01C107.816 1153.8 152.865 1180.47 202.738 1186.58L425.351 1213.85C455.62 1217.56 486.335 1213.51 514.614 1202.1L672.018 1138.55C732.513 1114.13 801.486 1124.36 852.297 1165.27L994.405 1279.72C1061.08 1333.41 1080.71 1426.64 1041.36 1502.66L979.325 1622.48C950.815 1677.55 895.964 1714.07 834.156 1719.13L715.372 1728.85C631.991 1735.67 564.302 1799.05 552.007 1881.8L534 2003"
              stroke="#191919"
              strokeWidth="7"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <div
            className="w-full h-full flex flex-col justify-center items-center gap-16 md:gap-48 backdrop-blur-sm overflow-x-hidden"
            id="about_me"
          >
            <motion.div
              className="md:mt-[192px] md:w-[40%] p-8 md:p-0 text-[#191919] flex flex-col gap-8 opacity-0"
              ref={expRef}
              style={{ opacity: scrollYProgressExp }}
            >
              <h2 className="text-6xl md:text-9xl font-bold text-center">
                Experience
              </h2>
              {aboutMe
                .filter((about) => about.section === "experience")
                .map((about) => (
                  <p key={about.section} className="text-justify">
                    {about.description}
                  </p>
                ))}
            </motion.div>
            <motion.div
              className="md:w-[40%] p-8 md:p-0 text-[#191919] flex flex-col gap-8 opacity-0"
              ref={hobRef}
              style={{ opacity: scrollYProgressHob }}
            >
              <h2 className="text-6xl md:text-9xl font-bold text-center">
                Hobbies
              </h2>
              {aboutMe
                .filter((about) => about.section === "hobbies")
                .map((about) => (
                  <p key={about.section} className="text-justify">
                    {about.description}
                  </p>
                ))}
            </motion.div>
            <motion.div
              className="md:w-[80%] p-8 text-[#191919] flex flex-col self-center items-center opacity-0 md:pb-[192px]"
              ref={techRef}
              style={{ opacity: scrollYProgressTech }}
            >
              <h2 className="text-6xl md:text-9xl font-bold pb-8 text-center">
                Technologies
              </h2>
              <h3 className="text-4xl font-bold text-center pb-4">Frontend</h3>
              <div className="md:flex grid grid-cols-2 gap-4 w-full">
                {skills
                  .filter((skill) => skill.Category.name === "FRONTEND")
                  .map((skill, index) => (
                    <p
                      className="bg-green-500 w-full text-white px-4 p-2 flex gap-2 justify-center items-center"
                      key={index}
                    >
                      <Image
                        src={skill.icon}
                        alt={""}
                        width={20}
                        height={20}
                        onLoad={() => increaseLoading(skillLoadingValue)}
                        priority
                      ></Image>
                      {skill.description}
                    </p>
                  ))}
              </div>
              <h3 className="text-4xl font-bold text-center p-4">Backend</h3>
              <div className="md:flex grid grid-cols-2 gap-4 w-full justify-center">
                {skills
                  .filter(
                    (skill) =>
                      skill.Category.name === "BACKEND" ||
                      skill.Category.name === "DEVOPS"
                  )
                  .map((skill, index) => (
                    <p
                      className="bg-green-500 w-full text-white px-4 py-2 flex gap-2 justify-center items-center"
                      key={index}
                    >
                      <Image
                        src={skill.icon}
                        alt={""}
                        width={20}
                        height={20}
                        onLoad={() => increaseLoading(skillLoadingValue)}
                        priority
                      ></Image>
                      {skill.description}
                    </p>
                  ))}
              </div>
              <h3 className="text-4xl font-bold text-center p-4">Languages</h3>
              <div className="md:flex grid grid-cols-2 gap-4 w-full">
                {skills
                  .filter((skill) => skill.Category.name === "LANGUAGES")
                  .map((skill, index) => (
                    <p
                      className="bg-green-500 w-full text-white px-4 py-2 flex gap-2 justify-center items-center"
                      key={index}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.description}
                        width={20}
                        height={20}
                        onLoad={() => increaseLoading(skillLoadingValue)}
                        priority
                      ></Image>
                      {skill.description}
                    </p>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative h-[93vh] flex md:flex-row flex-col justify-center items-center bg-white overflow-x-hidden">
          <div className="flex flex-col w-full h-full items-center gap-8 md:gap-24">
            <motion.h2
              className="text-3xl md:text-7xl text-white bg-[#191919] py-4 md:py-8 text-center font-bold w-0 text-nowrap"
              ref={conRef}
              style={{ width: wd }}
            >
              Leave something behind
            </motion.h2>
            <motion.form
              className="w-full flex justify-center relative opacity-0"
              ref={formRef}
              style={{ opacity: scrollYForm }}
              method="post"
              onSubmit={onSubmit}
              id="contact_form"
            >
              <div className="flex flex-col gap-8 w-full md:w-[40%] px-8 md:px-0">
                <Input
                  placeholder="Email"
                  type="email"
                  referenceInput={emailRef}
                />
                <Input placeholder="Name" referenceInput={nameRef} />
                <Input
                  placeholder="Message"
                  type="textarea"
                  referenceArea={messageRef}
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 h-12 hover:bg-green-700 transition-all duration-300 ease-in-out"
                  disabled={loading}
                >
                  {status}
                </button>
              </div>
            </motion.form>
          </div>
          <footer className="md:absolute bottom-0 w-full bg-black text-white px-2 py-2 z-20 flex justify-between text-sm md:text-base">
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
    </>
  );
}
