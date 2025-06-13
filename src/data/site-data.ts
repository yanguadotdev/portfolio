import { SiReact, SiTailwindcss, SiNextdotjs, SiGit, SiAstro, SiJavascript, SiFigma, SiTypescript, SiHtml5, SiVite, SiCss3, SiReactrouter } from '@/components/Icons'


export const heroCopy = {
    slogan: 'Diseño que capta la atención. Desarrollo que retiene.',
    name: 'Samir Yangua ',
    description: ' Impulso productos digitales y negocios a destacar con interfaces limpias, modernas y funcionales. ¿Buscas llevar tu presencia digital al siguiente nivel? Trabajemos juntos para hacerlo realidad.',
    details: [
        {
            label: 'Experiencia',
            value: '+01'
        },
        {
            label: 'Especialidad',
            value: 'Front-End'
        },
        {
            label: 'Edad Actual',
            value: '22'
        },
        {
            label: 'País',
            value: 'Perú'
        }
    ],
    socialLinks: [
        {
            label: 'Linkedin',
            url: 'https://www.linkedin.com/in/yanguadotdev/'
        },
        {
            label: 'Github',
            url: 'https://github.com/yanguadotdev'
        }
    ]
}


export const projectsList = [
    {
        id: 'css-clamp-visualizer',
        cover: '/projects/project_01.jpg',
        category: 'tool',
        description: 'Un visualizador interactivo de la propiedad CSS clamp().',
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'CSS Clamp Visualizer',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/css-clamp-visualizer',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://css-clamp-visualizer.netlify.app/',
            }
        ],
        stack: [SiJavascript, SiHtml5, SiCss3]
    },
    {
        id: 'transform-origin-visualizer',
        cover: '/projects/project_02.jpg',
        category: 'tool',
        description: 'Un visualizador interactivo de la propiedad CSS transform-origin.',
        stack: [SiJavascript, SiHtml5, SiCss3],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Origin Visualizer',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/transform-origin-visualizer',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://transform-origin-visualizer.netlify.app/',
            }
        ]
    },
    {
        id: 'world-pets',
        cover: '/projects/project_03.jpg',
        category: 'webApp',
        description: 'Se utilizo la API theDOGapi para mostrar imagenes de mascotas',
        stack: [SiJavascript, SiHtml5, SiCss3],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'World Pets',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/worldpets',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://worldpets.netlify.app/',
            }
        ]
    },
    {
        id: 'spotify-clone',
        cover: '/projects/project_04.jpg',
        category: 'clone',
        description: 'Clone de la app de musica Spotify relaizado con React y Tailwind CSS',
        stack: [SiReact, SiVite, SiTailwindcss],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Spotify Clone',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/spotify-clone',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://spotify-clone-pi-pink.vercel.app/',
            }
        ]
    },
    {
        id: 'brainwave',
        cover: '/projects/project_05.jpg',
        category: 'landing',
        description: 'Landing page para una Chat con Inteligencia Artificial ',
        stack: [SiAstro, SiTailwindcss, SiTypescript],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Brainwave',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/brainwave',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://brainwave-beryl-ten.vercel.app/',
            }
        ]
    },
    {
        id: 'tic-tac-toe',
        cover: '/projects/project_06.jpg',
        category: 'webApp',
        description: 'Juego de Tic-Tac-Toe relaizado con React y Tailwind CSS',
        stack: [SiReact, SiVite, SiTailwindcss],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Tic-Tac-Toe',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/tic-tac-toe-react',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://tic-tac-toe-full-react.netlify.app/',
            }
        ]
    },
    {
        id: 'questions-answers',
        cover: '/projects/project_15.jpg',
        category: 'landing',
        description: 'Landing page que muestra preguntas sobre el objeto this en JavaScript',
        stack: [SiJavascript, SiHtml5, SiCss3],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Preguntas sobre JS',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/javascript-this-exercises',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://yanguadotdev.github.io/javascript-this-exercises/',
            }
        ]
    },
    {
        id: 'pulse',
        cover: '/projects/project_08.jpg',
        category: 'landing',
        description: 'Landing page para una marca deportiva motivacional',
        stack: [SiJavascript, SiHtml5, SiCss3],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Pulse',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/pulse',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://pulse-brand.netlify.app/',
            }
        ]
    },
    {
        id: 'layers',
        cover: '/projects/project_09.jpg',
        category: 'landing',
        description: 'Landing page para una Software as a Service',
        stack: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Layers',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/saas-landing-page',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://saas-landing-page-ten-nu.vercel.app/',
            }
        ]
    },
    {
        id: 'ecoscrap',
        cover: '/projects/project_10.jpg',
        category: 'landing',
        description: 'Landing page para una empresa de reciclaje',
        stack: [SiAstro, SiTypescript, SiTailwindcss],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Ecoscrap',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/eco-scrap',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://eco-scrap-umber.vercel.app/',
            }
        ]
    },
    {
        id: 'halloween-hackaton',
        cover: '/projects/project_11.jpg',
        category: 'landing',
        description: 'Landing page para un promocionar algun evento en particular.',
        stack: [SiJavascript, SiHtml5, SiCss3],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Hackaton Cloudinary',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/landing-cloudinary-hackathon',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://spooke-ia-cloudinary.netlify.app/',
            }
        ]
    },
    {
        id: 'movies-app',
        cover: '/projects/project_12.jpg',
        category: 'webApp',
        description: 'Aplicacion web para buscar películas y series de distintas categorias.',
        stack: [SiReact, SiReactrouter, SiVite, SiCss3],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Movies DB',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/movies-app',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://movies-app-eight-pearl-90.vercel.app/',
            }
        ]
    },
    {
        id: 'hirace',
        cover: '/projects/project_13.jpg',
        category: 'landing',
        description: 'Landing page para empresas que conectan empleadores con candidatos.',
        stack: [SiAstro, SiTypescript, SiTailwindcss],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Hirace',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/hirace',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://hirace.vercel.app/',
            }
        ]
    },
    {
        id: 'barbersteel',
        cover: '/projects/project_14.jpg',
        category: 'landing',
        description: 'Landing page para una barberia con un diseño bastante moderno.',
        stack: [SiAstro, SiTypescript, SiTailwindcss],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'BarberSteel',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/barbersteel',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://barbersteel.vercel.app/',
            }
        ]
    },
    {
        id: 'fit-life',
        cover: '/projects/project_07.jpg',
        category: 'landing',
        description: 'Landing page para una gym con un diseño bastante atractivo.',
        stack: [SiAstro, SiTypescript, SiTailwindcss],
        details: [
            {
                type: 'text',
                label: 'Nombre',
                value: 'Fit and Life',
            },
            {
                type: 'link',
                label: 'Respositorio',
                value: 'https://github.com/yanguadotdev/fitandlife',
            },
            {
                type: 'link',
                label: 'Preview',
                value: 'https://fitandlife.vercel.app/',
            }
        ]
    }
]