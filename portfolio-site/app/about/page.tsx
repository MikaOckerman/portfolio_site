import ImageTextBlock from '../components/image-text-block';
import IconBulletList from '../components/icon-bullet-list';

export default function About() {
  const bulletItems = [
    {
      icon: '/images/icons/graph-icon@4x.png',
      alt: 'Python Icon',
      text: 'Experienced in building Python-based applications and scripts.',
    },
    {
      icon: '/images/icons/graph-icon@4x.png',
      alt: 'JavaScript Icon',
      text: 'Proficient in modern JavaScript frameworks like React and Next.js.',
    },
    {
      icon: '/images/icons/graph-icon@4x.png',
      alt: 'Database Icon',
      text: 'Skilled in database management with PostgreSQL and MySQL.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section 1: Alternating Image-Text Blocks */}
      <ImageTextBlock
        imageSrc="/images/graphics/blue-arrows-up-v1.jpeg"
        imageAlt="Blue arrows pointing up"
        heading="Who Am I?"
        text="I started working with websites with HTML clear back in 2002 when it was revised and republished. 
        I have done everything from coding to graphic design to website SEO over the years. 
        But I have always had a passion for creating things that help others. Now I am here to offer my skills to help your business succeed. 
        One of my main components is a love for research. I really enjoy seeking out and learning information. 
        Between my own work and my University work I have thousands of hours of research time. "
        reverse={false}
      />

      <ImageTextBlock
        imageSrc="/images/graphics/lightbulb-laptop.jpeg"
        imageAlt="Lightbulb and laptop"
        heading="What I Do?"
        text="I specialize in developing full-stack web applications, integrating advanced databases, and creating clean, maintainable code."
        reverse
      />

      {/* Section 2: Bulleted List with Icons */}
      <IconBulletList heading="Skills and Expertise" items={bulletItems} />
    </div>
  );
}
