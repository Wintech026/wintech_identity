import React, { useEffect, useRef, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*  Données                                                                    */
/* -------------------------------------------------------------------------- */

type Stat =
  | { kind: 'count'; to: number; prefix?: string; suffix?: string; label: string }
  | { kind: 'text'; text: string; label: string };

const STATS: Stat[] = [
  { kind: 'count', to: 98, suffix: '%', label: 'Taux de satisfaction client' },
  { kind: 'text', text: '24/7', label: 'Support & supervision réseau' },
  { kind: 'count', to: 50, prefix: '+', label: 'Infrastructures déployées' },
];

const EXPERTISES = [
  {
    icon: 'network',
    title: 'Réseaux & infrastructures',
    text: 'Conception, déploiement et supervision de réseaux fiables, sécurisés et évolutifs, dimensionnés pour la réalité de votre activité.',
  },
  {
    icon: 'code',
    title: 'Développement & systèmes intelligents',
    text: 'Applications sur mesure, automatisation et traitement de données pour transformer vos processus en avantage concurrentiel.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & hébergement',
    text: 'Migration, déploiement et exploitation d’environnements cloud performants, maîtrisés en coûts comme en sécurité.',
  },
  {
    icon: 'layout',
    title: 'Design & expérience utilisateur',
    text: 'Des interfaces intuitives, accessibles et pensées mobile-first, qui rendent vos outils agréables à utiliser au quotidien.',
  },
] as const;

const VALUES = [
  {
    tag: '01 / Architecture',
    icon: 'activity',
    title: 'Performance absolue',
    text: 'Nous concevons des architectures hautement disponibles. Aucune concession sur la vitesse, la redondance et la stabilité de vos applications.',
  },
  {
    tag: '02 / Ingénierie',
    icon: 'layers',
    title: 'Innovation durable',
    text: 'De la donnée complexe à l’intégration réseau, nos équipes bâtissent des pipelines résilients, prêts à absorber la croissance de demain.',
  },
  {
    tag: '03 / Philosophie',
    icon: 'eye',
    title: 'Transparence totale',
    text: 'Une méthodologie agile, des tableaux de bord ouverts en temps réel et un accompagnement de proximité pour piloter vos projets en confiance.',
  },
] as const;

const STEPS = [
  {
    title: 'Cadrage',
    text: 'Nous analysons vos besoins, vos contraintes et vos objectifs pour définir une feuille de route réaliste.',
  },
  {
    title: 'Conception',
    text: 'Architecture, maquettes et choix techniques sont validés avec vous avant tout développement.',
  },
  {
    title: 'Déploiement',
    text: 'Mise en production progressive, recette complète et formation de vos équipes.',
  },
  {
    title: 'Supervision',
    text: 'Suivi continu, support réactif et améliorations régulières pour garder une longueur d’avance.',
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Icônes (SVG inline, aucune dépendance)                                     */
/* -------------------------------------------------------------------------- */

const Svg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  />
);

const ICONS: Record<string, React.ReactNode> = {
  network: (
    <Svg>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5v4M12 11.5l-5.5 5.5M12 11.5l5.5 5.5" />
    </Svg>
  ),
  code: (
    <Svg>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </Svg>
  ),
  cloud: (
    <Svg>
      <path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A6 6 0 0 1 19.6 11.6 3.7 3.7 0 0 1 17.5 19z" />
    </Svg>
  ),
  layout: (
    <Svg>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M9 21V9" />
    </Svg>
  ),
  activity: (
    <Svg>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </Svg>
  ),
  layers: (
    <Svg>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </Svg>
  ),
  eye: (
    <Svg>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  ),
  arrow: (
    <Svg strokeWidth={2.25}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  ),
  check: (
    <Svg strokeWidth={2.25}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Utilitaires d'animation (respectent prefers-reduced-motion)                */
/* -------------------------------------------------------------------------- */

const rise = (ms: number) => ({ '--d': `${ms}ms` } as React.CSSProperties);

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ap-reveal${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CountUp: React.FC<{ to: number; prefix?: string; suffix?: string }> = ({
  to,
  prefix = '',
  suffix = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(to * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref} aria-label={`${prefix}${to}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
};

/* -------------------------------------------------------------------------- */
/*  Styles                                                                     */
/* -------------------------------------------------------------------------- */

const STYLES = `
.ap-page {
  --ink: #0b0f0e;
  --muted: #52605c;
  --line: #e6eae8;
  --soft: #f6f8f7;
  --accent: #00f5a0;
  --accent-ink: #00704a;
  background: #fff;
  color: var(--ink);
  font-family: 'Lexend', system-ui, -apple-system, 'Segoe UI', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
.ap-page *, .ap-page *::before, .ap-page *::after { box-sizing: border-box; }
.ap-page h1, .ap-page h2, .ap-page h3, .ap-page p { margin: 0; }
.ap-container { max-width: 1200px; margin: 0 auto; padding-inline: 24px; position: relative; }

/* Accessibilité : focus clavier visible */
.ap-page a:focus-visible {
  outline: 3px solid var(--accent-ink);
  outline-offset: 3px;
}
.ap-dark a:focus-visible, .ap-cta-box a:focus-visible { outline-color: var(--accent); }

/* ---------- Animations ---------- */
@keyframes ap-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
@keyframes ap-glow { 0%,100% { opacity: .55; transform: translateX(-50%) scale(1); } 50% { opacity: .9; transform: translateX(-50%) scale(1.08); } }
.ap-rise { opacity: 0; animation: ap-rise .8s cubic-bezier(.16,1,.3,1) forwards; animation-delay: var(--d, 0ms); }
.ap-reveal { height: 100%; opacity: 0; transform: translateY(28px);
  transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
.ap-reveal.is-visible { opacity: 1; transform: none; }

/* ---------- Boutons ---------- */
.ap-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  padding: 15px 30px; border-radius: 999px; font-weight: 600; font-size: .98rem;
  text-decoration: none; border: 1px solid transparent;
  transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease, border-color .25s ease;
}
.ap-btn svg { width: 18px; height: 18px; transition: transform .25s ease; }
.ap-btn:hover svg { transform: translateX(3px); }
.ap-btn-primary { background: var(--ink); color: #fff; box-shadow: 0 10px 30px rgba(11,15,14,.14); }
.ap-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(0,245,160,.25); }
.ap-btn-ghost { background: #fff; color: var(--ink); border-color: #cfd8d4; }
.ap-btn-ghost:hover { border-color: var(--ink); transform: translateY(-2px); }
.ap-btn-accent { background: var(--accent); color: var(--ink); box-shadow: 0 12px 36px rgba(0,245,160,.28); }
.ap-btn-accent:hover { transform: translateY(-2px); box-shadow: 0 18px 48px rgba(0,245,160,.4); }

/* ---------- Hero ---------- */
.ap-hero { position: relative; isolation: isolate; text-align: center;
  padding: clamp(128px, 14vw, 168px) 0 clamp(56px, 7vw, 88px); }
.ap-hero::before {
  content: ''; position: absolute; inset: 0; z-index: -1;
  background-image:
    linear-gradient(rgba(11,15,14,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11,15,14,.045) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse 70% 65% at 50% 25%, #000 25%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 65% at 50% 25%, #000 25%, transparent 75%);
}
.ap-hero::after {
  content: ''; position: absolute; z-index: -1; top: 40px; left: 50%;
  width: 760px; max-width: 100%; height: 420px; transform: translateX(-50%);
  background: radial-gradient(closest-side, rgba(0,245,160,.2), transparent);
  animation: ap-glow 9s ease-in-out infinite;
}
.ap-badge {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 7px 16px; border-radius: 999px; background: #fff; border: 1px solid var(--line);
  font-size: .76rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--muted);
  box-shadow: 0 2px 10px rgba(11,15,14,.04);
}
.ap-badge i { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 4px rgba(0,245,160,.2); }
.ap-hero h1 {
  max-width: 980px; margin: 28px auto 24px;
  font-size: clamp(2.5rem, 5.6vw, 4.4rem); font-weight: 700; letter-spacing: -.035em; line-height: 1.07;
}
.ap-hero h1 span { color: #9aa5a1; }
.ap-lead { max-width: 720px; margin: 0 auto; color: var(--muted); font-size: clamp(1.05rem, 1.8vw, 1.25rem); line-height: 1.65; }
.ap-actions { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 40px; }

/* ---------- Statistiques ---------- */
.ap-stats {
  margin-top: clamp(48px, 6vw, 80px);
  display: grid; grid-template-columns: repeat(3, 1fr);
  background: #fff; border: 1px solid var(--line); border-radius: 22px;
  box-shadow: 0 24px 60px rgba(11,15,14,.07); overflow: hidden;
}
.ap-stat { padding: 38px 24px; text-align: center; }
.ap-stat + .ap-stat { border-left: 1px solid var(--line); }
.ap-stat-value { font-size: clamp(2.5rem, 4.6vw, 3.6rem); font-weight: 700; letter-spacing: -.04em; line-height: 1; }
.ap-stat-label { margin-top: 12px; font-size: .92rem; color: var(--muted); }

/* ---------- Sections ---------- */
.ap-section { padding: clamp(72px, 9vw, 120px) 0; position: relative; }
.ap-soft { background: var(--soft); border-block: 1px solid var(--line); }
.ap-head { max-width: 660px; margin-bottom: clamp(40px, 5vw, 64px); }
.ap-eyebrow {
  display: inline-flex; align-items: center; gap: 10px; margin-bottom: 18px;
  font-size: .76rem; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: var(--accent-ink);
}
.ap-eyebrow::before { content: ''; width: 24px; height: 2px; background: currentColor; border-radius: 2px; }
.ap-head h2 { font-size: clamp(1.9rem, 3.6vw, 2.8rem); font-weight: 700; letter-spacing: -.03em; line-height: 1.12; }
.ap-head p { margin-top: 16px; color: var(--muted); font-size: 1.08rem; line-height: 1.65; }

/* ---------- Expertises ---------- */
.ap-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.ap-card {
  height: 100%; background: #fff; border: 1px solid var(--line); border-radius: 22px; padding: 38px;
  transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;
}
.ap-card:hover { border-color: #cdd7d2; box-shadow: 0 26px 52px rgba(11,15,14,.08); transform: translateY(-4px); }
.ap-icon { width: 54px; height: 54px; border-radius: 15px; display: grid; place-items: center;
  background: var(--ink); color: var(--accent); margin-bottom: 26px; }
.ap-icon svg { width: 25px; height: 25px; }
.ap-card h3 { font-size: 1.3rem; font-weight: 600; letter-spacing: -.02em; margin-bottom: 12px; }
.ap-card p { color: var(--muted); line-height: 1.7; font-size: 1rem; }

/* ---------- Valeurs (section sombre) ---------- */
.ap-dark { background: var(--ink); color: #fff; overflow: hidden; }
.ap-dark::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, #000 20%, transparent 80%);
  mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, #000 20%, transparent 80%);
}
.ap-dark .ap-eyebrow { color: var(--accent); }
.ap-dark .ap-head p { color: rgba(255,255,255,.66); }
.ap-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.ap-value {
  height: 100%; position: relative; overflow: hidden; padding: 36px;
  border: 1px solid rgba(255,255,255,.1); border-radius: 22px; background: rgba(255,255,255,.03);
  transition: border-color .35s ease, background-color .35s ease, transform .35s ease;
}
.ap-value::before {
  content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 3px;
  background: linear-gradient(90deg, var(--accent), transparent);
  transform: scaleX(0); transform-origin: left; transition: transform .5s cubic-bezier(.16,1,.3,1);
}
.ap-value:hover { border-color: rgba(0,245,160,.45); background: rgba(255,255,255,.055); transform: translateY(-4px); }
.ap-value:hover::before { transform: scaleX(1); }
.ap-value-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 34px; }
.ap-value-tag { font-size: .74rem; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); }
.ap-value-top svg { width: 28px; height: 28px; color: var(--accent); }
.ap-value h3 { font-size: 1.45rem; font-weight: 600; letter-spacing: -.02em; margin-bottom: 14px; }
.ap-value p { color: rgba(255,255,255,.68); line-height: 1.7; font-size: 1rem; }

/* ---------- Méthode ---------- */
.ap-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.ap-step { position: relative; height: 100%; padding-top: 30px; border-top: 2px solid var(--line); }
.ap-step::before { content: ''; position: absolute; top: -2px; left: 0; width: 56px; height: 2px; background: var(--accent-ink); }
.ap-step-num { font-size: .8rem; font-weight: 600; letter-spacing: .16em; color: var(--accent-ink); margin-bottom: 14px; }
.ap-step h3 { font-size: 1.2rem; font-weight: 600; letter-spacing: -.015em; margin-bottom: 10px; }
.ap-step p { color: var(--muted); line-height: 1.65; font-size: .98rem; }

/* ---------- Appel à l'action ---------- */
.ap-cta { padding: 0 0 clamp(72px, 9vw, 120px); }
.ap-cta-box {
  position: relative; isolation: isolate; overflow: hidden; text-align: center;
  background: var(--ink); color: #fff; border-radius: 30px;
  padding: clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px);
}
.ap-cta-box::before {
  content: ''; position: absolute; z-index: -1; left: 50%; top: -180px; width: 720px; max-width: 100%; height: 420px;
  transform: translateX(-50%); background: radial-gradient(closest-side, rgba(0,245,160,.28), transparent);
}
.ap-cta-box::after {
  content: ''; position: absolute; inset: 0; z-index: -1;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 0%, #000 20%, transparent 80%);
  mask-image: radial-gradient(ellipse 70% 80% at 50% 0%, #000 20%, transparent 80%);
}
.ap-cta-box h2 { font-size: clamp(2rem, 4.2vw, 3.2rem); font-weight: 700; letter-spacing: -.035em; line-height: 1.1; max-width: 760px; margin: 0 auto 20px; }
.ap-cta-box p { max-width: 560px; margin: 0 auto 38px; color: rgba(255,255,255,.7); font-size: 1.08rem; line-height: 1.65; }
.ap-checks { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 28px; margin: 32px 0 0; padding: 0; list-style: none;
  color: rgba(255,255,255,.72); font-size: .92rem; }
.ap-checks li { display: inline-flex; align-items: center; gap: 8px; }
.ap-checks svg { width: 16px; height: 16px; color: var(--accent); }

/* ---------- Responsive ---------- */
@media (max-width: 1000px) {
  .ap-grid-3 { grid-template-columns: 1fr; }
  .ap-steps { grid-template-columns: repeat(2, 1fr); gap: 36px 28px; }
}
@media (max-width: 820px) {
  .ap-grid-2 { grid-template-columns: 1fr; }
  .ap-stats { grid-template-columns: 1fr; }
  .ap-stat + .ap-stat { border-left: 0; border-top: 1px solid var(--line); }
  .ap-card, .ap-value { padding: 30px; }
}
@media (max-width: 560px) {
  .ap-steps { grid-template-columns: 1fr; }
  .ap-actions .ap-btn, .ap-cta-box .ap-btn { width: 100%; }
}

/* ---------- Mouvement réduit ---------- */
@media (prefers-reduced-motion: reduce) {
  .ap-rise { opacity: 1; animation: none; }
  .ap-reveal { opacity: 1; transform: none; transition: none; }
  .ap-hero::after { animation: none; }
  .ap-card, .ap-value, .ap-btn, .ap-btn svg, .ap-value::before { transition: none; }
}
`;

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const APropos: React.FC = () => {
  return (
    <>
      <style>{STYLES}</style>

      <main className="ap-page">
        {/* ============================ HERO ============================ */}
        <section className="ap-hero" aria-labelledby="ap-hero-title">
          <div className="ap-container">
            <div className="ap-rise" style={rise(0)}>
              <span className="ap-badge">
                <i aria-hidden="true" />
                Notre manifeste
              </span>
            </div>

            <h1
              id="ap-hero-title"
              className="ap-rise"
              style={rise(100)}
            >
              Bâtir l’infrastructure de vos ambitions <span>numériques.</span>
            </h1>

            <p className="ap-lead ap-rise" style={rise(200)}>
              WinTech propulse la transformation technologique à travers des solutions
              réseaux robustes, le développement de systèmes intelligents et une
              expertise cloud de pointe.
            </p>

            <div className="ap-actions ap-rise" style={rise(300)}>
              <a href="/contact" className="ap-btn ap-btn-primary">
                Démarrer un projet
                {ICONS.arrow}
              </a>
              <a href="#valeurs" className="ap-btn ap-btn-ghost">
                Découvrir notre approche
              </a>
            </div>

            <div
              className="ap-stats ap-rise"
              style={rise(420)}
              role="list"
              aria-label="WinTech en chiffres"
            >
              {STATS.map((stat) => (
                <div className="ap-stat" role="listitem" key={stat.label}>
                  <div className="ap-stat-value">
                    {stat.kind === 'count' ? (
                      <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                    ) : (
                      stat.text
                    )}
                  </div>
                  <div className="ap-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================= EXPERTISES ========================= */}
        <section
          id="expertises"
          className="ap-section ap-soft"
          aria-labelledby="ap-expertises-title"
        >
          <div className="ap-container">
            <Reveal>
              <div className="ap-head">
                <span className="ap-eyebrow">Expertises</span>
                <h2 id="ap-expertises-title">Une seule équipe pour tout votre socle technologique</h2>
                <p>
                  Du réseau à l’interface, nous concevons, développons et exploitons les
                  briques qui font tourner votre activité.
                </p>
              </div>
            </Reveal>

            <div className="ap-grid-2">
              {EXPERTISES.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 120}>
                  <article className="ap-card">
                    <div className="ap-icon">{ICONS[item.icon]}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================== VALEURS ========================== */}
        <section
          id="valeurs"
          className="ap-section ap-dark"
          aria-labelledby="ap-valeurs-title"
        >
          <div className="ap-container">
            <Reveal>
              <div className="ap-head">
                <span className="ap-eyebrow">Nos principes</span>
                <h2 id="ap-valeurs-title">Comment nous redéfinissons les standards</h2>
                <p>Nos principes fondamentaux, appliqués à chacun de vos projets.</p>
              </div>
            </Reveal>

            <div className="ap-grid-3">
              {VALUES.map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <article className="ap-value">
                    <div className="ap-value-top">
                      <span className="ap-value-tag">{item.tag}</span>
                      {ICONS[item.icon]}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================== MÉTHODE ========================== */}
        <section
          id="methode"
          className="ap-section"
          aria-labelledby="ap-methode-title"
        >
          <div className="ap-container">
            <Reveal>
              <div className="ap-head">
                <span className="ap-eyebrow">Notre méthode</span>
                <h2 id="ap-methode-title">Une démarche claire, de l’idée à l’exploitation</h2>
                <p>
                  Chaque projet suit un cadre éprouvé, pour que vous sachiez toujours où
                  nous en sommes et ce qui vient ensuite.
                </p>
              </div>
            </Reveal>

            <ol className="ap-steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {STEPS.map((step, i) => (
                <li key={step.title}>
                  <Reveal delay={i * 100}>
                    <div className="ap-step">
                      <div className="ap-step-num">{String(i + 1).padStart(2, '0')}</div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================= CTA ============================ */}
        <section className="ap-cta" aria-labelledby="ap-cta-title">
          <div className="ap-container">
            <Reveal>
              <div className="ap-cta-box">
                <h2 id="ap-cta-title">Prêt à passer à l’échelle supérieure ?</h2>
                <p>
                  Expliquez-nous vos problématiques réseaux, applicatives ou de
                  traitement de données. Nos experts reviennent vers vous sous 24 h.
                </p>
                <a href="/contact" className="ap-btn ap-btn-accent">
                  Démarrer un projet
                  {ICONS.arrow}
                </a>
                <ul className="ap-checks">
                  <li>
                    {ICONS.check}
                    Réponse sous 24 h
                  </li>
                  <li>
                    {ICONS.check}
                    Support & supervision 24/7
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default APropos;