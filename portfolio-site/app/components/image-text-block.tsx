import Image from 'next/image';
import React from 'react';

interface ImageTextBlockProps {
  imageSrc: string; // URL of the image
  imageAlt: string; // Alt text for the image
  heading: string; // Text for the heading
  text: React.ReactNode; // Text for the description
  reverse?: boolean; // Whether to reverse the layout
  accentText?: boolean; // Whether to apply accent font to the text
}

export default function ImageTextBlock({
  imageSrc,
  imageAlt,
  heading,
  text,
  reverse = false,
  accentText = false,
}: ImageTextBlockProps): JSX.Element {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center my-10 gap-8 px-[177px] py-[33px]`}
    >
      {/* Image Block */}
      <div className="w-full md:w-1/2 relative h-64">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Block */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-accent-gold">{heading}</h2>
        <div
          className={`mt-4 space-y-4 text-gray-600 ${
            accentText ? 'font-accent' : ''
          }`}
          style={{ textIndent: '2rem' }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
