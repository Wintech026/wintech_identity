import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import winResto_2 from '../assets/winResto_2.png';
import page_menu from '../assets/page_menu.jpeg';

const Produits = () => {
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
      {/* Page hero */}
      <section className="page-hero">
        <div className="mesh">
          <div className="mesh__blob mesh__blob--green"></div>
        </div>
        <div className="wrap page-hero__inner">
          <span className="eyebrow reveal">Nos produits</span>
          <h1 className="h-display reveal" data-delay="1">
            Des outils concrets,<br />pensés pour le terrain
          </h1>
          <p className="lede reveal" data-delay="2" style={{ marginTop: '20px', maxWidth: '600px' }}>
            Trois produits SaaS déjà prêts à servir vos clients dès aujourd'hui : restauration, prise de rendez-vous et gestion de stock. Simples à déployer, faits pour les réalités des PME béninoises.
          </p>
          <div className="reveal" data-delay="3" style={{ marginTop: '26px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a className="chip" href="#winresto" style={{ cursor: 'pointer' }}>
              <span className="dot"></span> WinResto
            </a>
            <a className="chip" href="#winqueue" style={{ cursor: 'pointer' }}>
              <span className="dot"></span> WinQueue
            </a>
            <a className="chip" href="#winstock" style={{ cursor: 'pointer' }}>
              <span className="dot"></span> WinStock
            </a>
          </div>
        </div>
      </section>

      {/* ============ WINRESTO ============ */}
      <section className="product section" id="winresto">
        <div className="wrap product__grid">
          <div className="product__copy reveal">
            <span className="product__num">PRODUIT 01</span>
            <div className="product__name">
              <span className="icon-badge icon-badge--soft" style={{ margin: 0 }}>
                {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"> */}
                  <img src={winResto_2} alt="winResto_2" />
                  <path d="M3 11h18M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M7 11v8M17 11v8M5 19h14" />
                {/* </svg> */}
              </span>
              <h2>WinResto</h2>
            </div>
            <p className="lede product__desc">
              La commande à table par QR code. Le client scanne, parcourt le menu, commande et paie depuis son téléphone — la cuisine reçoit le ticket en temps réel.
            </p>
            <ul className="checklist">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Service plus rapide :</b> plus d'attente pour passer commande, les tables tournent mieux.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Moins d'erreurs :</b> la commande arrive en cuisine telle que le client l'a saisie avec ses exigences.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Serveurs soulagés :</b> ils se concentrent sur l'accueil, pas sur la prise de notes.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Paiement mobile money, Espèce, Carte banquaire</b> </span>
              </li>
            </ul>
            <div className="product__cta">
              <Link className="btn btn-primary" to="/contact">Demander une démo</Link>
              <Link className="link-arrow" to="/services">
                Besoin d'un sur-mesure ?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="visual reveal" data-delay="1">
            <div className="visual__halo"></div>
            <div className="phone float-anim--slow">
              <div className="phone__screen">
                <div className="scr">
                  <img src={page_menu} alt="page_menu" />
                  {/* <div className="scr__top"> */}
                    {/* <div className="row">
                      <div>
                        <div className="scr__biz">Maquis Le Baobab</div>
                        <div className="scr__sub">Cotonou · Menu du soir</div>
                      </div>
                      <span className="scr__badge">Table 7</span>
                    </div> */}
                    {/* <div className="catrow" style={{ marginTop: '13px' }}>
                      <span className="cat on">Plats</span>
                      <span className="cat">Grillades</span>
                      <span className="cat">Boissons</span>
                    </div>
                  </div> */}
                  <div className="scr__body">
                    {/* <div className="item">
                      <div className="item__img"></div>
                      <div>
                        <div className="item__t">Poulet braisé</div>
                        <div className="item__p">2 500 FCFA</div>
                      </div>
                      <div className="item__add">+</div>
                    </div> */}
                    {/* <div className="item"> */}
                      {/* <div className="item__img b"></div>
                      <div>
                        <div className="item__t">Poisson grillé</div>
                        <div className="item__p">3 000 FCFA</div>
                      </div>
                      <div className="item__add">+</div>
                    </div> */}
                    {/* <div className="item">
                      <div className="item__img c"></div>
                      <div>
                        <div className="item__t">Riz au gras</div>
                        <div className="item__p">1 500 FCFA</div>
                      </div>
                      <div className="item__add">+</div>
                    </div> */}
                    {/* <div className="scr__cta" style={{ paddingInline: 0 }}>
                      <div className="scr__btn">Voir ma commande · 3 articles</div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="fcard f-top f-left float-anim">
              <div className="ic g">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <path d="M14 14h2v2M20 14v2M14 20h6" />
                </svg>
              </div>
              <div>
                <div className="t">Scan du QR code</div>
                <div className="s">Menu ouvert en 1 geste</div>
              </div>
            </div>
            <div className="fcard f-bottom f-right float-anim--slow">
              <div className="ic n">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11h18M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M7 11v8M17 11v8" />
                </svg>
              </div>
              <div>
                <div className="t">Cuisine · Ticket #128</div>
                <div className="s">Reçu en temps réel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WINQUEUE ============ */}
      <section className="product product--soft product--rev section" id="winqueue">
        <div className="wrap product__grid">
          <div className="product__copy reveal">
            <span className="product__num">PRODUIT 02</span>
            <div className="product__name">
              <span className="icon-badge icon-badge--soft" style={{ margin: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="M9 16l2 2 4-4" />
                </svg>
              </span>
              <h2>WinQueue</h2>
            </div>
            <p className="lede product__desc">
              La réservation en ligne avec rappels automatiques anti no-show. Vos clients réservent un créneau en quelques secondes, et reçoivent un rappel avant le rendez-vous.
            </p>
            <ul className="checklist">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Moins de no-show :</b> rappels SMS / WhatsApp automatiques avant chaque rendez-vous.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Agenda toujours à jour :</b> fini les doubles réservations et les cahiers papier.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Réservation 24h/24 :</b> vos clients prennent rendez-vous même quand vous êtes fermé.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Pour salons, cliniques &amp; pros sur RDV :</b> adapté à tous les métiers de service.</span>
              </li>
            </ul>
            <div className="product__cta">
              <Link className="btn btn-primary" to="/contact">Demander une démo</Link>
              <Link className="link-arrow" to="/services">
                Besoin d'un sur-mesure ?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="visual reveal" data-delay="1">
            <div className="visual__halo"></div>
            <div className="phone float-anim--slow">
              <div className="phone__screen">
                <div className="scr">
                  <div className="scr__top">
                    <div className="row">
                      <div>
                        <div className="scr__biz">Salon Élégance</div>
                        <div className="scr__sub">Abomey-Calavi · Coiffure</div>
                      </div>
                      <span className="scr__badge">Réserver</span>
                    </div>
                  </div>
                  <div className="scr__body">
                    <div className="scr__lab">Choisir un jour</div>
                    <div className="daterow">
                      <div className="day">
                        <div className="d">LUN</div>
                        <div className="n">12</div>
                      </div>
                      <div className="day on">
                        <div className="d">MAR</div>
                        <div className="n">13</div>
                      </div>
                      <div className="day">
                        <div className="d">MER</div>
                        <div className="n">14</div>
                      </div>
                      <div className="day">
                        <div className="d">JEU</div>
                        <div className="n">15</div>
                      </div>
                    </div>
                    <div className="scr__lab" style={{ marginTop: '6px' }}>Créneaux disponibles</div>
                    <div className="slots">
                      <div className="slot">09:00</div>
                      <div className="slot off">10:30</div>
                      <div className="slot on">11:00</div>
                      <div className="slot">14:00</div>
                      <div className="slot">15:30</div>
                      <div className="slot off">17:00</div>
                    </div>
                    <div className="scr__cta" style={{ paddingInline: 0 }}>
                      <div className="scr__btn">Confirmer · Mar. 13 à 11:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fcard f-top f-right float-anim">
              <div className="ic g">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
              </div>
              <div>
                <div className="t">Rappel envoyé</div>
                <div className="s">WhatsApp · J-1</div>
              </div>
            </div>
            <div className="fcard f-bottom f-left float-anim--slow">
              <div className="ic n">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <div className="t">RDV confirmé</div>
                <div className="s">−42% de no-show</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WINSTOCK ============ */}
      <section className="product section" id="winstock">
        <div className="wrap product__grid">
          <div className="product__copy reveal">
            <span className="product__num">PRODUIT 03</span>
            <div className="product__name">
              <span className="icon-badge icon-badge--soft" style={{ margin: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7l9-4 9 4-9 4-9-4Z" />
                  <path d="M3 7v10l9 4 9-4V7" />
                  <path d="M12 11v10" />
                </svg>
              </span>
              <h2>WinStock</h2>
            </div>
            <p className="lede product__desc">
              La gestion de stock et des commandes fournisseurs pour les commerces et restaurants. Suivez vos quantités en temps réel et ne tombez plus jamais en rupture.
            </p>
            <ul className="checklist">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Stock en temps réel :</b> chaque vente met à jour vos quantités automatiquement.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Alertes de rupture :</b> soyez prévenu avant de manquer d'un produit clé.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Commandes fournisseurs :</b> réapprovisionnez en un clic, au bon moment.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <span><b>Vision claire :</b> savez ce qui se vend, ce qui dort, et ce qu'il faut recommander.</span>
              </li>
            </ul>
            <div className="product__cta">
              <Link className="btn btn-primary" to="/contact">Demander une démo</Link>
              <Link className="link-arrow" to="/services">
                Besoin d'un sur-mesure ?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="visual reveal" data-delay="1">
            <div className="visual__halo"></div>
            <div className="stock-card float-anim--slow">
              <div className="stock-card__top">
                <h4>Stock en temps réel</h4>
                <span className="chip"><span className="dot"></span> Live</span>
              </div>
              <div className="stock-row">
                <div className="stock-row__t">Riz (sac)</div>
                <div className="stock-bar"><i style={{ width: '78%' }}></i></div>
                <span className="stock-tag ok">OK</span>
              </div>
              <div className="stock-row">
                <div className="stock-row__t">Huile (L)</div>
                <div className="stock-bar"><i style={{ width: '64%' }}></i></div>
                <span className="stock-tag ok">OK</span>
              </div>
              <div className="stock-row">
                <div className="stock-row__t">Tomate (kg)</div>
                <div className="stock-bar"><i className="low" style={{ width: '18%' }}></i></div>
                <span className="stock-tag low">Bas</span>
              </div>
              <div className="stock-row">
                <div className="stock-row__t">Boissons</div>
                <div className="stock-bar"><i style={{ width: '52%' }}></i></div>
                <span className="stock-tag ok">OK</span>
              </div>
              <div className="stock-card__foot">
                <div className="scr__btn">Commander chez le fournisseur</div>
              </div>
            </div>
            <div className="fcard f-top f-left float-anim">
              <div className="ic g">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.3 3.2 2.5 16.5A2 2 0 0 0 4.2 19.5h15.6a2 2 0 0 0 1.7-3L13.7 3.2a2 2 0 0 0-3.4 0Z" />
                  <path d="M12 9v4M12 17h0" />
                </svg>
              </div>
              <div>
                <div className="t">Alerte rupture</div>
                <div className="s">Tomate · niveau bas</div>
              </div>
            </div>
            <div className="fcard f-bottom f-right float-anim--slow">
              <div className="ic n">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="18" cy="20" r="1.5" />
                  <path d="M2 3h3l2.4 12.4a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 7H6" />
                </svg>
              </div>
              <div>
                <div className="t">Commande fournisseur</div>
                <div className="s">Envoyée · livraison J+1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--tight">
        <div className="wrap">
          <div className="cta-band reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)', padding: 'clamp(44px, 6vw, 76px)', background: 'var(--navy-900)' }}>
            <div className="mesh">
              <div className="mesh__blob mesh__blob--green" style={{ width: '440px', height: '440px', top: '-160px', right: '-80px', opacity: '.3' }}></div>
            </div>
            {/* <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
              <div>
                <span className="eyebrow eyebrow--on-dark">Essayez nos produits</span>
                <h2 className="h-1" style={{ color: '#fff', marginTop: '14px' }}>Voyons lequel correspond<br />à votre activité.</h2>
              </div>
              <Link className="btn btn-primary btn--lg" to="/contact">
                Réserver une démo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Produits;