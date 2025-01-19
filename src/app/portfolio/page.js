"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconHome, IconInfoCircle, IconMail, IconUser, IconAnalyze } from "@tabler/icons-react";
import Image from "next/image"; // Zorg ervoor dat de import correct is
import { Timeline } from "@/components/ui/timeline"; // Zorg ervoor dat de import correct is

export default function Page() {
  const links = [
    {
      label: "Home",
      href: "/home",
      icon: <IconHome className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "About Me",
      href: "/about",
      icon: <IconUser className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Portfolio",
      href: "/",
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

  const timelineData = [
    {
      title: "Sagrada",
      content: (
        <div className="border border-white p-6 rounded-3xl shadow-lg bg-gradient-to-r from-green-500 to-teal-600">
          <div className="text-white text-3xl font-bold mb-4">Sagrada</div>
          <Image
            src="/images/sagrada.png"
            alt="First school project: Sagrada"
            width={600}
            height={400}
            className="mb-4 rounded-3xl"
          />
          <p className="text-white text-lg">
            This was my first school project where I learned the basics of programming and teamwork.
          </p>
        </div>
      ),
    },
    {
      title: "Website Leerjuist",
      content: (
        <div className="border border-white p-6 rounded-3xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="text-white text-3xl font-bold mb-4">Website Leerjuist</div>
          <Image
            src="/images/ANITAWORK.png"
            alt="My first HTML,CSS only website"
            width={600}
            height={400}
            className="mb-4 rounded-3xl"
          />
          <p className="text-white text-lg">
            My first HTML and CSS only website, where I learned the fundamentals of web design.
          </p>
        </div>
      ),
    },
    {
      title: "Bumbo",
      content: (
        <div className="border border-white p-6 rounded-3xl shadow-lg bg-gradient-to-r from-red-500 to-pink-600">
          <div className="text-white text-3xl font-bold mb-4">Bumbo</div>
          <Image
            src="/images/Bumbo.png"
            alt="Bumbo project"
            width={600}
            height={400}
            className="mb-4 rounded-3xl"
          />
          <p className="text-white text-lg">
            A project where I developed a complex application, enhancing my skills in problem-solving and coding. This was a schedule program for a supermarket, used by both the manager and employees.
          </p>
        </div>
      ),
    },
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
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  );
}