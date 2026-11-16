import React, { useEffect, useRef, useState } from 'react';

const APropos: React.FC = () => {
  const stats = [
    { value: '98%', label: 'Taux de satisfaction client' },
    { value: '24/7', label: 'Support & supervision réseau' },
    { value: '+50', label: 'Infrastructures déployées' },
  ];

  // Gestion de l'apparition au scroll via Intersection Observer
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // On arrête d'observer une fois apparu
        }
      },
      { threshold: 0.15 } // Déclenche quand 15% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Moteur d'animation CSS pour le rendu au scroll */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulseGlow {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(1); }
        }

        /* État initial caché de la carte avant le scroll */
        .reveal-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease,
                      background-color 0.4s ease,
                      box-shadow 0.4s ease;
        }

        /* Classe activée instantanément au scroll */
        .reveal-card.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Structure de base de la carte */
        .premium-card {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 24px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          cursor: pointer;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* Comportement au survol (complémentaire au scroll) */
        .premium-card:hover {
          border-color: rgba(0, 0, 0, 0.8);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
          background: #ffffff;
        }

        .visual-container {
          position: relative;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover .visual-container {
          transform: scale(1.1) rotate(2deg);
        }

        .premium-card:hover .animated-element {
          animation: float 3s ease-in-out infinite;
          stroke: #00F5A0 !important;
        }

        .premium-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background: linear-gradient(to bottom, #00F5A0, #00E699);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover::before {
          transform: scaleY(1);
        }

        @media (max-width: 768px) {
          .premium-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px;
          }
          .visual-container {
            width: 100%;
            height: 140px;
          }
        }
      `}</style>

      <main style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        fontFamily: "'Lexend', sans-serif",
        paddingTop: '140px',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}>
        
        {/* ================= HERO SECTION ================= */}
        <section style={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingInline: '24px',
          textAlign: 'center',
          paddingBottom: '100px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 245, 160, 0.05) 0%, rgba(255,255,255,0) 80%)',
            zIndex: -1,
            animation: 'pulseGlow 8s ease-in-out infinite'
          }} />

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f3f4f6',
            border: '1px solid #e5e7eb',
            padding: '6px 14px',
            borderRadius: '100px',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#4b5563',
            marginBottom: '32px'
          }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#00F5A0', borderRadius: '50%' }}></span>
            NOTRE MANIFESTE
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-2px',
            lineHeight: 1.05,
            maxWidth: '1000px',
            margin: '0 auto 32px auto'
          }}>
            Bâtir l'infrastructure de vos ambitions <span style={{ color: '#9ca3af' }}>numériques.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#4b5563',
            maxWidth: '740px',
            margin: '0 auto 64px auto',
            lineHeight: 1.6,
          }}>
            WinTech propulse la transformation technologique à travers des solutions réseaux robustes, le développement de systèmes intelligents et une expertise cloud de pointe.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '64px'
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-3px', color: '#000000', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#6b7280', marginTop: '12px', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION VALEURS AVEC REVEAL AU SCROLL ================= */}
        <section 
          ref={sectionRef}
          style={{
            backgroundColor: '#f9fafb',
            borderTop: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb',
            paddingBlock: '120px',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div style={{ maxWidth: '1240px', margin: '0 auto', paddingInline: '24px', position: 'relative', zIndex: 1 }}>
            
            <div style={{ marginBottom: '80px', maxWidth: '600px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px', color: '#000' }}>
                Comment nous redéfinissons les standards
              </h2>
              <p style={{ color: '#6b7280', marginTop: '12px', fontSize: '1.1rem', lineHeight: 1.5 }}>
                Nos principes fondamentaux appliqués à chacun de vos projets.
              </p>
            </div>

            {/* Conteneur des cartes avec apparition décalée (Staggered fade-in) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* CARTE 01 */}
              <div 
                className={`reveal-card premium-card ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0s' }}
              >
                <div style={{ maxWidth: '650px', zIndex: 2 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00F5A0', letterSpacing: '2px', marginBottom: '16px' }}>01 / ARCHITECTURE</div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '16px' }}>Performance Absolue</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '1.05rem', margin: 0 }}>
                    Nous concevons des architectures et systèmes hautement disponibles. Aucune concession n’est faite sur la vitesse, la redondance et la stabilité structurelle de vos applications.
                  </p>
                </div>
                <div className="visual-container">
                  <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <path className="animated-element" d="M6 12l3-3 4 4 5-5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* CARTE 02 */}
              <div 
                className={`reveal-card premium-card ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.15s' }} // Décalage pour l'effet cascade
              >
                <div style={{ maxWidth: '650px', zIndex: 2 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00F5A0', letterSpacing: '2px', marginBottom: '16px' }}>02 / INGÉNIERIE</div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '16px' }}>Innovation Durable</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '1.05rem', margin: 0 }}>
                    Qu’il s’agisse de traitement de données complexes ou d’intégration réseau globale, nos équipes modélisent des pipelines résilients, prêts à encaisser l'échelle de demain.
                  </p>
                </div>
                <div className="visual-container">
                  <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="1.5">
                    <circle className="animated-element" cx="12" cy="5" r="3" stroke="#000" strokeWidth="2" />
                    <circle cx="5" cy="19" r="3" />
                    <circle cx="19" cy="19" r="3" />
                    <line x1="12" y1="8" x2="6.8" y2="16.5" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="12" y1="8" x2="17.2" y2="16.5" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>

              {/* CARTE 03 */}
              <div 
                className={`reveal-card premium-card ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.3s' }} // Décalage pour l'effet cascade
              >
                <div style={{ maxWidth: '650px', zIndex: 2 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00F5A0', letterSpacing: '2px', marginBottom: '16px' }}>03 / PHILOSOPHIE</div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '16px' }}>Transparence Totale</h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '1.05rem', margin: 0 }}>
                    Une méthodologie agile transparente, des tableaux de bord ouverts en temps réel et un accompagnement de pair à pair pour piloter vos projets en parfaite synergie.
                  </p>
                </div>
                <div className="visual-container">
                  <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
                    <polygon className="animated-element" points="12 2 2 7 12 12 22 7" strokeWidth="2" />
                    <polygon points="2 17 12 22 22 17" stroke="#e5e7eb" />
                    <polygon points="2 12 12 17 22 12" stroke="#e5e7eb" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SECTION CTA ================= */}
        <section style={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingInline: '24px',
          paddingBlock: '140px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '24px' }}>
            Prêt à passer à l'échelle supérieure ?
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '540px', margin: '0 auto 48px auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Expliquez-nous vos problématiques réseaux, applicatives ou de traitement de données. Nos experts reviennent vers vous sous 24h.
          </p>
          
          <a href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '16px 36px',
            borderRadius: '100px',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,245,160,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
          }}
          >
            Démarrer un projet
            <svg style={{ width: '18px', height: '18px', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }} viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </section>

      </main>
    </>
  );
};

export default APropos;