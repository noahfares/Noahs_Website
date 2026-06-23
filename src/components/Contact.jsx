import Reveal from './Reveal.jsx'
import { contact } from '../data/content.js'
import './Contact.css'

/**
 * Contact
 * -------
 * Closing call to action on a dark section, with email + social links.
 */
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

        {contact.socials?.length > 0 && (
          <Reveal className="contact__socials" delay={0.2}>
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="contact__social"
              >
                {social.label}
              </a>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  )
}
