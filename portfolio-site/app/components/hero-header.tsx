import React from "react";

interface HeroHeaderProps {
  title: string; // Main title text
  subtitle?: string; // Optional subtitle
  center?: boolean; // Whether to center the text
  accent?: boolean; // Whether to use accent font for the title
}

export default function HeroHeader({
  title,
  subtitle,
  center = true,
  accent = false,
}: HeroHeaderProps): JSX.Element {
  return (
    <div
      className={`text-white ${
        center ? "text-center" : "text-left"
      } space-y-4`}
    >
      <h1
        className={`${
          accent ? "font-accent" : "font-bold"
        } text-4xl sm:text-5xl md:text-6xl shadow-lg`}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 shadow">
          {subtitle}
        </p>
      )}
    </div>
  );
}
