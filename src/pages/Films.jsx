import Reveal from '../components/Reveal.jsx'
import { films } from '../data/content.js'
import './Films.css'

function StarRating({ rating }) {
  return (
    <div className="film-rating" aria-label={`Rating: ${rating}/10`}>
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className={`film-rating__dot ${i < rating ? 'film-rating__dot--on' : ''}`} />
      ))}
    </div>
  )
}

function MovieCard({ film, rank }) {
  return (
    <div className="movie-card">
      <div
        className="movie-card__poster"
        style={film.poster ? undefined : { background: film.gradient }}
      >
        {film.poster && (
          <img src={film.poster} alt={film.title} loading="lazy" className="movie-card__poster-img" />
        )}
        <div className="movie-card__poster-title">{film.title}</div>
      </div>
      <div className="movie-card__body">
        <p className="movie-card__director">{film.director} · {film.year}</p>
        <h3 className="movie-card__title">{film.title}</h3>
        {film.note && <p className="movie-card__note">{film.note}</p>}
        <StarRating rating={film.rating} />
        <span className="movie-card__rank">#{rank}</span>
      </div>
    </div>
  )
}

const WATCHLIST_GRADIENTS = [
  'linear-gradient(160deg, #0a1628 0%, #1a3a6b 100%)',
  'linear-gradient(160deg, #1a1208 0%, #3d2d10 100%)',
  'linear-gradient(160deg, #1a1208 0%, #5c4a20 100%)',
  'linear-gradient(160deg, #1a0808 0%, #4a1010 100%)',
  'linear-gradient(160deg, #1a1500 0%, #4a3d00 100%)',
  'linear-gradient(160deg, #080a1a 0%, #101535 100%)',
]

function WatchlistCard({ item, rank }) {
  const gradient = WATCHLIST_GRADIENTS[(rank - 1) % WATCHLIST_GRADIENTS.length]
  return (
    <div className="movie-card">
      <div className="movie-card__poster" style={{ background: gradient }}>
        <div className="movie-card__poster-title">{item.title}</div>
      </div>
      <div className="movie-card__body">
        <p className="movie-card__director">{item.type === 'show' ? 'Series' : 'Film'}</p>
        <h3 className="movie-card__title">{item.title}</h3>
        {item.notes && <p className="movie-card__note">{item.notes}</p>}
        <span className="movie-card__rank">#{rank}</span>
      </div>
    </div>
  )
}

export default function Films() {
  return (
    <div className="films-page">

      {/* Hero */}
      <section className="section films-page__hero">
        <div className="container">
          <Reveal as="p" className="eyebrow">{films.eyebrow}</Reveal>
          <Reveal as="h1" className="section-title" delay={0.05}>{films.title}</Reveal>
          <Reveal as="p" className="films-page__subtitle" delay={0.1}>
            {films.subtitle}
          </Reveal>
        </div>
      </section>

      {/* Top films */}
      <section className="section section--dark">
        <div className="container">
          <Reveal as="p" className="eyebrow">All-time</Reveal>
          <Reveal as="h2" className="section-title" delay={0.05}>Top films.</Reveal>
          <div className="movies-grid">
            {films.topMovies.map((film, i) => (
              <Reveal key={film.title} delay={0.06 + i * 0.07}>
                <MovieCard film={film} rank={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Watchlist */}
      <section className="section">
        <div className="container">
          <Reveal as="p" className="eyebrow">Queue</Reveal>
          <Reveal as="h2" className="section-title" delay={0.05}>The watchlist.</Reveal>
          <div className="movies-grid">
            {films.watchlist.map((item, i) => (
              <Reveal key={item.title + i} delay={0.06 + i * 0.07}>
                <WatchlistCard item={item} rank={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
