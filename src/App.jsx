import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import '../portfolio.css'
import { profile } from '../data.js'
import About from '../Navbar/About'
import Contact from '../Navbar/Contact'
import Home from '../Navbar/Home'
import Projects from '../Navbar/Projects'
import Skills from '../Navbar/Skills'
import Navbars from '../Navbar/Navbars'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page__title">Page not found</h1>
        <p className="section__intro">
          This address does not exist. Use the menu, or go back to the{' '}
          <Link className="text-link" to="/">home page</Link>.
        </p>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
        <p className="site-footer__links">
          <a className="text-link" href={profile.github}>GitHub</a>
          <a className="text-link" href={profile.linkedin}>LinkedIn</a>
          <a className="text-link" href={`mailto:${profile.email}`}>Email</a>
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbars />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App