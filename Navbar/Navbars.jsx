import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { profile } from '../data.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbars() {
  
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          {profile.name}
        </NavLink>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          id="site-menu"
          className={open ? 'site-nav site-nav--open' : 'site-nav'}
          aria-label="Main"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbars