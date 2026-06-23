import Reveal from './Reveal.jsx'
import { work, projects } from '../data/content.js'
import './Work.css'

/**
 * Work
 * ----
 * A grid of project cards. Pulls directly from the `projects` array in
 * content.js — add an object there and a new card appears automatically.
 */
export default function Work() {
  return (
    <section id="work" className="section work section--dark">
      <div className="container">
        <Reveal className="eyebrow" as="p">
          {work.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          {work.title}
        </Reveal>

        <div className="work__grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.08 * i}>
              <article className="card">
                <div className="card__top">
                  <span className="card__category">{project.category}</span>
                  <h3 className="card__title">{project.title}</h3>
                  <p className="card__desc">{project.description}</p>
                </div>

                <div className="card__bottom">
                  <ul className="card__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.link && project.link !== '#' && (
                    <a
                      className="card__link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
