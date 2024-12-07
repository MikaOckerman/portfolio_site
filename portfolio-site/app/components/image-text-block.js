import Image from 'next/image';

export default function ImageTextBlock({ imageSrc, imageAlt, heading, text, reverse }) {
  return (
    <div
      className={`flex flex-col md:${reverse ? 'flex-row-reverse' : 'flex-row'} items-center my-10 gap-8`}
    >
      <div className="w-full md:w-1/2 relative h-64">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
        <p className="text-gray-600 mt-4">{text}</p>
      </div>
    </div>
  );
}
