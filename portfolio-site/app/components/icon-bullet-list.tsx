import Image from 'next/image';

interface IconBulletListProps {
  heading: string; // The heading for the list
  items: {
    icon: string; // URL of the icon
    alt: string; // Alt text for the image
    text: string; // Text description for the item
  }[];
}

export default function IconBulletList({ heading, items }: IconBulletListProps): JSX.Element {
  return (
    <div className="my-10 px-[177px] py-[33px]">
      <h2 className="text-2xl font-bold text-accent-gold">{heading}</h2>
      <ul className="grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <Image
              src={item.icon}
              alt={item.alt}
              width={100}
              height={100}
              className="full"
            />
            <p className="text-gray-600">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
