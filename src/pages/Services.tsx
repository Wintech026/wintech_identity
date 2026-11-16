import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="services-hero">
        <div className="mesh hero__mesh">
          <div className="mesh__blob mesh__blob--green"></div>
          <div className="mesh__blob mesh__blob--navy"></div>
        </div>
        <div className="wrap services-hero__inner">
          <div className="services-hero__grid">
            <div className="services-hero__content">
              <span className="eyebrow reveal">Services sur mesure</span>
              <h1 className="h-display reveal">
                Pensé pour vous,<br />
                construit avec vous
              </h1>
              <p className="lede reveal" data-delay="1">
                Au-delà de nos produits, WinTech conçoit et développe des solutions sur mesure : applications web, apps mobiles, sites vitrines et intégrations de paiement. De l'idée à la mise en ligne, on construit avec vous.
              </p>
              <div className="services-hero__stats reveal" data-delay="2">
                <div>
                  <span className="stat__num">3+</span>
                  <span className="stat__label">Années d'expertise</span>
                </div>
                <div>
                  <span className="stat__num">10+</span>
                  <span className="stat__label">Projets livrés</span>
                </div>
                <div>
                  <span className="stat__num">98%</span>
                  <span className="stat__label">Clients satisfaits</span>
                </div>
              </div>
              <div className="services-hero__actions reveal" data-delay="3">
                <Link className="btn btn-primary btn--lg" to="/contact">
                  Nous écrire directement
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="services-hero__image reveal" data-delay="4">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center" 
                alt="Équipe WinTech" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOS SERVICES (4 cartes) ===== */}
      <section className="section services-list">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Des solutions pensées pour concrétiser vos ambitions</span>
            <h2 className="h-1" style={{ marginTop: '14px' }}>
              Professionnalisez votre présence en ligne
            </h2>
            <p className="lede">
              De la simple vitrine à la plateforme sur‑mesure, nous développons des solutions web et mobiles robustes pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="services-grid reveal">
            {/* Service 1 : Développement web */}
            <article className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 16-4-4 4-4M16 8l4 4-4 4M13 4l-2 16" />
                </svg>
              </div>
              <span className="service-card__num">01</span>
              <h3>Développement web</h3>
              <p>Des applications web robustes et évolutives : back-offices, plateformes métier, portails clients. Une architecture solide, pensée pour durer et grandir avec vous.</p>
              <div className="service-card__tags">
                <span className="tech">Laravel</span>
                <span className="tech">React</span>
                <span className="tech">API REST</span>
                <span className="tech">PostgreSQL</span>
              </div>
            </article>

            {/* Service 2 : Applications mobiles */}
            <article className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="2" width="12" height="20" rx="3" />
                  <path d="M11 18h2" />
                </svg>
              </div>
              <span className="service-card__num">02</span>
              <h3>Applications mobiles</h3>
              <p>Des apps mobiles fluides pour iOS et Android, développées une seule fois avec Flutter. Une expérience native, rapide, pensée pour les usages mobiles d'ici.</p>
              <div className="service-card__tags">
                <span className="tech">Flutter</span>
                <span className="tech">iOS</span>
                <span className="tech">Android</span>
                <span className="tech">Offline-first</span>
              </div>
            </article>

            {/* Service 3 : Sites vitrines & e-commerce */}
            <article className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 9h20" />
                  <path d="M6 6.5h0" />
                  <path d="M8 14h5M8 17h8" />
                </svg>
              </div>
              <span className="service-card__num">03</span>
              <h3>Sites vitrines &amp; e-commerce</h3>
              <p>Une présence en ligne soignée qui inspire confiance, et des boutiques en ligne prêtes à vendre. Rapides, responsive, optimisées pour être trouvées sur Google.</p>
              <div className="service-card__tags">
                <span className="tech">Site vitrine</span>
                <span className="tech">E-commerce</span>
                <span className="tech">SEO</span>
                <span className="tech">Responsive</span>
              </div>
            </article>

            {/* Service 4 : Paiement mobile money */}
            <article className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="m2 10 20 0" />
                  <path d="M6 15h4" />
                </svg>
              </div>
              <span className="service-card__num">04</span>
              <h3>Paiement mobile money</h3>
              <p>L'intégration des moyens de paiement que vos clients utilisent vraiment. Encaissez par mobile money directement dans vos applications, en toute sécurité.</p>
              <div className="service-card__tags">
                <span className="tech">KKiaPay</span>
                <span className="tech">FedaPay</span>
                <span className="tech">Paiement sécurisé</span>
              </div>
            </article>
          </div>

          <div className="services-stats reveal" style={{ marginTop: '40px', textAlign: 'center' }}>
            <span className="stat__num" style={{ fontSize: '2.5rem' }}>8+</span>
            <span className="stat__label" style={{ fontSize: '1.1rem', color: 'var(--ink-soft)' }}>Partenaires et clients fidèles</span>
          </div>
        </div>
      </section>

      {/* ===== DESIGN & EXPÉRIENCE (version WinTech) ===== */}
      <section className="section design-section">
        <div className="wrap">
          <div className="design-section__grid reveal">
            <div className="design-section__image">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop&crop=face&auto=format" 
                alt="Design UX/UI WinTech" 
              />
            </div>
            <div className="design-section__content">
              <span className="eyebrow">Design &amp; Expérience Utilisateur</span>
              <h2 className="h-1" style={{ marginTop: '10px' }}>
                Des interfaces qui <span className="grad-text">transforment l'expérience</span> de vos utilisateurs
              </h2>
              <p className="lede" style={{ marginTop: '16px' }}>
                Chez WinTech, nous ne nous contentons pas de faire "beau". Nous concevons des interfaces intuitives, accessibles et performantes, qui rendent vos outils digitaux agréables à utiliser au quotidien.
              </p>
              <ul className="design-list" style={{ marginTop: '24px' }}>
                <li>
                  <span className="design-list__dot"></span>
                  <div>
                    <strong>Approche centrée utilisateur</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', marginTop: '2px' }}>Nous testons et itérons avec vos vrais utilisateurs pour garantir une adoption rapide.</p>
                  </div>
                </li>
                <li>
                  <span className="design-list__dot"></span>
                  <div>
                    <strong>Expérience mobile-first</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', marginTop: '2px' }}>Nos designs sont pensés pour le mobile, car c'est là que vos clients sont.</p>
                  </div>
                </li>
                <li>
                  <span className="design-list__dot"></span>
                  <div>
                    <strong>Accessibilité et inclusion</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', marginTop: '2px' }}>Nous concevons des interfaces utilisables par tous, y compris les personnes en situation de handicap.</p>
                  </div>
                </li>
                <li>
                  <span className="design-list__dot"></span>
                  <div>
                    <strong>Design system évolutif</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', marginTop: '2px' }}>Nous construisons des bases solides pour que votre identité visuelle reste cohérente et évolutive dans le temps.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOTRE MÉTHODE (process) ===== */}
      <section className="section band-dark process-section">
        <div className="mesh">
          <div className="mesh__blob mesh__blob--green" style={{ width: '480px', height: '480px', top: '-180px', right: '-120px', opacity: '.16' }}></div>
          <div className="mesh__grid"></div>
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-head reveal">
            <span className="eyebrow eyebrow--on-dark">Notre méthode</span>
            <h2 className="h-1" style={{ marginTop: '14px', color: '#fff' }}>Une façon de travailler<br />claire et rassurante</h2>
          </div>
          <div className="process-grid" style={{ marginTop: '50px' }}>
            <div className="process-step reveal" data-delay="1">
              <div className="process-step__line"></div>
              <span className="process-step__num">01</span>
              <h4>Écoute</h4>
              <p>On comprend votre activité, vos clients et le vrai problème à résoudre.</p>
            </div>
            <div className="process-step reveal" data-delay="2">
              <div className="process-step__line"></div>
              <span className="process-step__num">02</span>
              <h4>Conception</h4>
              <p>On dessine la solution, les écrans et le parcours — validés ensemble.</p>
            </div>
            <div className="process-step reveal" data-delay="3">
              <div className="process-step__line"></div>
              <span className="process-step__num">03</span>
              <h4>Développement</h4>
              <p>On construit par étapes, avec des points réguliers pour rester alignés.</p>
            </div>
            <div className="process-step reveal" data-delay="4">
              <span className="process-step__num">04</span>
              <h4>Lancement &amp; suivi</h4>
              <p>On met en ligne, on forme vos équipes et on reste présents après.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section--tight">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="mesh">
              <div className="mesh__blob mesh__blob--green" style={{ width: '440px', height: '440px', top: '-160px', right: '-80px', opacity: '.3' }}></div>
            </div>
            <div className="cta-band__inner">
              <div>
                <span className="eyebrow eyebrow--on-dark">Parlons de votre projet</span>
                <h2 className="h-1" style={{ color: '#fff', marginTop: '14px' }}>Décrivez-nous votre idée.<br />On vous dit comment la réaliser.</h2>
                <p className="lede" style={{ marginTop: '14px', maxWidth: '480px', color: 'rgba(255,255,255,0.72)' }}>
                  Une question, un besoin ? Écrivez-nous — on vous répond vite, sans jargon.
                </p>
              </div>
              <Link className="btn btn-primary btn--lg" to="/contact">
                Nous contacter
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;