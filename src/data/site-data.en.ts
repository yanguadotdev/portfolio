import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiAstro,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiVite,
  SiCss3,
  SiReactrouter,
} from '@/components/Icons'

export const heroCopy = {
  details: [
    {
      label: 'Experience',
      value: '+01',
    },
    {
      label: 'Specialty',
      value: 'Front-End',
    },
    {
      label: 'Current Age',
      value: '22',
    },
    {
      label: 'Country',
      value: 'Peru',
    },
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yanguadotdev/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/yanguadotdev',
    },
  ],
}

export const projectsList = [
  {
    id: 'css-clamp-visualizer',
    cover: '/projects/project_01.jpg',
    category: 'tool',
    description: 'An interactive visualizer for the CSS clamp() property.',
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'CSS Clamp Visualizer',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/css-clamp-visualizer',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://css-clamp-visualizer.netlify.app/',
      },
    ],
    stack: [SiJavascript, SiHtml5, SiCss3],
  },
  {
    id: 'transform-origin-visualizer',
    cover: '/projects/project_02.jpg',
    category: 'tool',
    description: 'An interactive visualizer for the CSS transform-origin property.',
    stack: [SiJavascript, SiHtml5, SiCss3],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Origin Visualizer',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/transform-origin-visualizer',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://transform-origin-visualizer.netlify.app/',
      },
    ],
  },
  {
    id: 'world-pets',
    cover: '/projects/project_03.jpg',
    category: 'webApp',
    description: 'Used theDOGapi to display images of pets.',
    stack: [SiJavascript, SiHtml5, SiCss3],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'World Pets',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/worldpets',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://worldpets.netlify.app/',
      },
    ],
  },
  {
    id: 'spotify-clone',
    cover: '/projects/project_04.jpg',
    category: 'clone',
    description: 'Spotify music app clone built with React and Tailwind CSS.',
    stack: [SiReact, SiVite, SiTailwindcss],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Spotify Clone',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/spotify-clone',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://spotify-clone-pi-pink.vercel.app/',
      },
    ],
  },
  {
    id: 'brainwave',
    cover: '/projects/project_05.jpg',
    category: 'landing',
    description: 'Landing page for an AI-powered chat.',
    stack: [SiAstro, SiTailwindcss, SiTypescript],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Brainwave',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/brainwave',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://brainwave-beryl-ten.vercel.app/',
      },
    ],
  },
  {
    id: 'tic-tac-toe',
    cover: '/projects/project_06.jpg',
    category: 'webApp',
    description: 'Tic-Tac-Toe game built with React and Tailwind CSS.',
    stack: [SiReact, SiVite, SiTailwindcss],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Tic-Tac-Toe',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/tic-tac-toe-react',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://tic-tac-toe-full-react.netlify.app/',
      },
    ],
  },
  {
    id: 'questions-answers',
    cover: '/projects/project_15.jpg',
    category: 'landing',
    description: 'Landing page that shows questions about the "this" keyword in JavaScript.',
    stack: [SiJavascript, SiHtml5, SiCss3],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'JavaScript Questions',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/javascript-this-exercises',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://yanguadotdev.github.io/javascript-this-exercises/',
      },
    ],
  },
  {
    id: 'pulse',
    cover: '/projects/project_08.jpg',
    category: 'landing',
    description: 'Landing page for a motivational sports brand.',
    stack: [SiJavascript, SiHtml5, SiCss3],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Pulse',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/pulse',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://pulse-brand.netlify.app/',
      },
    ],
  },
  {
    id: 'layers',
    cover: '/projects/project_09.jpg',
    category: 'landing',
    description: 'Landing page for a Software as a Service (SaaS) product.',
    stack: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Layers',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/saas-landing-page',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://saas-landing-page-ten-nu.vercel.app/',
      },
    ],
  },
  {
    id: 'ecoscrap',
    cover: '/projects/project_10.jpg',
    category: 'landing',
    description: 'Landing page for a recycling company.',
    stack: [SiAstro, SiTypescript, SiTailwindcss],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Ecoscrap',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/eco-scrap',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://eco-scrap-umber.vercel.app/',
      },
    ],
  },
  {
    id: 'halloween-hackaton',
    cover: '/projects/project_11.jpg',
    category: 'landing',
    description: 'Landing page to promote a specific event.',
    stack: [SiJavascript, SiHtml5, SiCss3],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Cloudinary Hackathon',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/landing-cloudinary-hackathon',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://spooke-ia-cloudinary.netlify.app/',
      },
    ],
  },
  {
    id: 'movies-app',
    cover: '/projects/project_12.jpg',
    category: 'webApp',
    description: 'Web app to search for movies and series across different categories.',
    stack: [SiReact, SiReactrouter, SiVite, SiCss3],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Movies DB',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/movies-app',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://movies-app-eight-pearl-90.vercel.app/',
      },
    ],
  },
  {
    id: 'hirace',
    cover: '/projects/project_13.jpg',
    category: 'landing',
    description: 'Landing page for companies that connect employers with candidates.',
    stack: [SiAstro, SiTypescript, SiTailwindcss],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Hirace',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/hirace',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://hirace.vercel.app/',
      },
    ],
  },
  {
    id: 'barbersteel',
    cover: '/projects/project_14.jpg',
    category: 'landing',
    description: 'Landing page for a modern-style barbershop.',
    stack: [SiAstro, SiTypescript, SiTailwindcss],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'BarberSteel',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/barbersteel',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://barbersteel.vercel.app/',
      },
    ],
  },
  {
    id: 'fit-life',
    cover: '/projects/project_07.jpg',
    category: 'landing',
    description: 'Landing page for a gym with an attractive design.',
    stack: [SiAstro, SiTypescript, SiTailwindcss],
    details: [
      {
        type: 'text',
        label: 'Name',
        value: 'Fit and Life',
      },
      {
        type: 'link',
        label: 'Repository',
        value: 'https://github.com/yanguadotdev/fitandlife',
      },
      {
        type: 'link',
        label: 'Preview',
        value: 'https://fitandlife.vercel.app/',
      },
    ],
  },
]
