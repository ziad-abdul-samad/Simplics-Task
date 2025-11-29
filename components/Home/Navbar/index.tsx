"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 80) {
            currentSection = link.href;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Image src={Logo} alt="logo" />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative px-1 py-1 text-sm font-medium cursor-pointer"
              >
                <span className="relative">
                  {link.name}
                  {isActive && (
                    <span className="absolute ritgh-1/2 translate-x-1/2 -bottom-1 h-[2px] w-[50%] bg-primary block" />
                  )}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button className="font-semibold text-sm">Get in touch</Button>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
