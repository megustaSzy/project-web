"use client";

interface HeroButtonsProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function HeroButtons({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroButtonsProps) {
  return (
    <div className="flex gap-4 justify-start">
      <button
        onClick={onPrimaryClick}
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
      >
        {primaryText}
      </button>
      <button
        onClick={onSecondaryClick}
        className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors duration-200"
      >
        {secondaryText}
      </button>
    </div>
  );
}
