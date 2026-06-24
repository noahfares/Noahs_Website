import { useEffect, useState } from 'react'
import { site, navLinks } from '../data/content.js'
import { SunIcon, MoonIcon } from './icons.jsx'
import './Navbar.css'

export default function Navbar({ theme, onToggleTheme, page = 'home', navigate }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e, href) => {
    if (page !== 'home') {
      e.preventDefault()
      navigate('home')
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <button className="navbar__logo" onClick={() => navigate('home')} aria-label="Home">
          {site.initial}
        </button>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.type === 'page' ? (
                <button
                  className={`navbar__page-btn ${page === link.page ? 'navbar__page-btn--active' : ''}`}
                  onClick={() => navigate(link.page)}
                >
                  {link.label}
                </button>
              ) : (
                <a href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <button
          className="navbar__theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  )
}
