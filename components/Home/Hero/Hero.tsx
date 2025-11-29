"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/public/hero-main.svg";
import sparkIcon from "@/public/spark.svg";
import heroBg from "@/public/hero/hero-bg.svg";

export default function Hero() {
  return (
    <section id="home" className="w-full relative pt-48 pb-20 overflow-hidden h-screen">
      <div className="absolute top-0 right-0 h-full w-full -z-10">
        <Image
          src={heroBg}
          alt="Hero Background"
          className="object-cover object-right h-full w-full"
          fill
          priority
        />
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="flex justify-center items-center gap-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build the Future. Digitally
            </h1>
            <Image src={sparkIcon} alt="spark" />
          </div>

          <p className="mt-4 text-base max-w-lg">
            We craft powerful digital experiences that turn ambitious ideas into
            real growth. Let’s design, develop, and scale your digital
            success—together.
          </p>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <Button className="py-6">Explore Our Services</Button>

            <Button className="py-6 px-8" variant={"ghost"}>
              Let’s Talk
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src={heroImage}
            alt="Simplics Hero"
            width={350}
            height={550}
            className="object-contain drop-shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
