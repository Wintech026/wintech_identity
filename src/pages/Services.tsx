import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import design from '../assets/design.jpg';

const services = [
  {
    number: '01',
    title: 'Applications web',
    description:
      'Des plateformes métier, espaces clients et outils de gestion conçus pour simplifier vos opérations et accompagner votre croissance.',
    tags: ['React', 'Laravel', 'API REST'],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14h4M8 17h8" />
      </>
    ),
  },
  {
    number: '02',
    title: 'Applications mobiles',
    description:
      'Des applications intuitives et performantes pour Android et iOS, pensées pour vos utilisateurs et adaptées à leurs habitudes.',
    tags: ['Flutter', 'Android', 'iOS'],
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M10 18h4" />
      </>
    ),
  },
  {
    number: '03',
    title: 'Sites web & e-commerce',
    description:
      'Une présence digitale crédible, rapide et responsive pour présenter votre activité, attirer vos clients et vendre en ligne.',
    tags: ['Site vitrine', 'Boutique', 'SEO'],
    icon: (
      <>
        <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
        <path d="M2.5 8.5h19M7 13h10M7 16h6" />
      </>
    ),
  },
  {
    number: '04',
    title: 'Paiements digitaux',
    description:
      'Facilitez les transactions de vos clients grâce à l’intégration de solutions de paiement sécurisées dans vos plateformes.',
    tags: ['FedaPay', 'KKiaPay', 'Mobile Money'],
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4" />
      </>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Échange & cadrage',
    description:
      'Nous comprenons votre activité, vos objectifs et les besoins de vos utilisateurs.',
  },
  {
    number: '02',
    title: 'Conception',
    description:
      'Nous définissons ensemble les fonctionnalités, les parcours et l’expérience de votre solution.',
  },
  {
    number: '03',
    title: 'Développement',
    description:
      'Nous construisons votre projet progressivement, avec des validations régulières.',
  },
  {
    number: '04',
    title: 'Mise en ligne & suivi',
    description:
      'Nous vous accompagnons au lancement et restons disponibles pour faire évoluer votre solution.',
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '.services-page .reveal'
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="services-page">
      <style>{`
        .services-page {
          --green: #00c896;
          --ink: #142033;
          --muted: #687588;
          --line: #e7edf0;
          color: var(--ink);
          background: #fff;
          overflow: hidden;
        }

        .services-page * {
          box-sizing: border-box;
        }

        .services-page a {
          text-decoration: none;
        }

        .services-page svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .sp-wrap {
          width: min(1160px, calc(100% - 48px));
          margin: auto;
        }

        .sp-section {
          padding: 92px 0;
        }

        .sp-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #657286;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .sp-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--green);
        }

        /* HERO */

        .sp-hero {
          position: relative;
          padding: 86px 0 65px;
          background: #fff;
        }

        .sp-hero::after {
          content: "";
          position: absolute;
          width: 480px;
          height: 480px;
          right: -170px;
          top: -240px;
          border-radius: 50%;
          background: radial-gradient(circle, #d9fff2 0%, transparent 70%);
          pointer-events: none;
        }

        .sp-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .sp-hero h1 {
          font-size: clamp(42px, 5.4vw, 68px);
          line-height: 1.08;
          letter-spacing: -.055em;
          margin: 24px 0 20px;
          font-weight: 780;
        }

        .sp-hero h1 span,
        .sp-highlight {
          color: #00a97c;
        }

        .sp-lede {
          max-width: 540px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .sp-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .sp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 19px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          transition: .2s;
        }

        .sp-btn:hover {
          transform: translateY(-2px);
        }

        .sp-btn-primary {
          background: var(--green);
          color: #09251e;
        }

        .sp-btn-primary:hover {
          background: #24d9a9;
        }

        .sp-btn-outline {
          border: 1px solid #dfe6eb;
          color: var(--ink);
        }

        .sp-btn-outline:hover {
          border-color: var(--green);
        }

        .sp-note {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #758195;
          font-size: 12px;
          margin-top: 26px;
        }

        .sp-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 5px #00c89620;
        }

        /* ILLUSTRATION DIGITALE */

        .sp-visual {
          position: relative;
          padding: 16px 10px 25px 20px;
        }

        .sp-mockup {
          position: relative;
          background: linear-gradient(140deg, #f4fffb, #eef4f8);
          border: 1px solid #e5ecef;
          border-radius: 18px;
          min-height: 390px;
          padding: 34px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .sp-window {
          width: 100%;
          max-width: 430px;
          background: white;
          border: 1px solid #e5eaf0;
          border-radius: 13px;
          padding: 19px;
          box-shadow: 0 22px 60px #14203316;
        }

        .sp-window-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid #edf0f3;
        }

        .sp-logo-mark {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: var(--green);
          display: grid;
          place-items: center;
          font-weight: 900;
          color: #09251e;
        }

        .sp-window-dots {
          color: #9aa5b3;
          letter-spacing: 3px;
        }

        .sp-window-title {
          font-size: 13px;
          font-weight: 750;
          margin: 19px 0 13px;
        }

        .sp-online {
          float: right;
          color: #009d73;
          background: #e9fff6;
          border-radius: 5px;
          padding: 5px 7px;
          font-size: 9px;
        }

        .sp-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .sp-metric {
          background: #f7f9fa;
          border-radius: 8px;
          padding: 12px;
        }

        .sp-metric small,
        .sp-metric strong,
        .sp-metric em {
          display: block;
        }

        .sp-metric small {
          font-size: 10px;
          color: #7a8797;
        }

        .sp-metric strong {
          font-size: 25px;
          margin: 7px 0;
        }

        .sp-metric em {
          font-size: 10px;
          color: #009d73;
          font-style: normal;
        }

        .sp-chart {
          border: 1px solid #edf0f3;
          border-radius: 8px;
          margin-top: 12px;
          padding: 13px;
        }

        .sp-chart-title {
          font-size: 10px;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
        }

        .sp-chart-title small {
          font-weight: 400;
          color: #8792a1;
        }

        .sp-bars {
          height: 83px;
          display: flex;
          align-items: end;
          gap: 9px;
          padding: 12px 4px 0;
        }

        .sp-bars i {
          display: block;
          flex: 1;
          height: 35%;
          border-radius: 4px 4px 0 0;
          background: #bdf3e2;
        }

        .sp-bars i:nth-child(2) { height: 58%; }
        .sp-bars i:nth-child(3) { height: 46%; }
        .sp-bars i:nth-child(4) { height: 76%; background: var(--green); }
        .sp-bars i:nth-child(5) { height: 55%; }
        .sp-bars i:nth-child(6) { height: 90%; background: var(--green); }
        .sp-bars i:nth-child(7) { height: 68%; }

        .sp-float {
          position: absolute;
          left: 0;
          bottom: 0;
          background: #fff;
          border: 1px solid #edf0f3;
          box-shadow: 0 12px 35px #14203314;
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 12px;
          font-weight: 700;
        }

        .sp-float span {
          color: #009d73;
          margin-right: 7px;
        }

        /* TITRES */

        .sp-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 40px;
          margin-bottom: 38px;
        }

        .sp-heading h2 {
          font-size: clamp(31px, 3.8vw, 46px);
          line-height: 1.16;
          letter-spacing: -.045em;
          margin: 18px 0 0;
        }

        /* SERVICES */

        .sp-services {
          background: #f7f9fa;
        }

        .sp-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .sp-card {
          background: #fff;
          border: 1px solid #e8edf0;
          border-radius: 12px;
          padding: 24px 21px;
          min-height: 325px;
          display: flex;
          flex-direction: column;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .sp-card:hover {
          transform: translateY(-5px);
          border-color: #a9ecd8;
          box-shadow: 0 16px 38px #1420330c;
        }

        .sp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 23px;
        }

        .sp-icon {
          width: 46px;
          height: 46px;
          border-radius: 11px;
          background: #e8fff6;
          color: #009d73;
          display: grid;
          place-items: center;
        }

        .sp-icon svg {
          width: 23px;
          height: 23px;
        }

        .sp-number {
          font-size: 11px;
          color: #a0aaba;
          font-weight: 750;
        }

        .sp-card h3 {
          font-size: 17px;
          margin: 0 0 11px;
          letter-spacing: -.02em;
        }

        .sp-card p {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.8;
          margin: 0;
        }

        .sp-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-top: 17px;
        }

        .sp-tags span {
          font-size: 9px;
          color: #667386;
          background: #f2f5f6;
          padding: 6px 7px;
          border-radius: 4px;
        }

        .sp-card-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 20px;
          color: #008e69;
          font-size: 11px;
          font-weight: 750;
        }

        .sp-card-link svg {
          width: 16px;
          height: 16px;
        }

        /* DESIGN */

        .sp-design-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 85px;
          align-items: center;
        }

        .sp-design-image {
          position: relative;
          padding: 0 0 20px 20px;
        }

        .sp-design-image::before {
          content: "";
          position: absolute;
          z-index: 0;
          left: 0;
          bottom: 0;
          width: 68%;
          height: 65%;
          background: #e2fff5;
          border-radius: 13px;
        }

        .sp-design-image img {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 13px;
          box-shadow: 0 18px 50px #14203318;
        }

        .sp-image-label {
          position: absolute;
          z-index: 2;
          right: -12px;
          bottom: 0;
          background: #fff;
          border: 1px solid #e6ecef;
          border-radius: 8px;
          padding: 13px 15px;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 10px 30px #14203312;
        }

        .sp-image-label span {
          color: #00a97c;
          margin-right: 7px;
        }

        .sp-design-copy h2 {
          font-size: clamp(32px, 3.7vw, 45px);
          line-height: 1.16;
          letter-spacing: -.045em;
          margin: 18px 0;
        }

        .sp-design-copy > p {
          font-size: 14px;
          line-height: 1.9;
          color: var(--muted);
        }

        .sp-benefits {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: grid;
          gap: 16px;
        }

        .sp-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .sp-check {
          width: 23px;
          height: 23px;
          flex: 0 0 23px;
          border-radius: 50%;
          background: #e8fff6;
          color: #009d73;
          display: grid;
          place-items: center;
          font-size: 12px;
          font-weight: 800;
        }

        .sp-benefits strong,
        .sp-benefits small {
          display: block;
        }

        .sp-benefits strong {
          font-size: 13px;
        }

        .sp-benefits small {
          font-size: 11px;
          color: var(--muted);
          margin-top: 4px;
          line-height: 1.6;
        }

        /* MÉTHODE */

        .sp-process {
          background: #f7f9fa;
        }

        .sp-process-head {
          max-width: 640px;
        }

        .sp-process-head h2 {
          font-size: clamp(34px, 4vw, 49px);
          line-height: 1.15;
          letter-spacing: -.045em;
          margin: 18px 0;
        }

        .sp-process-head p {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.8;
        }

        .sp-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 55px;
        }

        .sp-step {
          position: relative;
          border-top: 1px solid #dfe6e9;
          padding-top: 22px;
        }

        .sp-step::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 0;
          width: 32px;
          height: 3px;
          background: var(--green);
        }

        .sp-step-number {
          font-size: 12px;
          color: #009d73;
          font-weight: 800;
        }

        .sp-step h3 {
          font-size: 16px;
          margin: 20px 0 10px;
        }

        .sp-step p {
          font-size: 12px;
          line-height: 1.8;
          color: var(--muted);
          margin: 0;
        }

        /* CONTACT */

        .sp-cta {
          padding: 80px 0 95px;
        }

        .sp-cta-panel {
          position: relative;
          overflow: hidden;
          background: #f1fbf7;
          border: 1px solid #ddf4eb;
          border-radius: 16px;
          padding: 52px 58px;
          display: grid;
          grid-template-columns: 1.4fr .6fr;
          gap: 35px;
        }

        .sp-cta-panel::after {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          right: 15%;
          top: -230px;
          border-radius: 50%;
          background: radial-gradient(circle, #b9f5df, transparent 70%);
        }

        .sp-cta-content,
        .sp-cta-side {
          position: relative;
          z-index: 1;
        }

        .sp-cta-content h2 {
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.12;
          letter-spacing: -.045em;
          margin: 18px 0;
        }

        .sp-cta-content p {
          max-width: 480px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
          margin: 0 0 24px;
        }

        .sp-cta-side {
          border-left: 1px solid #d7e9e2;
          padding-left: 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .sp-cta-side span {
          font-size: 11px;
          font-weight: 850;
          letter-spacing: .2em;
          color: #009d73;
        }

        .sp-cta-side strong {
          font-size: 29px;
          line-height: 1.15;
          margin: 15px 0;
          letter-spacing: -.04em;
        }

        .sp-cta-side small {
          font-size: 11px;
          line-height: 1.7;
          color: var(--muted);
        }

        /* ANIMATIONS */

        .services-page .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity .65s ease, transform .65s ease;
        }

        .services-page .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .services-page .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .services-page * {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }

        /* TABLETTES */

        @media (max-width: 1000px) {
          .sp-hero-grid {
            gap: 35px;
          }

          .sp-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .sp-card {
            min-height: 290px;
          }

          .sp-design-grid {
            gap: 48px;
          }
        }

        /* MOBILES */

        @media (max-width: 720px) {
          .sp-wrap {
            width: calc(100% - 36px);
          }

          .sp-section {
            padding: 68px 0;
          }

          .sp-hero {
            padding: 60px 0 45px;
          }

          .sp-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .sp-hero h1 {
            font-size: clamp(39px, 10vw, 56px);
          }

          .sp-lede {
            font-size: 14px;
          }

          .sp-actions {
            flex-direction: column;
          }

          .sp-btn {
            width: 100%;
          }

          .sp-visual {
            max-width: 500px;
            width: 100%;
            margin: auto;
            padding: 8px 0 22px 10px;
          }

          .sp-mockup {
            min-height: 320px;
            padding: 20px 14px;
          }

          .sp-heading {
            display: block;
            margin-bottom: 27px;
          }

          .sp-heading h2 {
            font-size: 34px;
          }

          .sp-cards {
            grid-template-columns: 1fr;
          }

          .sp-card {
            min-height: 0;
          }

          .sp-design-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .sp-design-image img {
            height: 310px;
          }

          .sp-image-label {
            right: -3px;
          }

          .sp-design-copy h2 {
            font-size: 35px;
          }

          .sp-steps {
            grid-template-columns: 1fr 1fr;
            gap: 30px 18px;
            margin-top: 40px;
          }

          .sp-step h3 {
            font-size: 14px;
          }

          .sp-step p {
            font-size: 11px;
          }

          .sp-cta {
            padding: 60px 0 70px;
          }

          .sp-cta-panel {
            grid-template-columns: 1fr;
            padding: 32px 23px;
            gap: 28px;
          }

          .sp-cta-content h2 {
            font-size: 37px;
          }

          .sp-cta-side {
            border-left: 0;
            border-top: 1px solid #d7e9e2;
            padding: 23px 0 0;
          }

          .sp-cta-side strong {
            font-size: 25px;
          }
        }

        @media (max-width: 390px) {
          .sp-steps {
            grid-template-columns: 1fr;
          }

          .sp-design-image img {
            height: 270px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="sp-hero">
        <div className="sp-wrap">
          <div className="sp-hero-grid">
            <div>
              <span className="sp-kicker">Nos services</span>

              <h1>
                Vos idées méritent
                <br />
                <span>une solution digitale</span>
                <br />
                à leur hauteur.
              </h1>

              <p className="sp-lede">
                WinTech transforme vos besoins en outils numériques utiles,
                fiables et simples à utiliser. Du conseil à la mise en ligne,
                nous construisons avec vous.
              </p>

              <div className="sp-actions">
                <Link to="/contact" className="sp-btn sp-btn-primary">
                  Parlons de votre projet <Arrow />
                </Link>

                <a href="#expertises" className="sp-btn sp-btn-outline">
                  Découvrir nos expertises ↓
                </a>
              </div>

              <div className="sp-note">
                <span className="sp-dot" />
                Des solutions pensées pour votre réalité.
              </div>
            </div>

            <div className="sp-visual">
              <div className="sp-mockup">
                <div className="sp-window">
                  <div className="sp-window-head">
                    <span className="sp-logo-mark">W</span>
                    <span className="sp-window-dots">•••</span>
                  </div>

                  <div className="sp-window-title">
                    Vue d'ensemble
                    <span className="sp-online">● En ligne</span>
                  </div>

                  <div className="sp-metrics">
                    <div className="sp-metric">
                      <small>Projets actifs</small>
                      <strong>12</strong>
                      <em>En cours</em>
                    </div>

                    <div className="sp-metric">
                      <small>Performance</small>
                      <strong>98%</strong>
                      <em>Très bien</em>
                    </div>
                  </div>

                  <div className="sp-chart">
                    <div className="sp-chart-title">
                      Activité digitale
                      <small>Cette semaine</small>
                    </div>

                    <div className="sp-bars">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>

              <div className="sp-float">
                <span>✦</span>
                Des solutions sur mesure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS EXPERTISES */}
      <section className="sp-section sp-services" id="expertises">
        <div className="sp-wrap">
          <div className="sp-heading reveal">
            <div>
              <span className="sp-kicker">Nos expertises</span>
              <h2>
                Des services pour
                <span className="sp-highlight"> faire la différence.</span>
              </h2>
            </div>
          </div>

          <div className="sp-cards">
            {services.map(service => (
              <article className="sp-card reveal" key={service.number}>
                <div className="sp-card-top">
                  <span className="sp-icon">
                    <svg viewBox="0 0 24 24">{service.icon}</svg>
                  </span>

                  <span className="sp-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="sp-tags">
                  {service.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link to="/contact" className="sp-card-link">
                  Discuter de ce service <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN ET EXPÉRIENCE */}
      <section className="sp-section">
        <div className="sp-wrap sp-design-grid reveal">
          <div className="sp-design-image">
            <img
              src={design}
              alt="Exemple de conception d'interface et d'expérience utilisateur"
            />

            <div className="sp-image-label">
              <span>✦</span>
              Design utile. Expérience fluide.
            </div>
          </div>

          <div className="sp-design-copy">
            <span className="sp-kicker">
              Design & expérience utilisateur
            </span>

            <h2>
              Le beau compte.
              <br />
              <span className="sp-highlight">
                Le simple fait la différence.
              </span>
            </h2>

            <p>
              Une bonne solution digitale doit être agréable à regarder,
              mais surtout facile à comprendre et à utiliser. Nous plaçons
              vos utilisateurs au cœur de chaque interface.
            </p>

            <ul className="sp-benefits">
              <li>
                <span className="sp-check">✓</span>
                <div>
                  <strong>Clarté & simplicité</strong>
                  <small>
                    Des parcours intuitifs, sans complexité inutile.
                  </small>
                </div>
              </li>

              <li>
                <span className="sp-check">✓</span>
                <div>
                  <strong>Mobile-first</strong>
                  <small>
                    Une expérience fluide sur téléphone, tablette et ordinateur.
                  </small>
                </div>
              </li>

              <li>
                <span className="sp-check">✓</span>
                <div>
                  <strong>Cohérence visuelle</strong>
                  <small>
                    Une interface alignée sur votre identité et vos objectifs.
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* NOTRE MÉTHODE */}
      <section className="sp-section sp-process">
        <div className="sp-wrap">
          <div className="sp-process-head reveal">
            <span className="sp-kicker">Notre méthode</span>

            <h2>
              Un projet bien pensé.
              <br />
              <span className="sp-highlight">
                Un résultat maîtrisé.
              </span>
            </h2>

            <p>
              Vous gardez une vision claire de votre projet à chaque étape.
            </p>
          </div>

          <div className="sp-steps">
            {steps.map(step => (
              <article className="sp-step reveal" key={step.number}>
                <span className="sp-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sp-cta">
        <div className="sp-wrap">
          <div className="sp-cta-panel reveal">
            <div className="sp-cta-content">
              <span className="sp-kicker">Et si on en parlait ?</span>

              <h2>
                Votre prochain projet
                <br />
                commence <span className="sp-highlight">ici.</span>
              </h2>

              <p>
                Partagez-nous votre idée. Nous vous aiderons à définir
                la meilleure façon de la concrétiser.
              </p>

              <Link to="/contact" className="sp-btn sp-btn-primary">
                Démarrer une conversation <Arrow />
              </Link>
            </div>

            <div className="sp-cta-side">
              <span>WINTECH</span>
              <strong>
                Digital
                <br />
                made useful.
              </strong>
              <small>
                Concevons quelque chose
                <br />
                qui vous ressemble.
              </small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}