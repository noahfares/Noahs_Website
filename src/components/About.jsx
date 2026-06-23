import Reveal from './Reveal.jsx'
import { about } from '../data/content.js'
import './About.css'

/**
 * About
 * -----
 * Personal intro paragraphs plus a row of highlight stats.
 */
export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="eyebrow" as="p">
          {about.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title about__title" delay={0.05}>
          {about.title}
        </Reveal>

        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" className="about__paragraph" key={i} delay={0.1 + i * 0.08}>
              {p}
            </Reveal>
          ))}
        </div>

        <div className="about__stats">
          {about.stats.map((stat, i) => (
            <Reveal className="about__stat" key={stat.label} delay={0.1 + i * 0.1}>
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
