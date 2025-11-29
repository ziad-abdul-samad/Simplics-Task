"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { servicesFilters, servicesList } from "@/app/data/services";
import Image from "next/image";
import { Button } from "../ui/button";
import servicesBg from "@/public/services/bg.png";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("All Services");

  const filteredServices =
    activeFilter === "All Services"
      ? servicesList
      : servicesList.filter((s) => s.category === activeFilter);

  return (
    <motion.section
      id="services"
      className="relative py-20 overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute top-0 left-0 h-full w-full -z-10 overflow-hidden">
        <Image
          src={servicesBg}
          alt="Services Background"
          className="object-cover object-center h-full w-full"
          fill
          priority
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeader
          label="Our Services"
          title="Digital solutions that move your business forward"
          description="We provide end-to-end digital services that help businesses thrive in an ever-evolving digital world. Our solutions combine design, development, and strategy to deliver results that matter."
        />

        <div className="flex gap-4 mt-8 mx-auto justify-center flex-wrap">
          {servicesFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-10 py-3 rounded-full filter-bg transition",
                activeFilter === filter ? "text-primary font-semibold" : ""
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={cn(
                "rounded-xl p-20 text-center flex flex-col items-center gap-6",
                service.featured ? "featured-bg" : "bg-transparent"
              )}
            >
              <Image
                src={service.image}
                alt={service.title}
                className="w-20 h-20 mb-4"
                width={1000}
                height={1000}
              />
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="text-muted-foreground text-[10px] mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <Button className="flex mx-auto px-9">Let’s Talk</Button>
      </div>
    </motion.section>
  );
}
