import Reveal from './Reveal.jsx'
import { skills } from '../data/content.js'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="eyebrow" as="p">
          {skills.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          {skills.title}
        </Reveal>

        <div className="skills__grid">
          {skills.groups.map((group, i) => (
            <Reveal key={group.name} delay={0.08 * i}>
              <div className="skills__group">
                <h3 className="skills__group-name">{group.name}</h3>
                <ul className="skills__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
