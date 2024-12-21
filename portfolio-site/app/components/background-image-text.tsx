"use client";

import Image from "next/image";
//import React, { useState, useEffect } from "react";

interface BackgroundImageTextProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode; // Accept custom children components
}

export default function BackgroundImageText({
  imageSrc,
  imageAlt,
  children,
}: BackgroundImageTextProps): JSX.Element {
  return (
    <div className="relative h-96 w-screen">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Custom Child Content */}
      {children}
    </div>
  );
}
