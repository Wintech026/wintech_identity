import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    message: ''
  });

  // Déclenche l'animation d'apparition au chargement de la page
  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
*NOUVELLE DEMANDE WINTECH*

👤 Nom : ${formData.nom}
📧 Email : ${formData.email}
📱 WhatsApp : ${formData.telephone}
💼 Besoin : ${formData.projet}
📝 Message : ${formData.message}
  `;

  const numeroWhatsApp = "2290154753071";

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


  // --- Styles de base pour l'animation d'entrée ---
  const getAnimatedStyle = (delay: string) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}`,
  });

  // --- Style des inputs ---
  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    color: '#0A1628',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const handleFocus = (e: any) => {
    e.target.style.borderColor = '#00C896';
    e.target.style.boxShadow = '0 0 0 4px rgba(0, 200, 150, 0.1)';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleBlur = (e: any) => {
    e.target.style.borderColor = '#e0e0e0';
    e.target.style.boxShadow = 'none';
    e.target.style.transform = 'translateY(0)';
  };

  // --- Style interactif commun pour les cartes d'info ---
  const cardStyle: React.CSSProperties = {
    padding: '30px', 
    backgroundColor: '#fdfdfd', 
    borderRadius: '20px', 
    border: '1px solid #f0f0f0',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    cursor: 'pointer'
  };

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 200, 150, 0.08)';
    e.currentTarget.style.borderColor = 'rgba(0, 200, 150, 0.2)';
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
    e.currentTarget.style.borderColor = '#f0f0f0';
  };

  return (
    <section style={{ paddingBlock: '120px 80px', backgroundColor: '#ffffff', color: '#0A1628', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', marginInline: 'auto', paddingInline: '20px' }}>
        
        {/* 1. Titre Animé */}
        <div style={{ ...getAnimatedStyle('0s'), textAlign: 'center', marginBottom: '70px' }}>
          <span style={{ color: '#00C896', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px' }}>
            Contactez WinTech
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, marginTop: '10px', letterSpacing: '-2px' }}>
            Bâtissons ensemble votre <span style={{ color: '#00C896' }}>succès</span>.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'start' }}>
          
          {/* 2. Bloc Formulaire Animé avec effet de survol */}
          <div 
            style={{ 
              ...getAnimatedStyle('0.2s'),
              backgroundColor: '#ffffff', 
              padding: '45px', 
              borderRadius: '24px', 
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.04)',
              border: '1px solid #f5f5f5',
              transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 30px 70px rgba(0, 200, 150, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.04)';
            }}
          >
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '30px' }}>Votre projet</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '8px', fontWeight: 600 }}>Nom complet</label>
                <input type="text" name="nom" required placeholder="Ex: Saliou Dossou" style={inputStyle} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '8px', fontWeight: 600 }}>Email</label>
                  <input type="email" name="email" required placeholder="Ex: dev@wintech.company" style={inputStyle} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '8px', fontWeight: 600 }}>WhatsApp</label>
                  <input type="tel" name="telephone" placeholder="+229 51 00 00 00" style={inputStyle} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '8px', fontWeight: 600 }}>Besoin</label>
                <select name="projet" style={inputStyle} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
                  <option value="">Sélectionnez un service</option>
                  <option value="web">Développement Web</option>
                  <option value="mobile">Développement Mobile</option>
                  <option value="ia">Intelligence Artificielle</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#666', marginBottom: '8px', fontWeight: 600 }}>Message</label>
               <textarea
                name="message"
                required
                rows={4}
                placeholder="Parlez-nous de vos objectifs..."
                style={{ ...inputStyle, resize: 'none' }}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              </div>

              <button 
                type="submit" 
                style={{ 
                  padding: '18px', backgroundColor: '#00C896', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', transition: 'all 0.3s' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A1628';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00C896';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* 3. Bloc Infos Animés avec effet Remontée au Survol */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Localisation */}
            <div style={getAnimatedStyle('0.4s')}>
              <div 
                style={cardStyle}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <h4 style={{ fontWeight: 800, color: '#00C896', marginBottom: '10px' }}>Siège WinTech</h4>
                <p style={{ lineHeight: 1.6, color: '#555', margin: 0 }}>
                  Zogbadjè, Abomey-Calavi<br />Atlantique, Bénin
                </p>
              </div>
            </div>

            {/* Contacts Cliquables Dynamiques */}
            <div style={getAnimatedStyle('0.6s')}>
              <div 
                style={cardStyle}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <h4 style={{ fontWeight: 800, color: '#00C896', marginBottom: '12px' }}>Contact Direct</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a 
                    href="tel:+22951408090" 
                    style={{ color: '#0A1628', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00C896'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0A1628'}
                  >
                    Téléphone : +229 01 54 75 30 71
                  </a>
                  <a 
                    href="mailto:contact@winrestoapp.com" 
                    style={{ color: '#0A1628', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00C896'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0A1628'}
                  >
                    Email : contact@winrestoapp.com
                  </a>
                </div>
              </div>
            </div>

            {/* R&D Card Tactile */}
            <div style={getAnimatedStyle('0.8s')}>
              <div 
                style={{ 
                  ...cardStyle, 
                  backgroundColor: '#0A1628', 
                  color: '#fff',
                  border: '1px solid #0A1628'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 22, 40, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                }}
              >
                <h4 style={{ fontWeight: 800, color: '#00C896', marginBottom: '10px' }}>R&D Support</h4>
                <p style={{ lineHeight: 1.6, opacity: 0.8, margin: 0 }}>
                  Nos ingénieurs répondent à vos questions techniques 24h/24 pour vos déploiements critiques.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;