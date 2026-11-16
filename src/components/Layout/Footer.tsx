import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => (
  <footer className="wt-footer">
    <div className="wrap wt-footer__main">

      {/* ── Brand ──────────────────────────────── */}
      <div className="wt-footer__brand">
        <Link to="/" aria-label="WinTech">
          <img src={logo} alt="WinTech" className="wt-footer__logo" />
        </Link>
        <p className="wt-footer__tagline">Innovation · Développement · Solutions Digitales</p>
        <p className="wt-footer__desc">
          Agence de développement logiciel 100&nbsp;% béninoise. Applications web, mobiles et SaaS conçus pour les entreprises d'Afrique de l'Ouest.
        </p>
        <div className="wt-footer__socials">
          <a href="https://linkedin.com/company/wintech-benin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com/wintech-benin" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a href="https://wa.me/22954753071" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Navigation ─────────────────────────── */}
      <div className="wt-footer__col">
        <h4>Navigation</h4>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">À Propos</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/produits">Produits</Link></li>
          <li><Link to="/equipes">Équipes</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* ── Services ───────────────────────────── */}
      <div className="wt-footer__col">
        <h4>Services</h4>
        <ul>
          <li><Link to="/services">Développement Web</Link></li>
          <li><Link to="/services">Applications Mobiles</Link></li>
          <li><Link to="/services">SaaS sur mesure</Link></li>
          <li><Link to="/services">Sites Vitrines</Link></li>
          <li><Link to="/services">Paiement Mobile Money</Link></li>
          <li><Link to="/services">Design UX/UI</Link></li>
        </ul>
      </div>

      {/* ── Contact ────────────────────────────── */}
      <div className="wt-footer__col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:contact@wintech.company">contact@wintech.company</a></li>
          <li><a href="tel:+229 0154753071">+229 0154753071</a></li>
          <li>
            <span>Gbégamey, Cotonou<br />Atlantique, Bénin</span>
          </li>
        </ul>
      </div>

    </div>

    {/* ── Bottom bar ─────────────────────────── */}
    <div className="wt-footer__bottom">
      <div className="wrap wt-footer__bottom-row">
        <span>© {new Date().getFullYear()} WinTech. Tous droits réservés.</span>
        <div className="wt-footer__legal">
          <a href="/apropos">À propos</a>
          <a href="/mentions">Mentions légales</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
