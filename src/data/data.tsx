// Keep all imports the same
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';

import LinkedInIcon from '../components/Icon/LinkedInIcon';

import heroImage from '../images/header-background.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/** Metadata */
export const homePageMeta: HomepageMeta = {
  title: 'Anushka Shanker | Software Engineer',
  description: 'Portfolio of Anushka Shanker, an engineering student passionate about full-stack and mobile app development.',
};

/** Section ID constants */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/** Hero Section */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Anushka Shanker.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an ECE (AI) undergrad at <strong className="text-stone-100">IGDTUW</strong>, passionate about creating impactful, data-driven tech solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I enjoy working across the full stack, especially with <strong className="text-stone-100">React.js</strong> and <strong className="text-stone-100">Node.js</strong>, and love applying my skills to real-world problems.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1XNsJibBOOe3vKgp_RfR2ATWDPgvEV0mg/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/** About Section */
export const aboutData: About = {
  profileImageSrc: '',
  description: `Software Engineering enthusiast dedicated to building impactful, data-driven solutions and accelerating user-focused innovation.`,
  aboutItems: [
    {label: 'Location', text: 'Delhi, India', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Hackathons, DevTools, AI Products', Icon: SparklesIcon},
    {label: 'Study', text: 'IGDTUW – B.Tech ECE (AI)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Available for Internships', Icon: BuildingOffice2Icon},
  ],
};

/** Skills Section */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'JavaScript', level: 8},
      {name: 'Python', level: 7},
      {name: 'C++', level: 7},
      {name: 'Java', level: 6},
    ],
  },
  {
    name: 'Full Stack Development',
    skills: [
      {name: 'React.js', level: 9},
      {name: 'Node.js', level: 8},
      {name: 'MongoDB', level: 8},
      {name: 'Express.js', level: 8},
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      {name: 'Git & GitHub', level: 9},
      {name: 'Postman', level: 8},
      {name: 'VS Code', level: 9},
      {name: 'Render', level: 7},
    ],
  },
];

/** Portfolio Section */
export const portfolioItems: PortfolioItem[] = []; // Removed all items to hide "Check out my work"

/** Resume Section */
export const education: TimelineItem[] = [
  {
    date: '2023 – Present',
    location: 'IGDTUW, Delhi',
    title: 'B.Tech, ECE (AI)',
    content: <p>CGPA: 8.71 | Focus on AI, Web Development, and System Design.</p>,
  },
  {
    date: '2021 – 2022',
    location: 'GN National Public School',
    title: 'Class XII – CBSE',
    content: <p>Scored 93.2% with PCM background.</p>,
  },
  {
    date: '2019 – 2020',
    location: 'Little Flower School',
    title: 'Class X – ICSE',
    content: <p>Secured 96.6% with distinction in Mathematics and Science.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June – July 2025',
    location: 'Indian Railways, NER HQ',
    title: 'Railway Data Network Intern',
    content: <p>Analyzed FOIS and PRS systems; optimized protocols, improving system uptime by 15%.</p>,
  },
  {
    date: 'May – July 2024',
    location: 'AI & DS Dept., IGDTUW',
    title: 'Mobile App Development Intern',
    content: <p>Built modular Flutter UIs and improved user onboarding by 20% for MVP launch.</p>,
  },
  {
    date: 'May 2025',
    location: 'Deloitte Australia (Forage)',
    title: 'Platform Engineering Simulation',
    content: <p>Created Python pipeline with 100% data validation accuracy; coordinated across teams.</p>,
  },
];

/** Contact Section */
export const contact: ContactSection = {
  headerText: 'Let’s connect!',
  description: 'Feel free to reach out to collaborate or chat about opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'anushkashanker424@gmail.com',
      href: 'mailto:anushkashanker424@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Delhi, India',
      href: 'https://www.google.com/maps/place/Delhi,+India',
    },
    {
      type: ContactType.LinkedIn,
      text: 'anushka-shanker-061b6a218',
      href: 'https://linkedin.com/in/anushka-shanker-061b6a218/',
    },
    {
      type: ContactType.Github,
      text: 'shananu',
      href: 'https://github.com/shananu',
    },
  ],
};

/** Social Section */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/shananu'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/anushka-shanker-061b6a218/'}
];
