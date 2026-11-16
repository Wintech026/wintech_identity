import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const navLinks = [
  { label: 'Accueil',  path: '/' },
  { label: 'À Propos', path: '/apropos' },
  { label: 'Services', path: '/services' },
  { label: 'Produits', path: '/produits' },
  { label: 'Équipes',  path: '/equipes' },
];

const Header: React.FC = () => {
  const location  = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header className={`wt-header${scrolled ? ' wt-header--scrolled' : ''}`}>
        <div className="wrap wt-header__inner">

          {/* ── Logo ─────────────────────────────── */}
          <Link to="/" className="wt-brand" aria-label="WinTech — Accueil">
            <img src={logo} alt="WinTech" className="wt-brand__img" />
          </Link>

          {/* ── Navigation desktop ───────────────── */}
          <nav className="wt-nav" aria-label="Navigation">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`wt-nav__link${location.pathname === path ? ' wt-nav__link--active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── CTA ──────────────────────────────── */}
          <Link to="/contact" className="btn btn-primary wt-header__cta">
            Démarrer un projet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>

          {/* ── Burger ───────────────────────────── */}
          <button
            className={`wt-burger${open ? ' wt-burger--open' : ''}`}
            aria-label={open ? 'Fermer' : 'Menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span/><span/><span/>
          </button>
        </div>
      </header>

      {/* ── Drawer mobile ────────────────────────── */}
      <div className={`wt-drawer${open ? ' wt-drawer--open' : ''}`} aria-hidden={!open}>
        <div className="wt-drawer__backdrop" onClick={() => setOpen(false)} />
        <nav className="wt-drawer__panel" aria-label="Menu mobile">
          <div className="wt-drawer__logo">
            <img src={logo} alt="WinTech" className="wt-brand__img" style={{ height: '38px' }} />
          </div>
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`wt-drawer__link${location.pathname === path ? ' wt-drawer__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <div className="wt-drawer__cta">
            <Link to="/contact" className="btn btn-primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
              Démarrer un projet
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
