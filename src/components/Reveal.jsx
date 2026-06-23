import { motion } from 'framer-motion'

/**
 * Reveal
 * ------
 * Wraps any content and fades + slides it into view the first time it
 * scrolls onto screen — the signature Apple "content rises up" effect.
 *
 * Props:
 *   - delay:  seconds to wait before animating (stagger items by passing
 *             0, 0.1, 0.2, ...).
 *   - y:      how far (px) the element starts below its final position.
 *   - as:     the wrapper element/component type (default: 'div').
 *
 * Usage:  <Reveal delay={0.1}><h2>Hello</h2></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
