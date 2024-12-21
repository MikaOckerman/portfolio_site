import React from 'react';

interface StyledTextBlockProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function StyledTextBlock({ children, accent = false }: StyledTextBlockProps): JSX.Element {
  return (
    <div
      className={`absolute left-0 top-0 h-full w-1/2 flex items-center justify-center px-8 ${
        accent ? 'font-accent' : ''
      }`}
    >
      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold shadow-lg">
        {children}
      </p>
    </div>
  );
}
