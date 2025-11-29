"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import sparkIcon from "@/public/spark.svg";
interface SectionHeaderProps {
  label?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-12", className)}>
      <p className=" capitalize  text-primary font-bold text-base mb-2">
        {label}
      </p>

      <div className="flex items-center justify-center gap-2 mb-3">
        <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
        <Image
          src={sparkIcon}
          alt="spark"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      <p className=" text-base ">{description}</p>
    </div>
  );
}
