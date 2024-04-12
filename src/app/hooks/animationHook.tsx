"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const animationHook = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    //Animate landing page
    const l1 = new SplitType("#l1", { types: "chars" });
    const l2 = new SplitType("#l2", { types: "chars" });
    const l3 = new SplitType("#l3", { types: "chars" });

    const chars_l1 = l1.chars;
    const chars_l2 = l2.chars;
    const chars_l3 = l3.chars;

    gsap.to(["#l1", "#l2", "#l3"], { opacity: 1 });
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
    if (screenWidth > 768) {
      //About me
      gsap.fromTo(
        "#about_me_title",
        {
          top: window.innerHeight / 2,
        },
        {
          duration: 1,
          top: "5vh",
          delay: 0.5,
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#about_me_title",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#about_me_experience",
        {
          opacity: 0,
          top: window.innerHeight / 2,
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
        right: "4vw",
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
          top: window.innerHeight / 2,
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
        top: "75vh",
        right: "4vw",
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
          top: window.innerHeight / 2,
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
        right: "4vw",
        top: "45vh",
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
          top: window.innerHeight / 2,
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
      gsap.fromTo(
        "#about_me_technologies",
        {
          top: window.innerHeight / 2,
        },
        {
          duration: 1,
          top: "15vh",
          left: "4vw",
          delay: 5,
          ease: "power1.inOut",
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#about_me_links",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        [
          "#about_me_experience_body",
          "#about_me_technologies_body",
          "#about_me_hobbies_body",
          "#about_me_links_body",
        ],
        {
          opacity: 0,
          display: "none",
        },
        {
          duration: 0.5,
          opacity: 1,
          display: "",
          delay: 6,
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#about_me_experience_body",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );

      //Contact animation
      gsap.fromTo(
        "#left_wall",
        {
          width: "0vw",
          left: "0vw",
        },
        {
          duration: 1,
          delay: 1,
          width: "50vw",
          ease: "none",
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#left_wall",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#left_wall",
        {
          left: "0vw",
        },
        {
          duration: 1,
          delay: 2,
          left: "50vw",
          ease: "none",
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#left_wall",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#left_wall",
        { left: "50vw" },
        {
          duration: 1,
          delay: 3,
          left: "100vw",
          ease: "none",
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#left_wall",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      //Concat text
      gsap.fromTo(
        "#contact_title_left",
        {
          opacity: 1,
        },
        {
          duration: 0.1,
          delay: 2,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#contact_title_left",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#contact_title_left_top",
        {
          opacity: 0,
        },
        {
          duration: 0.1,
          delay: 2,
          opacity: 1,
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#contact_title_left",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#contact_title_middle",
        {
          display: "",
        },
        {
          duration: 0.1,
          delay: 2.5,
          opacity: 0,
          display: "hidden",
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#contact_title_middle",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#contact_title_right_top",
        {
          opacity: 0,
        },
        {
          duration: 0.1,
          delay: 2.5,
          opacity: 1,
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#contact_title_middle",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#contact_form",
        { opacity: 0 },
        {
          duration: 0.1,
          delay: 2,
          opacity: 1,
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#contact_form",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#contact_form",
        {
          zIndex: -1,
        },
        {
          duration: 0.1,
          delay: 3,
          zIndex: 20,
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#contact_form",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
      gsap.fromTo(
        "#contact_words",
        {
          opacity: 0,
        },
        {
          duration: 0.1,
          delay: 2.8,
          opacity: 1,
          scrollTrigger: {
            scroller: "#hero",
            trigger: "#contact_words",
            start: "top 60%",
            end: "top 20%",
          },
        }
      );
    }
  }, []);
};

export default animationHook;
