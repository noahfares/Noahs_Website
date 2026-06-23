import { useEffect, useState } from 'react'
import { site, navLinks } from '../data/content.js'
import './Navbar.css'

/**
 * Navbar
 * ------
 * Sticky, translucent top bar with backdrop blur — gains a stronger
 * background once the user scrolls past the hero, matching Apple's nav.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <a href="#top" className="navbar__logo" aria-label="Home">
          {site.initial}
        </a>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
