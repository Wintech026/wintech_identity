import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import winqueue   from '../assets/winqueue.jpeg';
import winstock   from '../assets/winstock.jpeg';
import imgAppDev from '../assets/app-development.png';
import imgDev    from '../assets/development.png';
import imgWeb    from '../assets/web.png';
import winresto  from '../assets/winresto.png';
import imgEquipe from '../assets/equipe.png';
import imgAccomp from '../assets/accompagnement.png';

const Home = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ================================================================
          HERO — dark, code window
          ================================================================ */}
      <section className="hero-pro">
        {/* blobs décoratifs */}
        <div className="mesh">
          <div className="mesh__blob mesh__blob--green" style={{ width: 560, height: 560, top: -200, right: -80, opacity: 0.09 }} />
          <div className="mesh__blob mesh__blob--navy"  style={{ width: 400, height: 400, bottom: -100, left: -80, opacity: 0.25 }} />
        </div>

        <div className="wrap hero-pro__grid">
          {/* ── Copy ─────────────────────────────── */}
          <div className="hero-pro__copy">
            <span className="chip reveal">
              <span className="dot" />
              Agence de développement logiciel · Bénin
            </span>
            <h1 className="h-display hero-pro__title reveal" data-delay="1">
              On construit les outils<br />qui{' '}
              <span className="grad-text">font avancer votre business</span>
            </h1>
            <p className="hero-pro__lede reveal" data-delay="2">
              WinTech est une agence de développement 100&nbsp;% béninoise. Applications web, apps mobiles et SaaS conçus pour les réalités africaines — paiement mobile money natif inclus.
            </p>
            <div className="hero-pro__stats reveal" data-delay="3">
              <div>
                <span className="stat__num">3</span>
                <span className="stat__label">Produits SaaS</span>
              </div>
              <div>
                <span className="stat__num">10+</span>
                <span className="stat__label">Projets livrés</span>
              </div>
              <div>
                <span className="stat__num">100%</span>
                <span className="stat__label">Made in Bénin</span>
              </div>
            </div>
            <div className="hero-pro__actions reveal" data-delay="4">
              <Link className="btn btn-primary btn--lg" to="/produits">
                Découvrir nos produits
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
              <Link className="btn btn-ghost btn--lg" to="/contact">
                Discutons de votre projet
              </Link>
            </div>
          </div>

          {/* ── Code window ──────────────────────── */}
          <div className="hero-pro__visual reveal" data-delay="2">
            <div className="code-window float-anim--slow">
              <div className="code-window__bar">
                <span className="code-dot code-dot--red"/>
                <span className="code-dot code-dot--yellow"/>
                <span className="code-dot code-dot--green"/>
                <span className="code-window__title">wintech-app / src / App.tsx</span>
              </div>
              <div className="code-window__body">
<pre className="code-block"><code>{`import { WinTechClient } from '@wintech/sdk';

// 🚀 Déploiement en 48h garanti
const client = new WinTechClient({
  apiKey: process.env.WINTECH_KEY,
  region: 'bj-west-1',
  payments: ['kkiapay', 'fedapay'],
});

export async function launchApp() {
  const app = await client.deploy({
    name: 'Mon Application PME',
    stack: ['React', 'Laravel', 'Flutter'],
    features: ['auth', 'dashboard', 'api'],
  });

  // ✅ En ligne, sécurisé, scalable
  return { url: app.url, status: 'live' };
}`}</code></pre>
              </div>
              <div className="code-badge float-anim">
                <span className="live-dot"/>
                Déployé · Production
              </div>
              <div className="code-badge code-badge--bottom float-anim--slow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                98% uptime · SLA garanti
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TECH STRIP
          ================================================================ */}
      <section className="tech-strip">
        <div className="wrap">
          <p className="tech-strip__label reveal">Stack maîtrisé par notre équipe</p>
          <div className="tech-strip__row reveal">
            {['React', 'TypeScript', 'Laravel', 'Flutter', 'Node.js', 'PostgreSQL', 'Docker', 'KKiaPay', 'FedaPay', 'Figma'].map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          NOS SERVICES
          ================================================================ */}
      <section className="section home-svc" id="services">
        <div className="wrap">
          {/* En-tête */}
          <div className="home-svc__head reveal">
            <div>
              <span className="eyebrow">Ce qu'on fait</span>
              <h2 className="h-1" style={{ marginTop: 10 }}>
                Du code propre.<br />Des produits qui marchent.
              </h2>
            </div>
            <p className="lede home-svc__lead">
              De la conception au déploiement, nous couvrons tout le cycle de développement avec les meilleures pratiques et les outils adaptés à votre contexte.
            </p>
          </div>

          {/* Grille 4 cartes */}
          <div className="svc-grid4 reveal" style={{ marginTop: 52 }}>

            <article className="svc-card4">
              <div className="svc-card4__icon">
                <img src={imgDev} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
              </div>
              <h3>Applications Web</h3>
              <p>Back-offices, plateformes métier et portails clients. Architecture robuste pensée pour durer.</p>
              <div className="svc-card4__stack">
                <span>React</span><span>Laravel</span><span>API REST</span>
              </div>
            </article>

            <article className="svc-card4">
              <div className="svc-card4__icon">
                <img src={imgAppDev} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
              </div>
              <h3>Applications Mobiles</h3>
              <p>iOS + Android avec Flutter. Une seule codebase, expérience native, offline-first.</p>
              <div className="svc-card4__stack">
                <span>Flutter</span><span>Dart</span><span>Offline-first</span>
              </div>
            </article>

            <article className="svc-card4">
              <div className="svc-card4__icon">
                <img src={imgWeb} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
              </div>
              <h3>Sites &amp; E-commerce</h3>
              <p>Présence en ligne soignée et boutiques prêtes à vendre. Rapides, responsive, optimisées SEO.</p>
              <div className="svc-card4__stack">
                <span>Next.js</span><span>SEO</span><span>E-commerce</span>
              </div>
            </article>

            <article className="svc-card4">
              <div className="svc-card4__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>
                </svg>
              </div>
              <h3>Paiement Mobile Money</h3>
              <p>KKiaPay, FedaPay et les moyens de paiement locaux intégrés nativement et sécurisés.</p>
              <div className="svc-card4__stack">
                <span>KKiaPay</span><span>FedaPay</span><span>Sécurisé</span>
              </div>
            </article>

          </div>

          <div className="reveal" style={{ marginTop: 44, textAlign: 'center' }}>
            <Link className="link-arrow" to="/services">
              Voir tous nos services
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRODUITS SAAS
          ================================================================ */}
      <section className="section domaines" id="produits">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Nos produits</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Trois SaaS prêts à l'emploi</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Des solutions éprouvées pour restaurants, commerces et métiers sur rendez-vous — déployables rapidement, sans gros budget IT.
            </p>
          </div>

          <div className="domaines__grid reveal">
            {[
              {
                tag: 'Restauration', img: winresto, alt: 'WinResto',
                title: 'WinResto', desc: 'Commande à table par QR code. Le client scanne, commande et paie — la cuisine reçoit en temps réel.',
                path: '/produits#winresto',
              },
              {
                tag: 'Rendez-vous', img: winqueue, alt: 'WinQueue',
                title: 'WinQueue', desc: 'Réservation en ligne et rappels automatiques anti no-show pour salons, cliniques et pros sur RDV.',
                path: '/produits#winqueue',
              },
              {
                tag: 'Commerce', img: winstock, alt: 'WinStock',
                title: 'WinStock', desc: 'Gestion de stock et commandes fournisseurs. Suivez vos quantités en temps réel, zéro rupture.',
                path: '/produits#winstock',
              },
            ].map(({ tag, img, alt, title, desc, path }) => (
              <article key={title} className="domaine-card">
                <div className="mini-mock">
                  <img src={img} alt={alt} />
                </div>
                <div className="domaine-card__tag">{tag}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link className="link-arrow" to={path}>
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          POURQUOI WINTECH — dark band
          ================================================================ */}
      <section className="section pourquoi-premium">
        <div className="mesh">
          <div className="mesh__blob mesh__blob--green" style={{ width: 500, height: 500, top: -180, right: -80, opacity: 0.1 }} />
          <div className="mesh__blob mesh__blob--navy"  style={{ width: 380, height: 380, bottom: -100, left: -60, opacity: 0.2 }} />
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-head reveal">
            <span className="eyebrow eyebrow--on-dark">Pourquoi WinTech</span>
            <h2 className="h-1" style={{ marginTop: 14, color: '#fff' }}>
              Un partenaire technologique<br />qui connaît votre terrain
            </h2>
            <p className="lede" style={{ marginTop: 14, color: 'rgba(255,255,255,0.6)', maxWidth: 520 }}>
              Pas seulement du code. On comprend le marché béninois, ses usages, ses contraintes — et on reste à vos côtés après la livraison.
            </p>
          </div>

          <div className="grid grid-4" style={{ marginTop: 56 }}>
            <div className="why-card-premium reveal" data-delay="1">
              <div className="icon-badge-premium">
                <img src={imgEquipe} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />
              </div>
              <h3>Équipe 100% locale</h3>
              <p>Une équipe béninoise qui comprend les réalités des entreprises d&apos;ici.</p>
            </div>
            <div className="why-card-premium reveal" data-delay="2">
              <div className="icon-badge-premium">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="3"/><path d="M11 18h2"/>
                </svg>
              </div>
              <h3>Pensé mobile money</h3>
              <p>KKiaPay, FedaPay et les usages paiement locaux intégrés nativement.</p>
            </div>
            <div className="why-card-premium reveal" data-delay="3">
              <div className="icon-badge-premium">
                <img src={imgAccomp} alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />
              </div>
              <h3>Accompagnement proche</h3>
              <p>Formation, support et suivi. Un interlocuteur disponible, près de chez vous.</p>
            </div>
            <div className="why-card-premium reveal" data-delay="4">
              <div className="icon-badge-premium">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>
                </svg>
              </div>
              <h3>Conçu pour les PME</h3>
              <p>Produits abordables, déployables vite — sans gros budget informatique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TÉMOIGNAGES
          ================================================================ */}
      <section className="section temoignages-premium">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Ils nous font confiance</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Ce que nos clients disent</h2>
          </div>
          <div className="temoignages__grid-premium reveal">
            {[
              {
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                quote: 'C\'est génial ! Toujours à la hauteur des attentes. Des services impeccables, une équipe attentive à chaque détail.',
                author: 'IronSecur',
              },
              {
                avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
                quote: 'J\'avais besoin d\'un site élégant. WinTech a parfaitement compris mes attentes et a livré en avance sur le planning.',
                author: 'Richard Koffi, Responsable technique',
              },
              {
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
                quote: 'Nous avons automatisé plusieurs tâches manuelles. Le gain de temps est considérable, je suis très satisfait.',
                author: 'Jules Komlan, Formateur en ligne',
              },
            ].map(({ avatar, quote, author }) => (
              <div key={author} className="temoignage-card-premium">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="temoignage-avatar-premium">
                    <img src={avatar} alt={author} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)' }}>{author}</div>
                    <div className="temoignage-card-premium .stars" style={{ color: '#f59e0b', fontSize: '0.8rem', letterSpacing: 2 }}>★★★★★</div>
                  </div>
                </div>
                <blockquote className="temoignage-card-premium blockquote">{quote}</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
          ================================================================ */}
      <section className="section faq-premium">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Questions fréquentes</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Tout ce que vous voulez savoir</h2>
          </div>
          <div className="faq-grid-premium reveal">
            {[
              { q: '01 — Quels types de services proposez-vous ?', a: 'Développement web et mobile sur mesure, design UX/UI, intégration de paiement mobile money (KKiaPay, FedaPay), conseil en transformation digitale et produits SaaS prêts à l\'emploi.' },
              { q: '02 — Quels sont vos tarifs ?', a: 'Nos tarifs varient selon la complexité du projet. Nous proposons un devis gratuit et sans engagement après une première consultation.' },
              { q: '03 — Comment se déroule la collaboration ?', a: 'Écoute → Conception → Développement par sprints → Tests → Lancement → Suivi. Vous validez à chaque étape clé.' },
              { q: '04 — Puis-je demander une solution personnalisée ?', a: 'Absolument. Toutes nos solutions sont adaptables à vos besoins spécifiques. Contactez-nous pour en discuter.' },
              { q: '05 — Proposez-vous un accompagnement après livraison ?', a: 'Oui, nous assurons la maintenance, le suivi et la montée en compétence de vos équipes après chaque livraison.' },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item-premium">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA FINAL
          ================================================================ */}
      <section className="section--tight">
        <div className="wrap">
          <div className="cta-band-premium reveal">
            <div className="mesh">
              <div className="mesh__blob mesh__blob--green" style={{ width: 460, height: 460, top: -160, right: -80, opacity: 0.2 }} />
            </div>
            <div className="cta-band__inner-premium">
              <div>
                <span className="eyebrow eyebrow--on-dark">Parlons-en</span>
                <h2 className="h-1" style={{ color: '#fff', marginTop: 14 }}>
                  Un projet en tête ?<br />On vous répond en 24h.
                </h2>
                <p className="lede" style={{ marginTop: 14, maxWidth: 460, color: 'rgba(255,255,255,0.65)' }}>
                  Décrivez-nous votre idée. On revient vers vous avec une première piste concrète, sans jargon, sans engagement.
                </p>
              </div>
              <Link className="btn btn-primary btn--lg" to="/contact">
                Démarrer la conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
