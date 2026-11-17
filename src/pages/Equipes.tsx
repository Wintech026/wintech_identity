import React, { useState, useEffect } from 'react';
import flora from '../assets/flora.jpeg';
import esther from '../assets/esther.jpeg';
import obed from '../assets/obed.jpeg';
import tania from '../assets/tania.jpeg';
import lexni from '../assets/lexni.jpeg';
// --- Types ---
interface Membre {
  nom: string;
  role: string;
  photo: string;
  isLead?: boolean;
}

interface Pole {
  titre: string;
  description: string;
  membres: Membre[];
}

// --- Composant Compteur Animé ---
const StatCompteur = ({ cible, label, suffixe = "" }: { cible: number, label: string, suffixe?: string }) => {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    let debut = 0;
    const duree = 2000;
    const increment = cible / (duree / 16);
    const timer = setInterval(() => {
      debut += increment;
      if (debut >= cible) {
        setCompte(cible);
        clearInterval(timer);
      } else {
        setCompte(Math.floor(debut));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [cible]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ fontSize: '4rem', fontWeight: 900, color: '#0A1628', lineHeight: 1 }}>
        {compte}{suffixe}
      </div>
      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#00C896', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '10px' }}>
        {label}
      </div>
    </div>
  );
};

// --- Composant Ligne Talent (L'effet WOW individuel) ---
const TalentRow = ({ membre, index }: { membre: Membre, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: '60px',
        width: '100%',
        gap: '60px',
        flexWrap: 'wrap'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bloc Photo avec Effet Magnétique */}
      <div style={{ position: 'relative', width: '350px', height: '480px' }}>
        {/* Cadre de fond */}
        <div style={{ 
          position: 'absolute', 
          top: isHovered ? '15px' : '0', 
          left: isHovered ? '-15px' : '0', 
          width: '100%', 
          height: '100%', 
          border: membre.isLead ? '3px solid #00C896' : '2px solid rgba(0, 200, 150, 0.3)',
          borderRadius: '20px',
          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          zIndex: 0
        }}></div>
        
        {/* Container Image */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '100%', 
          borderRadius: '20px', 
          overflow: 'hidden',
          boxShadow: isHovered ? '0 25px 50px rgba(0,0,0,0.1)' : '0 10px 25px rgba(0,0,0,0.04)',
          transform: isHovered ? 'translateY(-8px)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          zIndex: 1
        }}>
          <img 
            src={membre.photo} 
            alt={membre.nom} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.6s ease'
            }} 
          />
        </div>
      </div>

      {/* Bloc Informations */}
      <div style={{ flex: 1, maxWidth: '500px', textAlign: isEven ? 'left' : 'right' }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: isEven ? 'flex-start' : 'flex-end', alignItems: 'center' }}>
          {membre.isLead && (
            <span style={{ 
              backgroundColor: '#0A1628', 
              color: '#00C896', 
              padding: '6px 16px', 
              borderRadius: '50px', 
              fontSize: '0.75rem', 
              fontWeight: 800,
              letterSpacing: '1.5px',
              border: '1px solid #00C896'
            }}>
              LEAD DU PÔLE
            </span>
          )}
        </div>
        
        <h2 style={{ 
          fontSize: '4rem', 
          fontWeight: 900, 
          color: '#0A1628', 
          marginBlock: '15px 5px',
          lineHeight: 0.95
        }}>
          {membre.nom}
        </h2>
        
        <h3 style={{ fontSize: '1.4rem', color: '#00C896', fontWeight: 600, margin: 0 }}>
          {membre.role}
        </h3>
        
        <div style={{ 
          height: '4px', 
          width: isHovered ? '80px' : '30px', 
          backgroundColor: '#00C896', 
          marginBlock: '20px',
          marginInline: isEven ? '0 auto' : 'auto 0',
          transition: 'width 0.3s ease' 
        }}></div>
        
        <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7, margin: 0, opacity: 0.85 }}>
          Expert dédié au déploiement de solutions robustes et sur mesure, propulsant l'excellence technique et l'innovation numérique chez WinTech.
        </p>
      </div>
    </div>
  );
};

const Equipes: React.FC = () => {
  const poles: Pole[] = [
    {
      titre: "Développement",
      description: "03 membres · produit & ingénierie",
      membres: [
        { nom: "Obed", role: "Lead Developer & DevOps", isLead: true, photo: obed },
        { nom: "Thibaut", role: "Développeur Backend", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
        // { nom: "Vincentia", role: "Développeuse Backend", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
        { nom: "Esther", role: "Développeuse Frontend", photo:esther },
        // { nom: "Lydie", role: "Développeuse Frontend", photo: "https://images.unsplash.com/photo-1628891676724-194781703d0a?q=80&w=800&auto=format&fit=crop" }
      ]
    },
    {
      titre: "Communication & Partenariats",
      description: "03 membres · marque & relations",
      membres: [
        { nom: "Tania", role: "Responsable Communication", isLead: true, photo: tania },
        { nom: "Flora", role: "Communication", photo:flora },
        // { nom: "Exaucée", role: "Communication", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop" },
        { nom: "Lexni", role: "Relations & Partenariats", photo: lexni }
      ]
    },
    // {
    //   titre: "Design",
    //   description: "01 membre · expérience & identité",
    //   membres: [
    //     { nom: "Joël", role: "Designer", isLead: true, photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" }
    //   ]
    // }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0A1628', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* Section En-tête */}
      <section style={{ padding: '100px 20px 60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '25px' }}>
            Les talents qui<br />construisent <span style={{ color: '#00C896' }}>WinTech</span>
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#555', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Une équipe locale et pluridisciplinaire : des développeurs, des communicants et un designer basés au Bénin, partageant le même objectif.
          </p>
        </div>
      </section>

      {/* Section Compteurs d'Impact */}
      <section style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '60px', 
        paddingBottom: '80px', 
        flexWrap: 'wrap',
        borderBottom: '1px solid #f0f0f0' 
      }}>
        <StatCompteur cible={10} label="Talents" />
        <StatCompteur cible={3} label="Pôles" />
        <StatCompteur cible={100} label="Basés au Bénin" suffixe="%" />
      </section>

      {/* Groupement par Pôles et Affichage par ligne */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', paddingInline: '20px', paddingBlock: '40px' }}>
        {poles.map((pole, pIdx) => (
          <div key={pIdx} style={{ marginTop: '80px', marginBottom: '40px' }}>
            
            {/* Titre du Pôle Épuré */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0A1628', margin: 0 }}>{pole.titre}</h2>
              <p style={{ color: '#00C896', fontSize: '1rem', fontWeight: 600, marginTop: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {pole.description}
              </p>
              <div style={{ height: '2px', width: '60px', backgroundColor: '#e0e0e0', margin: '20px auto 0 auto' }}></div>
            </div>

            {/* Liste Linéaire Alternée des Membres du Pôle */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {pole.membres.map((membre, mIdx) => (
                <TalentRow key={mIdx} membre={membre} index={mIdx} />
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* Section Culture Immersion Sombre */}
      <section style={{ padding: '100px 20px', backgroundColor: '#0A1628', color: '#fff', borderRadius: '40px', margin: '80px 20px 40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '60px', letterSpacing: '-1px' }}>Une équipe, une culture</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#00C896', fontSize: '1.4rem', marginBottom: '15px', fontWeight: 700 }}>Ancrés ici</h3>
              <p style={{ opacity: 0.75, fontSize: '1.05rem', lineHeight: 1.6 }}>Nous vivons le marché que nous servons. Nos solutions naissent de réalités locales, pas de théories.</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#00C896', fontSize: '1.4rem', marginBottom: '15px', fontWeight: 700 }}>Fiables</h3>
              <p style={{ opacity: 0.75, fontSize: '1.05rem', lineHeight: 1.6 }}>On tient nos engagements. Du code qui marche, des délais respectés, un support qui répond.</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#00C896', fontSize: '1.4rem', marginBottom: '15px', fontWeight: 700 }}>Tournés croissance</h3>
              <p style={{ opacity: 0.75, fontSize: '1.05rem', lineHeight: 1.6 }}>Votre réussite est notre indicateur. On construit des outils qui font grandir votre business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '40px', letterSpacing: '-1px' }}>Envie de bâtir quelque chose<br />avec cette équipe ?</h2>
        <a 
          href="/contact" 
          style={{ 
            display: 'inline-block', 
            padding: '22px 55px', 
            backgroundColor: '#00C896', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '100px', 
            fontWeight: 800, 
            fontSize: '1.15rem',
            boxShadow: '0 10px 20px rgba(0, 200, 150, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.backgroundColor = '#0A1628';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(10, 22, 40, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#00C896';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 200, 150, 0.2)';
          }}
        >
          Travaillons ensemble
        </a>
      </section>

    </div>
  );
};

export default Equipes;