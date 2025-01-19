"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconAi, IconAnalyze, IconHome, IconInfoCircle, IconUser, IconMail } from "@tabler/icons-react";
import { HeroParallax } from "@/components/ui/hero-parallax"; // Zorg ervoor dat de import correct is
import { FlipWords } from "@/components/ui/flip-words"; // Zorg ervoor dat de import correct is

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State voor dark mode
  const [activeItem, setActiveItem] = useState(null);

  const links = [
    {
      label: "Home",
      href: "/home",
      icon: <IconHome className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "About Me",
      href: "/",
      icon: <IconUser className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <IconInfoCircle className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Services",
      href: "/services",
      icon: <IconAnalyze className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <IconMail className="text-white h-5 w-5 flex-shrink-0" />,
    },
  ];

  const words = ["Innovative", "Creative", "Passionate", "Dedicated"];

  const skills = [
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "Next.js", level: "80%" },
    { name: "Tailwind, Bootstrap", level: "80%" },
    { name: "HTML & CSS", level: "95%" },
    { name: "C#, .Net8", level: "70%" },
    { name: "Java", level: "70%" },
    { name: "SQL", level: "65%" },
  ];

  return (
    <div className="h-screen flex flex-col md:flex-row bg-black overflow-auto">
      <Sidebar className="bg-black">
        <SidebarBody>
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 p-4 bg-black text-white flex flex-col items-center justify-start">
        <div className="mt-8 w-full max-w-4xl pr-4 pl-4">
          <section className="mt-8">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-lg text-gray-300">
              My name is Koray Yilmaz, I am 19 years old, and I live in Waalwijk. I have been programming for nearly two years, with a particular passion for web development. Outside of coding, I focus on staying active and maintaining a healthy lifestyle through sports. In my free time, I enjoy gaming and spending time with friends.
            </p>
          </section>
          <section className="mt-8">
            <h2 className="text-3xl font-bold text-white">Skills</h2>
            <div className="mt-4 space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-white">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-300">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-3xl font-bold text-white">Education</h2>
            <p className="mt-4 text-lg text-gray-300">
              I am a second-year Software Development student at Avans University of Applied Sciences. In my first year, I earned my propedeuse and have achieved all my study credits so far. I thoroughly enjoy the program and am passionate about learning and applying my skills to real-world challenges.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}