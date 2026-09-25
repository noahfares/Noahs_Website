import { useState } from 'react'
import { hero } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  const [active, setActive] = useState(0)
  const discipline = hero.disciplines[active]
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__meta"><span>{hero.eyebrow}</span><span>{hero.location}</span></div>
        <div className="hero__layout">
          <div className="hero__copy">
            <p className="eyebrow">{hero.intro}</p>
            <h1 className="hero__title">{hero.titleLines[0]}<br />{hero.titleLines[1]}<span>.</span><span className="hero__cursor" aria-hidden="true">_</span></h1>
            <p className="hero__subtitle">{hero.subtitle}</p>
            <p className="hero__tagline">{hero.tagline}</p>
            <div className="hero__actions">
              {hero.actions.map(action => <a key={action.label} href={action.href} className={`btn ${action.primary ? 'btn--primary' : 'btn--ghost'}`}>{action.label}<span aria-hidden="true">↗</span></a>)}
            </div>
          </div>
          <div className="system">
            <div className="system__header"><span>{hero.diagramLabel}</span><span>NF / 01</span></div>
            <div className={`system__drawing system__drawing--${active}`} aria-hidden="true">
              <svg viewBox="0 0 480 360" fill="none">
                <circle cx="240" cy="180" r="137" className="system__orbit" />
                <circle cx="240" cy="180" r="106" className="system__orbit system__orbit--inner" />
                <path d="M0 100H100L160 160H190 M0 260H100L160 200H190 M480 100H380L320 160H290 M480 260H380L320 200H290 M240 0V130 M240 230V360" className="system__trace" />
                <path d="M0 100H100L160 160H190 M480 260H380L320 200H290 M240 0V130" className="system__signal" />
                {[0,1,2,3,4,5,6].map(i => <g key={i} className="system__pins"><path d={`M${207+i*11} 118v16 M${207+i*11} 226v16 M178 ${147+i*11}h16 M286 ${147+i*11}h16`} /></g>)}
                <rect x="192" y="132" width="96" height="96" rx="8" className="system__chip" />
                <rect x="204" y="144" width="72" height="72" rx="3" className="system__chip-inner" />
                <text x="240" y="190" textAnchor="middle" className="system__monogram">nf</text>
                {[[100,100],[100,260],[380,100],[380,260],[240,43],[240,317]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" className="system__node" />)}
                <text x="18" y="86" className="system__label">INPUT</text><text x="403" y="284" className="system__label">OUTPUT</text>
              </svg>
              <span className="system__coordinate">{discipline.code}</span>
            </div>
            <div className="system__controls" aria-label={hero.disciplineLabel}>
              {hero.disciplines.map((entry,i) => <button key={entry.label} onClick={() => setActive(i)} aria-pressed={active === i}>{entry.label}</button>)}
            </div>
            <p className="system__caption" aria-live="polite"><span aria-hidden="true">↳</span> {discipline.description}</p>
          </div>
        </div>
        <div className="hero__footer"><span><i />{hero.current}</span><a href="#about">{hero.explore} <span aria-hidden="true">↓</span></a></div>
      </div>
    </section>
  )
}
