import { motion } from 'framer-motion'

// Fades + slides children up each time they scroll into view.
// Props: delay (seconds, for staggering siblings), y (px travel), as (wrapper tag).
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
