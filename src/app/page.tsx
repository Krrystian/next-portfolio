"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import { LuMoveDown } from "react-icons/lu";
import ProjectModel from "./components/ProjectModel";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //Animate landing page
    const l1 = new SplitType("#l1", { types: "chars" });
    const l2 = new SplitType("#l2", { types: "chars" });
    const l3 = new SplitType("#l3", { types: "chars" });

    const chars_l1 = l1.chars;
    const chars_l2 = l2.chars;
    const chars_l3 = l3.chars;

    gsap.fromTo(
      [chars_l1, chars_l2, chars_l3],
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#swipe_down",
      {
        opacity: 0,
      },
      {
        delay: 4,
        opacity: 1,
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
      }
    );
    gsap.fromTo(
      "#project_more",
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        delay: 1.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#project_more",
        },
      }
    );

    //About me
    gsap.to("#about_me_title", {
      duration: 1,
      top: "5vh",
      delay: 0.5,
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_title",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.fromTo(
      "#about_me_experience",
      {
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 1.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_experience",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.to("#about_me_experience", {
      duration: 1,
      top: "15vh",
      right: "0",
      delay: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_experience",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.fromTo(
      "#about_me_links",
      {
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 2.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_links",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.to("#about_me_links", {
      duration: 1,
      top: "72vh",
      right: "0",
      delay: 3,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_links",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.fromTo(
      "#about_me_hobbies",
      {
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 3.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_hobbies",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.to("#about_me_hobbies", {
      duration: 1,
      right: "0",
      delay: 4,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_hobbies",
        start: "top 60%",
        end: "top 20%",
      },
    });

    gsap.fromTo(
      "#about_me_technologies",
      {
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 4.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_links",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.to("#about_me_technologies", {
      duration: 1,
      top: "15vh",
      left: "0",
      delay: 5,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_links",
        start: "top 60%",
        end: "top 20%",
      },
    });
  }, []);

  return (
    <section
      className="snap-y snap-mandatory overflow-x-hidden overflow-y-scroll h-[100vh] w-screen no-scrollbar px-8 select-none cursor-default"
      id="hero"
    >
      <div className="relative h-screen min-w-screen flex justify-center items-center snap-center">
        <div className="flex flex-col gap-4">
          <p className="text-7xl font-extrabold split" id="l1">
            Hello! My name is
          </p>
          <p className="text-9xl text-green-500 font-extrabold" id="l2">
            Krystian Cichorz.
          </p>
          <p className="text-7xl font-extrabold " id="l3">
            I'm a fullstack developer.
          </p>
        </div>
        <div
          className="absolute bottom-8 flex items-center flex-col"
          id="swipe_down"
        >
          <p className="text-base text-green-900">Scroll down to continue</p>
          <LuMoveDown className="text-6xl text-green-500" />
        </div>
      </div>
      <div className="relative h-screen flex justify-center items-center snap-center py-[5vh]">
        <h2 className="absolute top-[5vh] tracking-widest col-span-3 text-4xl flex items-center justify-center w-full">
          PROJECTS
        </h2>
        <div className="grid grid-cols-3">
          <ProjectModel id={1} description="hello" name="test" image="a" />
          <ProjectModel id={1} description="hello" name="test" image="a" />
          <ProjectModel id={1} description="hello" name="test" image="a" />
        </div>
        <div className="absolute bottom-8 text-xl italic" id="project_more">
          and many, many &nbsp;
          <span className="text-green-500 cursor-pointer">more</span>...
        </div>
      </div>

      <div className="relative h-screen flex flex-col justify-center items-center snap-center py-[5vh]">
        <h2
          className="absolute tracking-widest font-extrabold text-4xl flex items-center justify-center w-full"
          id="about_me_title"
        >
          ABOUT ME
        </h2>
        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_experience"
        >
          <h1 className="text-2xl ">EXPERIENCE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            quis? Impedit expedita incidunt corporis, earum eligendi odio
            sapiente veritatis quis ea accusantium maiores asperiores totam, ex
            quidem facilis nostrum odit!
          </p>
        </div>
        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_technologies"
        >
          <h2 className="text-2xl">TECHNOLOGIES</h2>
          <div className="flex flex-col justify-center items-center h-full gap-8">
            <div className="w-[80%] border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                FRONTEND
              </h4>
              <div className="p-4 flex gap-4 justify-center">
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/officel/160/000000/react.png"
                  alt="React"
                />
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/160/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-shadow-tal-revivo.png"
                  alt="Redux"
                />
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/fluency/160/tailwind_css.png"
                  alt="Tailwind CSS"
                />
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/color/160/html-5--v1.png"
                  alt="HTML"
                />
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/color/160/css3.png"
                  alt="CSS"
                />
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/fluency/160/bootstrap.png"
                  alt="Bootstrap"
                />
              </div>
            </div>
            <div className="w-[80%] border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                BACKEND
              </h4>
              items
            </div>
            <div className="w-[80%] border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                DEVOPS
              </h4>
              items
            </div>
            <div className="w-[80%] border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                LANGUAGES
              </h4>
              items
            </div>
            <div className="w-[80%] border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                TOOLS
              </h4>
              items
            </div>
          </div>
        </div>
        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_hobbies"
        >
          <h2 className="text-2xl">HOBBIES & INTERESTS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quaerat nemo repellat, ullam totam enim libero
            temporibus labore obcaecati modi autem consequatur molestiae placeat
            eligendi doloremque vero dolor illum nulla?
          </p>
        </div>

        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_links"
        >
          <h2 className="text-2xl">LINKS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quaerat nemo repellat, ullam totam enim libero
            temporibus labore obcaecati modi autem consequatur molestiae placeat
            eligendi doloremque vero dolor illum nulla?
          </p>
        </div>
      </div>
    </section>
  );
}
//ICONS BY https://icons8.com/ <-ADD
