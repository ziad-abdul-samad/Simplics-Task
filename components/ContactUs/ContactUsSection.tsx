"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
export default function ContactUsSection() {
  return (
    <>
      <SectionHeader title="Contact us" />
      <section id="contact" className="py-20 px-10">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div
            className="col-span-1  p-6 flex flex-col justify-between bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url('/contact/contact-bg.png')" }}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <Image
                  src="/contact/location-icon.svg"
                  width={24}
                  height={24}
                  alt="location"
                />
                <p className="text-base leading-tight">Location</p>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/contact/phone-icon.svg"
                  width={24}
                  height={24}
                  alt="phone"
                />
                <p className="text-base leading-tight">123 456 789</p>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/contact/email-icon.svg"
                  width={24}
                  height={24}
                  alt="mail"
                />
                <p className="text-base leading-tight">Email</p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <Facebook size={22} />
                <Instagram size={22} />
                <Twitter size={22} />
                <Linkedin size={22} />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className={cn(
                    "p-3 rounded-xl border border-card-border dark:bg-card-gradient w-full"
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "p-3 rounded-xl border border-card-border dark:bg-card-gradient w-full"
                  )}
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="meeting" className="font-medium">
                  Preferred Meeting Time
                </label>
                <select
                  id="meeting"
                  className={cn(
                    "p-3 rounded-xl border border-card-border dark:bg-card-gradient w-full"
                  )}
                >
                  <option>Select Preferred Meeting Time</option>
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 8 PM)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className={cn(
                    "p-3 rounded-xl border border-card-border dark:bg-card-gradient w-full"
                  )}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  className="
                    relative inline-block rounded-lg p-[2px] w-full
                    bg-gradient-to-r from-[#EE7639] via-[#FFFFFF33] to-[#222222]
                  "
                >
                  <Image
                    src="/contact/contact-btn-image.svg"
                    alt="decor"
                    width={40}
                    height={40}
                    className="absolute left-[-15px] top-[-15px] z-200 pointer-events-none"
                  />

                  <span
                    className="
                      block rounded-lg bg-black text-white 
                      px-6 py-3 font-semibold w-full text-center
                    "
                  >
                    Get in Touch
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
