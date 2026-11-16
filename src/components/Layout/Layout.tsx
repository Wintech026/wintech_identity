import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header en haut de page */}
      <Header />
      
      {/* Contenu dynamique des pages */}
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      
      {/* Footer tout en bas */}
      <Footer />
    </div>
  );
};

export default Layout;