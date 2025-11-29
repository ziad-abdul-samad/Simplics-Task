"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqData } from "@/app/data/FAQ";
import { motion } from "framer-motion";

const filters = Object.keys(faqData) as (keyof typeof faqData)[];

export default function FAQSection() {
  const [activeFilter, setActiveFilter] =
    useState<keyof typeof faqData>("General");

  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Frequently Asked <br /> Questions
        </h1>
      </div>

      <div className="flex gap-4 justify-between mb-5 max-w-4xl mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-16 py-2 rounded-lg transition border border-card-border dark:bg-card-gradient shadow-2xl",
              activeFilter === filter
                ? "text-primary font-semibold border-primary border"
                : "text-foreground/70"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl p-8 border border-card-border dark:bg-card-gradient">
        <Accordion type="single" collapsible>
          {faqData[activeFilter].map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-lg font-bold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
