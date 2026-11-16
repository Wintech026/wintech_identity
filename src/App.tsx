
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Produits from './pages/Produits';
import Services from './pages/Services';
import Equipes from './pages/Equipes';
import APropos from './pages/APropos';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      {/* Tout ce que tu écris ici sera au milieu, entre le Header et le Footer */}
      {/* <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '50vh' }}>
        <span className="eyebrow">Projet Initialisé</span>
        <h1 style={{ fontSize: '2.8rem', color: '#ffffff', marginTop: '12px' }}>
          Bienvenue chez WinTech
        </h1>
        <p style={{ color: 'var(--ink-mute)', marginTop: '8px', maxWidth: '500px', marginInline: 'auto' }}>
          L'environnement React + TypeScript est prêt. Le Header et le Footer sont connectés au fichier de styles globaux.
        </p>
      </div> */}
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipes" element={<Equipes />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
    </Layout>
  );
}

export default App;