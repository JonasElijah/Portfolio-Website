// All homepage content lives here — edit text without touching components.

export const profile = {
  name: 'Jonas Elijah Icban',
  shortName: 'Jonas Icban',
  initials: 'JI',
  role: 'Full-stack Software Engineer',
  city: 'New Braunfels',
  location: 'Texas',
  email: 'jonaselijah11@gmail.com',
  resumeUrl: './resume.pdf', // file lives in /public
  links: {
    linkedin: 'https://www.linkedin.com/in/jonaselijahicban',
    github: 'https://github.com/JonasElijah',
  },
  hero: {
    line1: 'Software that feels',
    line2: 'simple to use.',
    lead: 'Jonas Elijah Icban',
  },
  about: [
    'I’m a full-stack software engineer with experience building enterprise systems. I like working closely with business stakeholders and product teams to find real pain points, then shipping software that makes those processes faster and simpler.',
    'I have worked mostly with PHP, React, JavaScript, SQL and Docker, with a strong foundation in agile development and the full SDLC. I am currently pursuing my M.S. in Computer Science at UT Austin to deepen my expertise in infrastructure-level engineering and data-intensive systems.',
  ],
  contact: {
    title: 'Let’s build something.',
    lead: 'Open to full-time software engineering roles.',
  },
}

export const stats = [
  { value: 'Software Engineer', label: '1.5 years at Paycom' },
  { value: 'Web Developer', label: 'Rep Lock Marketing' },
  { value: 'B.S Computer Science', label: 'University of Texas as San Antonio' },
]

export type Job = {
  dates: string
  role: string
  org: string
  summary: string
}

export const experience: Job[] = [
  {
    dates: 'Nov 2024 – May 2026',
    role: 'Software Engineer',
    org: 'Paycom',
    summary:
      'Built PHP endpoints and responsive React/Redux frontends for enterprise CRM and billing. Met with CRM and billing users to shape features, optimized SQL for business demand, and helped maintain nightly ETL jobs moving millions of records without slowing systems.',
  },
  {
    dates: 'Aug – Sep 2024',
    role: 'Web Developer',
    org: 'Rep Lock Marketing · Austin',
    summary:
      'Designed and built responsive, user-friendly, SEO-optimized client websites with HTML, CSS, JavaScript and WordPress.',
  },
  {
    dates: 'Sep 2023 – May 2024',
    role: 'Computer Science Tutor',
    org: 'UTSA · San Antonio',
    summary:
      'Helped students debug code, explained logical and compilation errors, and walked through the reasoning behind their algorithms.',
  },
]

export const toolkit: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'Redux', 'JavaScript', 'TypeScript', 'HTML/CSS'] },
  { group: 'Backend', items: ['PHP', 'SQL', 'C#', 'Java', 'Python', 'C'] },
  { group: 'Infrastructure', items: ['Docker', 'AWS', 'Git', 'Bash', 'ETL'] },
  { group: 'Design', items: ['Figma', 'UI/UX', 'Responsive', 'Wireframing'] },
]

export const education = [
  {
    school: 'University of Texas at Austin',
    degree: 'MS, Computer Science',
    dates: '2026 – Present',
    note: 'Distributed Systems · Deep Learning',
  },
  {
    school: 'University of Texas at San Antonio',
    degree: 'BS, Computer Science',
    dates: '2022 – 2024',
    note: 'Magna Cum Laude · 3.85 GPA',
  },
]

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
