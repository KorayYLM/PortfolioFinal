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
      href: "/",
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
      href: "/services",
      icon: <IconAnalyze className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <IconMail className="text-white h-5 w-5 flex-shrink-0" />,
    },
  ];

  const products = [
    {
      title: "AI",
      link: "#p1",
      thumbnail: "/images/ai.png", 
    },
    {
      title: "Web Dev",
      link: "#p2",
      thumbnail: "/images/webdev.jpg",
    },
    {
      title: "Coding",
      link: "#p3",
      thumbnail: "/images/coding.jpg",
    },
  ];

  const words = ["Innovative", "Creative", "Passionate", "Dedicated"];

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
      <div className="flex-1 p-4 bg-black text-white flex flex-col items-center justify-center overflow-auto">
        <HeroParallax products={products} />
        <div className="mt-8 md:mt-16">
          <FlipWords words={words} duration={3000} className="text-2xl md:text-4xl font-bold text-center" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:mt-32">
        </div>
      </div>
    </div>
  );
}