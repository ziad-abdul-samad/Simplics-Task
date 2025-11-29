"use client";

import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import footerSBg from "@/public/footer-bg.svg";

export default function Footer() {
  return (
    <footer className="py-16 mt-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 h-full w-full -z-10 overflow-hidden">
        <Image
          src={footerSBg}
          alt="Footer Background"
          className="object-cover object-center h-1/2 w-full -z-10"
          fill
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <Image src="/logo.svg" alt="logo" width={120} height={40} />
          <p className="text-base leading-relaxed">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base font-medium">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">Services</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-medium mb-4">Services</h3>
          <ul className="space-y-2 text-base font-medium">
            <li className="hover:text-primary cursor-pointer">UI/UX Design</li>
            <li className="hover:text-primary cursor-pointer">Branding</li>
            <li className="hover:text-primary cursor-pointer">Illustration</li>
            <li className="hover:text-primary cursor-pointer">
              Design Concept
            </li>
            <li className="hover:text-primary cursor-pointer">App Design</li>
          </ul>
        </div>

        <div>
          <div className="space-y-3">
            {[
              { icon: <Instagram size={18} />, label: "Instagram" },
              { icon: <Facebook size={18} />, label: "Facebook" },
              { icon: <Twitter size={18} />, label: "Twitter" },
              {
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
                bg: "#0E76A8",
              },
              { icon: <Youtube size={18} />, label: "YouTube" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer w-fit  ${
                  item.bg ? "" : "bg-[#FFFFFF14] hover:bg-[#ffffff22]"
                }`}
                style={item.bg ? { backgroundColor: item.bg } : {}}
              >
                {item.icon} | <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-12 border-t border-[#243752] pt-6">
        © {new Date().getFullYear()} - Simplics.
      </p>
    </footer>
  );
}
