import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';
import { describe } from 'node:test';

const experience = [
  {
    title: 'Corvid Systems | Software Engineer.',
    date: 'Oct 2023 - Present',
    description: [
      'Currently working on the development of a Mobile Application (PWA) which is currently in use by Industries for their internal processes.',
      'Developed a robust SaaS platform for industrial use in collaboration with a team of 2, utilizing React and TypeScript as the core technologies.',
      'Collaborated closely with industrial domain experts to gather requirements, prioritize features, and ensure the platform'+ "'" +'s alignment with industry standards and best practices.',
      'Actively participated in code reviews, providing constructive feedback to enhance code quality and promote adherence to coding standards.',
    ],
    image: { url: '/work/corvid_systems_logo.png', height: 96, width: 96, className: 'rounded-none' },
    internship: {
      date: "Oct 2022 - Nov 2022",
      description: "In this internship learned new techs i.e. TypeScript, Figma, NestJS, Redux, etc, and also honed my existing skills."
    }
  },
  {
    title: 'Jivaso Technologies | Full Stack Developer.',
    date: 'Oct 2022 - Dic 2023',
    description: [
      'Built an e-commerce site to sell courses online, by using React, Firebase Sass, Bootstrap, and Hotmart.',
      'Developed swift IOS app from scratch and modified existing ones, by adding new screens, transitions and styling.',
      'Developed software by following the Agile Methodology.',
    ],
    image: { url: '/work/jivaso-technologies-logo.png', height: 120, width: 120, className: '' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
