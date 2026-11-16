import React from 'react';

interface Props {
  height?: number;
  /** 'dark' = fond sombre (header/footer dark), 'light' = fond clair */
  variant?: 'dark' | 'light';
}

/**
 * Logo WinTech reproduit fidèlement :
 * - W stylisé bleu navy avec swoosh vert
 * - "Win" en navy, "Tech" en vert électrique
 * - Tagline "INNOVATION · DÉVELOPPEMENT · SOLUTIONS DIGITALES"
 */
const WinTechLogo: React.FC<Props> = ({ height = 48, variant = 'dark' }) => {
  const textMain = variant === 'dark' ? '#ffffff' : '#0A1628';
  const taglineColor = variant === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(10,22,40,0.5)';

  return (
    <svg
      viewBox="0 0 260 72"
      height={height}
      aria-label="WinTech"
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* ---- Icône W + swoosh ---- */}
      {/* Corps du W — bleu navy */}
      <path
        d="M6 12 L14 44 L22 24 L30 44 L38 12"
        stroke="#0A1628"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Swoosh vert qui entoure le W */}
      <path
        d="M2 32 C8 8, 36 4, 44 22 C50 36, 42 52, 28 56 C18 58, 8 54, 4 46"
        stroke="url(#swooshGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Petits carrés pixelisés en haut à droite du W (référence au logo) */}
      <rect x="36" y="6" width="5" height="5" rx="1" fill="#00C896" opacity="0.9"/>
      <rect x="42" y="6" width="4" height="4" rx="1" fill="#00C896" opacity="0.7"/>
      <rect x="36" y="12" width="4" height="4" rx="1" fill="#00C896" opacity="0.5"/>

      {/* Dégradé pour le swoosh */}
      <defs>
        <linearGradient id="swooshGrad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#00C896"/>
          <stop offset="100%" stopColor="#00e8b0"/>
        </linearGradient>
      </defs>

      {/* ---- Texte "Win" ---- */}
      <text
        x="58"
        y="42"
        fontFamily="'Lexend', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill={textMain}
        letterSpacing="-0.5"
      >Win</text>

      {/* ---- Texte "Tech" en vert ---- */}
      <text
        x="104"
        y="42"
        fontFamily="'Lexend', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill="#00C896"
        letterSpacing="-0.5"
      >Tech</text>

      {/* ---- Tagline ---- */}
      <text
        x="58"
        y="58"
        fontFamily="'Lexend', -apple-system, sans-serif"
        fontWeight="500"
        fontSize="7"
        fill={taglineColor}
        letterSpacing="1.2"
      >INNOVATION · DÉVELOPPEMENT · SOLUTIONS DIGITALES</text>
    </svg>
  );
};

export default WinTechLogo;
