import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import './Strava.css'

function fmtDistance(m) {
  return (m / 1000).toFixed(1) + ' km'
}

function fmtPace(movingTime, distance) {
  const secPerKm = movingTime / (distance / 1000)
  const mins = Math.floor(secPerKm / 60)
  const secs = Math.round(secPerKm % 60).toString().padStart(2, '0')
  return `${mins}:${secs}/km`
}

function fmtTime(seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const TYPE_ICONS = {
  Run:            '🏃',
  Ride:           '🚴',
  VirtualRide:    '🚴',
  Swim:           '🏊',
  Hike:           '🥾',
  Walk:           '🚶',
  WeightTraining: '🏋️',
  Workout:        '💪',
  Rowing:         '🚣',
  Yoga:           '🧘',
}

function ActivityCard({ act }) {
  const icon = TYPE_ICONS[act.sport_type] ?? TYPE_ICONS[act.type] ?? '⚡'
  const showPace = act.distance > 500 && (act.type === 'Run' || act.sport_type === 'Run')

  return (
    <div className="activity-card">
      <div className="activity-card__header">
        <span className="activity-card__icon">{icon}</span>
        <div className="activity-card__meta">
          <span className="activity-card__name">{act.name}</span>
          <span className="activity-card__date">{fmtDate(act.start_date)}</span>
        </div>
        <span className="activity-card__type">{act.sport_type ?? act.type}</span>
      </div>
      <div className="activity-card__stats">
        {act.distance > 0 && (
          <div className="activity-card__stat">
            <span className="activity-card__stat-val">{fmtDistance(act.distance)}</span>
            <span className="activity-card__stat-key">distance</span>
          </div>
        )}
        <div className="activity-card__stat">
          <span className="activity-card__stat-val">{fmtTime(act.moving_time)}</span>
          <span className="activity-card__stat-key">time</span>
        </div>
        {showPace && (
          <div className="activity-card__stat">
            <span className="activity-card__stat-val">{fmtPace(act.moving_time, act.distance)}</span>
            <span className="activity-card__stat-key">pace</span>
          </div>
        )}
        {act.total_elevation_gain > 0 && (
          <div className="activity-card__stat">
            <span className="activity-card__stat-val">+{Math.round(act.total_elevation_gain)} m</span>
            <span className="activity-card__stat-key">elevation</span>
          </div>
        )}
        {act.average_heartrate && (
          <div className="activity-card__stat">
            <span className="activity-card__stat-val">{Math.round(act.average_heartrate)} bpm</span>
            <span className="activity-card__stat-key">avg hr</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Strava() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/strava-data.json')
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const hasActivities = data?.activities?.length > 0
  const ytd = data?.stats?.ytd_run_totals

  return (
    <div className="strava-page">

      <section className="section strava-page__hero">
        <div className="container">
          <Reveal as="p" className="eyebrow">Strava</Reveal>
          <Reveal as="h1" className="section-title" delay={0.05}>On the move.</Reveal>
          <Reveal as="p" className="strava-page__subtitle" delay={0.1}>
            Running logs and activity history — pulled straight from Strava and updated daily.
          </Reveal>
        </div>
      </section>

      {loading && (
        <section className="section">
          <div className="container">
            <p className="strava-page__status">Loading activities…</p>
          </div>
        </section>
      )}

      {!loading && !hasActivities && (
        <section className="section">
          <div className="container strava-page__empty">
            <div className="strava-page__empty-icon">🏃</div>
            <p className="strava-page__empty-title">Strava sync not configured yet.</p>
            <p className="strava-page__empty-body">
              Activities will appear here once the GitHub Actions workflow is connected.
              See <code>.github/workflows/strava.yml</code> for setup instructions.
            </p>
          </div>
        </section>
      )}

      {!loading && hasActivities && (
        <>
          {ytd && (
            <section className="section">
              <div className="container">
                <Reveal>
                  <div className="strava-stats">
                    <div className="strava-stats__item">
                      <span className="strava-stats__value">{ytd.count}</span>
                      <span className="strava-stats__label">runs this year</span>
                    </div>
                    <div className="strava-stats__item">
                      <span className="strava-stats__value">{fmtDistance(ytd.distance)}</span>
                      <span className="strava-stats__label">total distance</span>
                    </div>
                    <div className="strava-stats__item">
                      <span className="strava-stats__value">
                        {Math.round(ytd.elevation_gain).toLocaleString()} m
                      </span>
                      <span className="strava-stats__label">elevation gained</span>
                    </div>
                    <div className="strava-stats__item">
                      <span className="strava-stats__value">{fmtTime(ytd.moving_time)}</span>
                      <span className="strava-stats__label">time on feet</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>
          )}

          <section className="section section--dark">
            <div className="container">
              <Reveal as="p" className="eyebrow">Recent</Reveal>
              <Reveal as="h2" className="section-title" delay={0.05}>Latest activities.</Reveal>
              <div className="strava-activities">
                {data.activities.map((act, i) => (
                  <Reveal key={act.id} delay={0.04 + i * 0.03}>
                    <ActivityCard act={act} />
                  </Reveal>
                ))}
              </div>
              {data.updated_at && (
                <Reveal delay={0.1}>
                  <p className="strava-page__updated">
                    Last synced {fmtDate(data.updated_at)} ·{' '}
                    <a
                      href="https://www.strava.com/athletes/fares_noah"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Strava →
                    </a>
                  </p>
                </Reveal>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
