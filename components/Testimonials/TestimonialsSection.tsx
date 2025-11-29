"use client";

import { useState } from "react";
import Image from "next/image";
import leftTop from "@/public/testimonials/left-top.svg";
import rightBottom from "@/public/testimonials/right-bottom.svg";
import prevIcon from "@/public/testimonials/prev.svg";
import nextIcon from "@/public/testimonials/next.svg";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const testimonials = [
  {
    text: `Without any doubt I recommend Simplics as one of the best web design
          and digital marketing agencies. One of the best agencies I’ve came
          across so far. Wouldn’t be hesitated to introduce their work to
          someone else.`,
  },
  {
    text: `Simplics helped our business grow online, their team is professional
          and creative. Highly recommended for anyone looking for web solutions.`,
  },
  {
    text: `Working with Simplics was seamless, they delivered everything on time
          with outstanding quality. Truly a top-notch agency.`,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) prevSlide();
    else if (info.offset.x < -50) nextSlide();
  };

  return (
    <motion.section
      className="py-20 relative"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center items-center flex-col gap-2 mx-auto mb-12">
        <h1 className="text-4xl font-bold">Why customers love</h1>
        <h2 className="text-4xl text-primary font-bold">working with us</h2>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="relative max-w-[790px] w-full flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 hidden md:block"
          >
            <Image src={prevIcon} alt="Previous" width={40} height={40} />
          </button>

          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="relative dark:bg-card-gradient flex items-center justify-center p-20 text-center border-card-border border rounded-xl mx-auto cursor-grab"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              >
                <Image src={leftTop} alt="icon" className="absolute left-6 top-12" />
                <p className="text-lg font-semibold">{testimonials[current].text}</p>
                <Image src={rightBottom} alt="icon" className="absolute right-6 bottom-12" />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 hidden md:block"
          >
            <Image src={nextIcon} alt="Next" width={40} height={40} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
