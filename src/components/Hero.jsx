import { motion } from 'framer-motion'
import { hero } from '../data/content.js'
import './Hero.css'

/**
 * Hero
 * ----
 * The opening screen. Elements animate in on load with a gentle stagger.
 */

// A small helper so each line animates in sequence.
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <motion.div
        className="container hero__inner"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
      >
        <motion.h1
          className="hero__title"
          variants={item}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.title}
          <span className="hero__cursor" aria-hidden="true">_</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          variants={item}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          className="hero__tagline"
          variants={item}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={item}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`btn ${action.primary ? 'btn--primary' : 'btn--ghost'}`}
            >
              {action.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Soft animated scroll hint at the bottom of the hero. */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-dot" />
      </motion.div>
    </section>
  )
}
