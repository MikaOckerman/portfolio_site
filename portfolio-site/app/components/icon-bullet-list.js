import Image from 'next/image';


export default function IconBulletList({ heading, items }) {
    return (
      <div className="my-10">
        <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
        <ul className="mt-6 space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <Image
                src={item.icon}
                alt={item.alt}
                width={50}
                height={50}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-gray-600">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  