"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconHome, IconAnalyze, IconInfoCircle, IconMail, IconUser } from "@tabler/icons-react";
import Image from "next/image"; // Zorg ervoor dat de import correct is
import { TypewriterEffect } from "@/components/ui/typewriter-effect"; // Zorg ervoor dat de import correct is
import { HoverEffect, Card, CardTitle, CardDescription } from "@/components/ui/card-hover-effect"; // Zorg ervoor dat de import correct is

export default function Page() {
  const [activeItem, setActiveItem] = useState("tab1");

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
      href: "/portfolio",
      icon: <IconInfoCircle className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Services",
      href: "/",
      icon: <IconAnalyze className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <IconMail className="text-white h-5 w-5 flex-shrink-0" />,
    },
  ];

  const words = [
    { text: "Services", className: "text-4xl font-bold text-white" },
  ];

  const items = [
    {
      title: "Web Design",
      description: "I design a website that suits your needs and is user-friendly.",    
      link: "#sv1",
    },
    {
      title: "UI/UX Design",
      description: "I design a user-friendly interface that is easy to use and looks good.",    
      link: "#sv2",
    },
    {
      title: "Web Development", 
      description: "I develop a website that is fast, secure and easy to use.", 
      link: "#sv3",
    },
    {
      title: "App Design",
      description: "I design an app that is user-friendly and easy to use.",    
      link: "#sv4",
    },
    {
      title: "Graphic Design",  
      description: "I design a logo that suits your needs and looks good.", 
      link: "#sv5",
    },
    {
      title: "Website Deployment",  
      description: "I deploy a website that is fast, secure and easy to use.",  
      link: "#sv6",
    },
  ];

  return (
    <div className="h-screen flex flex-col md:flex-row bg-black overflow-auto">
      <Sidebar className="bg-gray-900 md:bg-gray-900">
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
          <TypewriterEffect words={words} />
          <HoverEffect items={items} className="mt-8" />
        </div>
      </div>
    </div>
  );
}