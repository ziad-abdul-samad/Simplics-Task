"use client";

import { aboutFeatures } from "@/app/data/about";
import SectionHeader from "@/components/shared/SectionHeader";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";

export default function AboutUs() {
  const description = `
At Smplics, we turn complex digital challenges into elegant, powerful solutions.
We’re not just a team of designers and developers — we’re strategic thinkers, builders, and creators who believe that great work starts with clarity and ends with measurable impact.

From startups to enterprises, we partner with brands that want more than just a “pretty” product. We design digital experiences that look sharp, run fast, and deliver results.

We don’t overcomplicate.
We don’t overpromise.
We just make it work — beautifully.
  `;

  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} 
    >
      <div className="container max-w-5xl mx-auto">
        <SectionHeader
          label="About us"
          title="Simple. Smart. Impactful"
          description={description}
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center px-20">
        {aboutFeatures.map((item, index) => (
          <AboutCard key={index} label={item.label} text={item.text} />
        ))}
      </div>
    </motion.section>
  );
}
