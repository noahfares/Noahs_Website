import Reveal from './Reveal.jsx'
import { contact } from '../data/content.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section section--dark contact">
      <div className="container contact__inner">
        <Reveal className="eyebrow" as="p">
          {contact.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title contact__title" delay={0.05}>
          {contact.title}
        </Reveal>
        <Reveal as="p" className="contact__text" delay={0.1}>
          {contact.text}
        </Reveal>

        <Reveal className="contact__actions" delay={0.15}>
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
