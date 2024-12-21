import ImageTextBlock from '../components/image-text-block';
import IconBulletList from '../components/icon-bullet-list';
import BackgroundImageText from '../components/background-image-text';
import StyledTextBlock from '../components/styled-text-block';

export default function About() {
  const bulletItems = [
    {
      icon: '/images/icons/graph-up-green.png',
      alt: 'Graph Icon',
      text: 'Growth-centered automation.',
    },
    {
      icon: '/images/icons/blue-strategy@4x.png',
      alt: 'Strategy Icon',
      text: 'Effective strategies to increase productivity.',
    },
    {
      icon: '/images/icons/gold-project@4x.png',
      alt: 'Project Icon',
      text: 'Project management.',
    },
    {
      icon: '/images/icons/graph-up-green.png',
      alt: 'Graph Icon',
      text: 'Growth-centered automation.',
    },
    {
      icon: '/images/icons/blue-strategy@4x.png',
      alt: 'Strategy Icon',
      text: 'Effective strategies to increase productivity.',
    },
    {
      icon: '/images/icons/gold-project@4x.png',
      alt: 'Project Icon',
      text: 'Project management.',
    },
  ];

  return (
    <div className="max-w-screen mx-auto p-0">
      {/* Section 1: Alternating Image-Text Blocks */}
      <ImageTextBlock
        imageSrc="/images/graphics/Magnyfying-Person.jpeg"
        imageAlt="Blue arrows pointing up"
        heading="Who Am I?"
        text={<>
          <p>
            I started working with websites with HTML clear back in 2002 when it was revised and republished. 
            I have done everything from coding to graphic design to website SEO over the years. 
            But I have always had a passion for creating things that help others. Now I am here to offer my skills to help your business succeed. 
            One of my main components is a love for research. I really enjoy seeking out and learning information. 
            Between my own work and my University work I have thousands of hours of research time.
          </p>
        </>}
        reverse={false}
      />
      <BackgroundImageText
        imageSrc="/images/graphics/blue-arrows-up-v1.jpeg"
        imageAlt="Sample background"
      >
        <StyledTextBlock accent={true}>
          Growth and scaling rely on gathering usable data and presenting it to answer business questions.
        </StyledTextBlock>
      </BackgroundImageText>
      <ImageTextBlock
        imageSrc="/images/graphics/lightbulb-laptop.jpeg"
        imageAlt="Lightbulb and laptop"
        heading="What I Do?"
        text={<>
          <p>
            I specialize in leveraging technology to solve complex problems and created automated solutions. 
            I’ve tackled challenges from advanced data integration, to comprehensive analytics, to web design and development, 
            and to process optimization. I excel at communicating with stakeholders and asking the right questions to form concise and meaningful business requirements. 
            I am highly capable of using those requirements to form a project scope and plan, and then execute that project. 
            Finally delivering a solution that meets the business needs and efficiently yet beautifully displays the needed information to the stakeholder or user.
          </p>
        </>}
        reverse={true}
      />

      {/* Section 2: Bulleted List with Icons */}
      <IconBulletList heading="Skills and Expertise" items={bulletItems} />
    </div>
  );
}
