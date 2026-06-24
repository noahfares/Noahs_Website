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
        <span className="movie-card__rank">#{rank}</span>
        <div className="movie-card__poster-title">{film.title}</div>
      </div>
      <div className="movie-card__body">
        <p className="movie-card__director">{film.director} · {film.year}</p>
        <h3 className="movie-card__title">{film.title}</h3>
        {film.note && <p className="movie-card__note">{film.note}</p>}
        <StarRating rating={film.rating} />
        <p className="movie-card__take">"{film.take}"</p>
      </div>
    </div>
  )
}

function WatchingCard({ item }) {
  return (
    <div className="watching-card">
      <div className="watching-card__left">
        <span className="watching-card__badge">{item.type === 'show' ? 'TV' : 'Film'}</span>
        <div>
          <p className="watching-card__title">{item.title}</p>
          {item.season && (
            <p className="watching-card__meta">Season {item.season}</p>
          )}
        </div>
      </div>
      <span className="watching-card__platform">{item.platform}</span>
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

      {/* Favourite Directors */}
      <section className="section">
        <div className="container">
          <Reveal as="p" className="eyebrow">Directors</Reveal>
          <Reveal as="h2" className="section-title" delay={0.05}>Directors I keep going back to.</Reveal>
          <div className="directors-grid">
            {films.directors.map((dir, i) => (
              <Reveal key={dir.name} delay={0.06 + i * 0.06}>
                <div className="director-card">
                  <h3 className="director-card__name">{dir.name}</h3>
                  <ul className="director-card__films">
                    {dir.films.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Watching + Watchlist side by side */}
      <section className="section section--dark">
        <div className="container">
          <div className="films-lower">

            <div className="films-lower__col">
              <Reveal as="p" className="eyebrow">Now</Reveal>
              <Reveal as="h2" className="section-title section-title--sm" delay={0.05}>
                Currently watching.
              </Reveal>
              <div className="watching-list">
                {films.watching.map((item, i) => (
                  <Reveal key={item.title} delay={0.06 + i * 0.06}>
                    <WatchingCard item={item} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="films-lower__col">
              <Reveal as="p" className="eyebrow">Queue</Reveal>
              <Reveal as="h2" className="section-title section-title--sm" delay={0.05}>
                The watchlist.
              </Reveal>
              <ol className="watchlist">
                {films.watchlist.map((item, i) => (
                  <Reveal key={item.title + i} as="li" delay={0.06 + i * 0.05}>
                    <div className="watchlist__item">
                      <div className="watchlist__left">
                        <span className="watchlist__num">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                          <p className="watchlist__title">{item.title}</p>
                          {item.notes && (
                            <p className="watchlist__notes">{item.notes}</p>
                          )}
                        </div>
                      </div>
                      <span className="watchlist__type">{item.type}</span>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
