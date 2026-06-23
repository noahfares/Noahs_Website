import { site } from '../data/content.js'
import './Footer.css'

/**
 * Footer
 * ------
 * Minimal closing line. The year updates automatically.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} {site.name}. All rights reserved.
        </span>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
