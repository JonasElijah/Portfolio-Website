// Project + case-study content. Add a project by appending to this array.

export type ArtKind = 'photo' | 'cache' | 'fsm'

export type Project = {
  slug: string // URL: #/work/<slug>
  title: string
  category: string // small gold label
  tagline: string
  art: ArtKind // illustration used on the tile and case-study hero
  featured?: boolean // featured = full-width tile
  meta: {
    role: string
    stack: string[]
    tools?: string[]
  }
  sourceUrl?: string
  liveUrl?: string
  overview: string
  highlights: { title: string; body: string }[]
  /** Screenshots / wireframes. Put files in /public/images and reference them as './images/x.png'. */
  gallery?: { src: string; alt: string; caption?: string }[]
  /** Your reflection. Leave null to hide the section (a reminder shows in dev mode only). */
  learned: string | null
}

export const projects: Project[] = [
  {
    slug: 'photography-website',
    title: 'Photography Website',
    category: 'Full-stack web app',
    tagline: 'A clean place for photographers to publish their work.',
    art: 'photo',
    featured: true,
    meta: {
      role: 'Designer & full-stack developer',
      stack: ['PHP', 'MySQL', 'AWS', 'Bootstrap', 'HTML/CSS'],
      tools: ['Figma'],
    },
    sourceUrl: 'https://github.com/JonasElijah/user-interface-website',
    overview:
      'A web application that gives photographers a user-friendly interface to publish their work. I designed the experience in Figma first, then built the full stack — a MySQL database for users, photos and orders, a PHP backend, and a responsive Bootstrap frontend hosted on AWS.',
    highlights: [
      {
        title: 'Designed before coded',
        body: 'Wireframes and sketches in Figma set the layout and flow before a line of code was written.',
      },
      {
        title: 'A database built for orders',
        body: 'I designed and managed a relational schema for user information and photos.',
      },
      {
        title: 'Full stack on AWS',
        body: 'PHP backend, Bootstrap frontend and MySQL, deployed and hosted on AWS.',
      },
    ],
    gallery: [],
    learned: null,
  },
  {
    slug: 'cpu-cache-simulator',
    title: 'CPU Cache Simulator',
    category: 'Systems · C',
    tagline: 'Watching memory hits and misses, one cycle at a time.',
    art: 'cache',
    meta: {
      role: 'Developer',
      stack: ['C', 'Data Structures', 'Computer Architecture'],
    },
    sourceUrl: 'https://github.com/JonasElijah/comp_arch_cache_sim',
    overview:
      'A CPU cache simulator written in C that models how memory accesses hit or miss in a cache. It was a deep dive into low-level programming, data structures and the fundamentals of computer architecture.',
    highlights: [
      {
        title: 'Low-level C',
        body: 'Written in C to sharpen low-level programming skills — memory, pointers and all.',
      },
      {
        title: 'Data structures at the core',
        body: 'The simulator is built on carefully chosen data structures to model cache behavior.',
      },
      {
        title: 'Tested thoroughly',
        body: 'Put through intensive software testing with sophisticated test cases.',
      },
    ],
    gallery: [],
    learned: null,
  },
  {
    slug: 'cpu-fighters',
    title: 'CPU Fighters',
    category: 'Game · Unity / C#',
    tagline: 'An AI opponent that thinks in states.',
    art: 'fsm',
    meta: {
      role: 'Game developer',
      stack: ['C#', '.NET', 'Unity'],
    },
    sourceUrl: 'https://github.com/JonasElijah/cpu_fighters',
    overview:
      'A fully functional fighting game built in Unity with C# and .NET. The centerpiece is a computer-controlled fighter driven by an optimized AI state machine that decides what to do next.',
    highlights: [
      {
        title: 'An AI that thinks in states',
        body: 'An advanced, optimized state machine makes every decision for the AI fighter.',
      },
      {
        title: 'Built with Unity & C#',
        body: 'Gameplay, UI and AI built with C#, Unity and .NET.',
      },
      {
        title: 'Polished to play',
        body: 'A clean UI and a bug-free experience from menu to final round.',
      },
    ],
    gallery: [],
    learned: null,
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)
