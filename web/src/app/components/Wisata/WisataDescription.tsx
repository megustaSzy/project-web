"use client";

interface HeroDescriptionProps {
  text: string;
}

export default function HeroDescription({ text }: HeroDescriptionProps) {
  return <p className="text-gray-200 mb-6">{text}</p>;
}
