import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Strava from './pages/Strava.jsx'
import Films from './pages/Films.jsx'

function getPage() {
  return new URLSearchParams(window.location.search).get('page') || 'home'
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'light'
    }
    return 'light'
  })

  const [page, setPage] = useState(getPage)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handlePop = () => setPage(getPage())
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  const navigate = (p) => {
    const url = p === 'home' ? '/' : `/?page=${p}`
    window.history.pushState({ page: p }, '', url)
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} page={page} navigate={navigate} />
      <main>
        {page === 'home'   && <Home />}
        {page === 'strava' && <Strava />}
        {page === 'films'  && <Films />}
      </main>
      <Footer />
    </>
  )
}
