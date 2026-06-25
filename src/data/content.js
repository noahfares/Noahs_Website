// Single source of truth for all site copy, links, and lists.
// Each export maps to a component (src/components) or page (src/pages).
// Edit values here, not the components.

export const site = {
  name: 'Noah Fares',
  initial: 'N',
}

// Navigation, in order. type:'anchor' scrolls to a section id on the home page;
// type:'page' routes to a standalone page via the `page` key (see App.jsx routing).
export const navLinks = [
  { label: 'About',      href: '#about',   type: 'anchor' },
  { label: 'Experience', href: '#work',    type: 'anchor' },
  { label: 'Skills',     href: '#skills',  type: 'anchor' },
  { label: 'Contact',    href: '#contact', type: 'anchor' },
  { label: 'Strava',     page: 'strava',   type: 'page'   },
  { label: 'Films',      page: 'films',    type: 'page'   },
]

export const hero = {
  title: 'Noah Fares.',
  subtitle: 'Electrical Engineer. Robotics & Automation.',
  tagline:
    'I build reliable, precise systems — from mission-critical chip verification to robotics and automation.',
  actions: [
    { label: 'See my experience', href: '#work', primary: true },
    { label: 'Get in touch', href: '#contact', primary: false },
  ],
}

export const about = {
  eyebrow: 'About',
  title: 'A bit about me.',
  paragraphs: [
    "I'm a detail-oriented Electrical Engineer with a strong passion for embedded systems, robotics, and automation. I graduated from the University of Alberta with a BSc in Electrical Engineering Co-op and bring hands-on experience from internships in optical testing, chip verification, and telecoms.",
    "I thrive on hard problems — the kind that sit at the intersection of hardware and software. I'm quick to adapt to new technologies and believe the best work comes from combining rigorous thinking with genuine curiosity.",
  ],
  stats: [
    { value: 'BSc EE', label: 'University of Alberta, Co-op' },
    { value: '3', label: 'Engineering internships' },
    { value: 'NASA', label: 'Mission-critical project' },
  ],
}

export const work = {
  eyebrow: 'Experience',
  title: "Where I've worked.",
}

// Each entry renders a card in Work.jsx. link: '#' hides the "View" button.
export const projects = [
  {
    title: 'Robotics Support E.I.T.',
    category: 'Promise Robotics · Calgary, AB · 2026 – Present',
    description:
      'More details coming soon.',
    tags: ['Robotics'],
    link: '#',
  },
  {
    title: 'Software Automation Engineer',
    category: 'Lumentum · Ottawa, ON · 2024',
    description:
      "Built a project-wide automation framework for Lumentum's optical solutions, led alpha testing of ~400 test cases, and calibrated FPGA hardware. Worked on C# automation code alongside Design & Verification teams.",
    tags: ['C#', 'FPGA', 'Optical Testing', 'GitHub', 'Jira'],
    link: '#',
  },
  {
    title: 'Product Development Engineer',
    category: 'Microchip Technology · Saskatoon, SK · 2023',
    description:
      "Contributed to verification of the High-Performance Spaceflight Computing (HPSC) processor for NASA's future exploration missions — working at the top level of the chip on SpaceWire and SerDes interfaces.",
    tags: ['SystemVerilog', 'UVM', 'SpaceWire', 'SerDes'],
    link: '#',
  },
  {
    title: 'Electrical Engineering Co-op',
    category: 'TELUS · Edmonton, AB · 2022',
    description:
      'Delivered data analysis, automation, and application development solutions. Tested and validated modern equipment, and re-routed phone line connections to optimize system performance.',
    tags: ['Automation', 'Data Analysis', 'Python'],
    link: '#',
  },
]

export const skills = {
  eyebrow: 'Skills',
  title: 'What I work with.',
  groups: [
    {
      name: 'Languages',
      items: ['C / C++ / C#', 'Python', 'MATLAB', 'SystemVerilog / UVM'],
    },
    {
      name: 'Hardware',
      items: ['FPGA', 'KiCad', 'Circuit Design', 'Soldering', 'Optical Testing'],
    },
    {
      name: 'Tools & Workflow',
      items: ['Git / GitHub', 'VS Code', 'OOP', 'Jira', 'Automation Frameworks'],
    },
  ],
}

export const films = {
  eyebrow: 'Films & TV',
  title: 'What I watch.',
  subtitle: 'Curated picks, current obsessions, and the ever-growing queue.',

  topMovies: [
    {
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      rating: 10,
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      rating: 10,
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      year: 2018,
      director: 'Persichetti · Ramsey · Rothman',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png',
    },
    {
      title: 'Inglourious Basterds',
      year: 2009,
      director: 'Quentin Tarantino',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg',
    },
    {
      title: 'The Prestige',
      year: 2006,
      director: 'Christopher Nolan',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg',
    },
    {
      title: 'The Dark Knight Trilogy',
      year: '2005–2012',
      director: 'Christopher Nolan',
      rating: 10,
      note: 'Batman Begins · The Dark Knight · The Dark Knight Rises',
      poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'Lana & Lilly Wachowski',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png',
    },
    {
      title: 'Good Will Hunting',
      year: 1997,
      director: 'Gus Van Sant',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png',
    },
    {
      title: 'Man of Steel',
      year: 2013,
      director: 'Zack Snyder',
      rating: 8,
      poster: 'https://upload.wikimedia.org/wikipedia/en/5/50/Man_of_Steel_%28film%29_poster.jpg',
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg',
    },
  ],

  watchlist: [
    {
      title: 'Project Hail Mary',
      year: 2026,
      director: 'Phil Lord & Chris Miller',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg',
    },
    {
      title: 'Oppenheimer',
      year: 2023,
      director: 'Christopher Nolan',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
    },
    {
      title: 'Dune: Part Two',
      year: 2024,
      director: 'Denis Villeneuve',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg',
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      rating: 10,
      note: 'Parts I & II',
      poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    },
    {
      title: 'Kill Bill',
      year: '2003–2004',
      director: 'Quentin Tarantino',
      rating: 9,
      note: 'Vol. 1 & 2',
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png',
    },
    {
      title: 'Heat',
      year: 1995,
      director: 'Michael Mann',
      rating: 9,
      poster: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Heatposter.jpg',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: "Let's build something.",
  text: "Open to new opportunities, collaborations, or just a good conversation. I'd love to hear from you.",
  email: 'noahfares@gmail.com',
  // Footer icon bar. Discord has no public profile URL; `title` shows the username on hover.
  socials: [
    { label: 'Email',    href: 'mailto:noahfares@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noahfares/' },
    { label: 'GitHub',   href: 'https://github.com/noahfares' },
    { label: 'Discord',  href: 'https://discord.com', title: 'odyssey9662' },
  ],
}
