"use client";

interface HeroTitleProps {
  title: string;
}

export default function HeroTitle({ title }: HeroTitleProps) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      {title}
    </h1>
  );
}
