"use client";

interface HeroSubtitleProps {
  text: string;
}

export default function HeroSubtitle({ text }: HeroSubtitleProps) {
  return <p className="text-lg text-yellow-400 mb-2">{text}</p>;
}
