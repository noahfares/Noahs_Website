/**
 * ============================================================================
 *  SITE CONTENT  —  edit this file to change everything on the page.
 * ============================================================================
 *
 *  This is the single source of truth for all text, links, and lists shown
 *  on the site. You almost never need to touch the components — just edit the
 *  values below and the page updates automatically.
 *
 *  Each section maps to a component in /src/components.
 * ============================================================================
 */

export const site = {
  name: 'Noah Fares',
  initial: 'N',
}

/* --- Navigation links (in order).
       type:'anchor' → scrolls to a section id on the home page.
       type:'page'   → navigates to a separate page (page: key used in routing). --- */
export const navLinks = [
  { label: 'About',      href: '#about',   type: 'anchor' },
  { label: 'Experience', href: '#work',    type: 'anchor' },
  { label: 'Skills',     href: '#skills',  type: 'anchor' },
  { label: 'Contact',    href: '#contact', type: 'anchor' },
  { label: 'Strava',     page: 'strava',   type: 'page'   },
  { label: 'Films',      page: 'films',    type: 'page'   },
]

/* --- HERO: the big opening statement. --- */
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

/* --- ABOUT: a short personal introduction. --- */
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

/* --- WORK / EXPERIENCE: your roles. Add or remove entries freely.
       `link` is optional — set to '#' to hide the button.            --- */
export const work = {
  eyebrow: 'Experience',
  title: "Where I've worked.",
}

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

/* --- SKILLS: grouped capabilities. --- */
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
      take: 'Love and gravity bending the fabric of time — a film that stays with you long after the credits.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      rating: 10,
      take: 'A perfectly engineered dream machine where every rewatch reveals new layers.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      year: 2018,
      director: 'Persichetti · Ramsey · Rothman',
      rating: 9,
      take: 'Animation reinvented. The most creatively daring superhero film ever made.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png',
    },
    {
      title: 'Inglourious Basterds',
      year: 2009,
      director: 'Quentin Tarantino',
      rating: 9,
      take: "Tarantino's most patient and rewarding script, with a final act that earns every second.",
      poster: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg',
    },
    {
      title: 'The Prestige',
      year: 2006,
      director: 'Christopher Nolan',
      rating: 9,
      take: "A magician's duel that turns the entire film into its own trick.",
      poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg',
    },
    {
      title: 'The Dark Knight Trilogy',
      year: '2005–2012',
      director: 'Christopher Nolan',
      rating: 10,
      take: 'Nolan raised the bar for what superhero cinema could aspire to be.',
      note: 'Batman Begins · The Dark Knight · The Dark Knight Rises',
      poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'Lana & Lilly Wachowski',
      rating: 9,
      take: 'The film that rewired my brain as a kid and still holds up on every rewatch.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png',
    },
    {
      title: 'Good Will Hunting',
      year: 1997,
      director: 'Gus Van Sant',
      rating: 9,
      take: 'Raw, honest, and one of the best performances ever committed to film.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png',
    },
    {
      title: 'Man of Steel',
      year: 2013,
      director: 'Zack Snyder',
      rating: 8,
      take: 'The Superman origin story done with genuine weight and consequence.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/5/50/Man_of_Steel_%28film%29_poster.jpg',
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      rating: 9,
      take: 'Tarantino at his most kinetic — brutal, funny, and stylistically unmatched.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg',
    },
  ],

  directors: [
    {
      name: 'Christopher Nolan',
      films: ['Interstellar', 'Inception', 'The Prestige', 'The Dark Knight Trilogy'],
    },
    {
      name: 'Quentin Tarantino',
      films: ['Inglourious Basterds', 'Django Unchained', 'Pulp Fiction'],
    },
    {
      name: 'Zack Snyder',
      films: ['Man of Steel', '300', 'Watchmen'],
    },
    {
      name: 'The Wachowskis',
      films: ['The Matrix', 'The Matrix Reloaded', 'Speed Racer'],
    },
  ],

  watching: [
    { title: 'Severance', platform: 'Apple TV+', season: 2, type: 'show' },
    { title: 'Dune: Part Two', platform: 'Max', type: 'movie' },
  ],

  watchlist: [
    { title: 'Project Hail Mary',  type: 'movie', notes: '' },
    { title: 'Oppenheimer',        type: 'movie', notes: '' },
    { title: 'Dune: Part Two',     type: 'movie', notes: '' },
    { title: 'The Godfather',      type: 'movie', notes: 'Parts I & II' },
    { title: 'Kill Bill',          type: 'movie', notes: 'Vol. 1 & 2' },
    { title: 'Heat',               type: 'movie', notes: '' },
  ],
}

/* --- CONTACT: closing call to action. --- */
export const contact = {
  eyebrow: 'Contact',
  title: "Let's build something.",
  text: "Open to new opportunities, collaborations, or just a good conversation. I'd love to hear from you.",
  email: 'noahfares@gmail.com',
  // Used by the footer icon bar. Discord has no public profile URL — the title
  // attribute shows the username on hover. Update href when you have your profile link.
  socials: [
    { label: 'Email',    href: 'mailto:noahfares@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noahfares/' },
    { label: 'GitHub',   href: 'https://github.com/noahfares' },
    { label: 'Discord',  href: 'https://discord.com', title: 'odyssey9662' },
  ],
}
