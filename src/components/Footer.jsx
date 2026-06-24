import { contact, site } from '../data/content.js'
import { EmailIcon, LinkedInIcon, GitHubIcon, DiscordIcon } from './icons.jsx'
import './Footer.css'

const ICON_MAP = {
  Email:    EmailIcon,
  LinkedIn: LinkedInIcon,
  GitHub:   GitHubIcon,
  Discord:  DiscordIcon,
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <nav className="footer__socials" aria-label="Social links">
        {contact.socials.map((social) => {
          const Icon = ICON_MAP[social.label]
          if (!Icon) return null
          return (
            <a
              key={social.label}
              href={social.href}
              className="footer__icon"
              aria-label={social.title ? `${social.label}: ${social.title}` : social.label}
              title={social.title ? `${social.label}: ${social.title}` : social.label}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
            >
              <Icon />
            </a>
          )
        })}
      </nav>
      <p className="footer__copy">© {year} {site.name}</p>
    </footer>
  )
}
