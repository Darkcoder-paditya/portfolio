export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },{
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },{
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },{
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'ResuMate: AI-Powered Resume Analyzer',
    desc: 'An AI-powered Resume Analyzer built with React, React Router, and Puter.js. It features seamless authentication, resume uploading and storage, and AI-driven job matching with ATS scoring and custom feedback.',
    subdesc:
      'This application leverages a modern tech stack including React, Puter.js for serverless auth and storage, Tailwind CSS for a sleek UI, and Zustand for state management, all bundled with Vite for a fast development experience.',
    href: '#https://prashant-aditya.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-ai-resumate.svg', 
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    github: 'https://github.com/Darkcoder-paditya/ResuMate.git',
    spotlight: '/assets/spotlight1.png', 
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Puter.js',
        path: '/assets/puter.svg', 
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Zustand',
        path: '/assets/zustand.svg', 
      },
      
    ],
  },{
    title: 'ArenaCC: Hydrogen C++ Compiler',
    desc: 'A custom C++ compiler for the Hydrogen programming language that performs lexical analysis, syntax parsing, and code generation to produce native Linux executables.',
    subdesc: 'Built with modern C++, featuring an efficient arena allocator for AST nodes, x86-64 assembly generation, and integration with NASM assembler and LD linker.',
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/cpp-logo.svg',
    logoStyle: {
      backgroundColor: '#1B4B91',
      border: '0.2px solid #2B5CA1',
      boxShadow: '0px 0px 60px 0px #1B4B914D'
    },
    github: 'https://github.com/Darkcoder-paditya/ArenaCC.git',
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/cpp.svg'
      },
      {
        id: 2,
        name: 'CMake',
        path: '/assets/cmake.svg'
      },
      {
        id: 3,
        name: 'NASM',
        path: '/assets/nasm.svg'
      },
      {
        id: 4,
        name: 'x86 Assembly',
        path: '/assets/assembly.svg'
      }
    ]
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'GSPANN',
    pos: 'Software Engineer',
    duration: 'June2024 - Present',
    title: "I am involved in a team to maintain and update features of ContentHubHPT developed by GSPANN.",
    icon: '/assets/GSPANN.svg',
    animation: 'victory',
  }
];
