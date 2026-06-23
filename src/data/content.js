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

/* --- Navigation links (in order). `href` must match a section `id` below. --- */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
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

/* --- CONTACT: closing call to action. --- */
export const contact = {
  eyebrow: 'Contact',
  title: "Let's build something.",
  text: "Open to new opportunities, collaborations, or just a good conversation. I'd love to hear from you.",
  email: 'noahfares@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noahfares/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],
}
