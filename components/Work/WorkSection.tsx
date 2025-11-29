"use client";

import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import lapImage from "@/public/work/lap-image.svg";
import mobileImage from "@/public/work/mobile-image.svg";
import { Button } from "../ui/button";
import workBg from "@/public/services/bg.png";

import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <motion.section
      id="work"
      className="py-20 relative"
      initial={{ opacity: 0, y: -50 }}      
      whileInView={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0 h-full w-full -z-10 overflow-hidden">
        <Image
          src={workBg}
          alt="Work Background"
          className="object-cover object-center h-1/2 w-full"
          fill
          priority
        />
      </div>

      <SectionHeader
        label="Our Work"
        title="Real results. Clean execution"
        description="We craft digital products that solve real problems and drive growth. From smart interfaces to powerful platforms — our work speaks for itself."
      />

      <div className="flex justify-center items-center gap-24 py-24 flex-wrap">
        <Image src={lapImage} alt="image" />
        <Image src={mobileImage} alt="image" />
        <Image src={lapImage} alt="image" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button className="flex mx-auto px-9">Let’s Talk</Button>
      </motion.div>
    </motion.section>
  );
}
