import React from 'react';

/**
 * High-definition SVG Brand Logos for Uzbekistan Payment Systems
 * (Payme, Click, Uzum Bank, Humo & Uzcard)
 */

export function PaymeLogo({ className = '', size = 32 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Payme"
    >
      <rect width="36" height="36" rx="10" fill="url(#payme-linear)" />
      <defs>
        <linearGradient id="payme-linear" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5D4" />
          <stop offset="1" stopColor="#00A89B" />
        </linearGradient>
      </defs>
      {/* Payme Monogram 'P' */}
      <path 
        d="M12 9.5C12 8.67 12.67 8 13.5 8H19.5C23.09 8 26 10.91 26 14.5C26 18.09 23.09 21 19.5 21H15.5V26.5C15.5 27.33 14.83 28 14 28H13.5C12.67 28 12 27.33 12 26.5V9.5Z" 
        fill="#FFFFFF" 
      />
      <circle cx="19.5" cy="14.5" r="3.2" fill="#00A89B" />
    </svg>
  );
}

export function ClickLogo({ className = '', size = 32 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Click"
    >
      <rect width="36" height="36" rx="10" fill="url(#click-linear)" />
      <defs>
        <linearGradient id="click-linear" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0088FF" />
          <stop offset="1" stopColor="#0055D4" />
        </linearGradient>
      </defs>
      {/* Click Icon Symbol: Open Ring 'C' + Yellow Center Cursor Dot */}
      <path 
        d="M23.5 12.8C22.2 10.5 19.8 9 17 9C12.58 9 9 12.58 9 17C9 21.42 12.58 25 17 25C19.8 25 22.2 23.5 23.5 21.2" 
        stroke="#FFFFFF" 
        strokeWidth="3.4" 
        strokeLinecap="round" 
      />
      <circle cx="17" cy="17" r="3.4" fill="#FFD200" />
      <path 
        d="M20.5 15.5L25 12" 
        stroke="#FFD200" 
        strokeWidth="2.4" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export function UzumLogo({ className = '', size = 32 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Uzum Bank"
    >
      <rect width="36" height="36" rx="10" fill="url(#uzum-linear)" />
      <defs>
        <linearGradient id="uzum-linear" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8726E8" />
          <stop offset="1" stopColor="#5B11B8" />
        </linearGradient>
      </defs>
      {/* Uzum Signature Grape Cluster */}
      <path d="M18 7.5V10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      {/* Top row */}
      <circle cx="14.2" cy="12.5" r="2.3" fill="#FFFFFF" />
      <circle cx="21.8" cy="12.5" r="2.3" fill="#FFFFFF" />
      {/* Middle row */}
      <circle cx="10.8" cy="17" r="2.3" fill="#FFFFFF" />
      <circle cx="18" cy="17" r="2.3" fill="#FFFFFF" />
      <circle cx="25.2" cy="17" r="2.3" fill="#FFFFFF" />
      {/* Lower row */}
      <circle cx="14.2" cy="21.5" r="2.3" fill="#FFFFFF" />
      <circle cx="21.8" cy="21.5" r="2.3" fill="#FFFFFF" />
      {/* Bottom single grape */}
      <circle cx="18" cy="25.5" r="2.1" fill="#FFFFFF" />
    </svg>
  );
}

export function HumoUzcardLogo({ className = '', size = 32 }) {
  // Renders a paired dual-card badge representing both Humo and Uzcard national cards
  return (
    <svg 
      width={size * 1.3} 
      height={size} 
      viewBox="0 0 46 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Humo va Uzcard"
    >
      {/* Uzcard Card (Left / Back) */}
      <rect x="1" y="4" width="24" height="28" rx="6" fill="#0C2356" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="4" y="8" width="6" height="4.5" rx="1.2" fill="#E2B93B" />
      {/* Uzcard Wave symbol */}
      <path d="M5 18C7 18 8 16 10 16C12 16 13 18 15 18" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 21C7 21 8 19 10 19C12 19 13 21 15 21" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
      <text x="5" y="27.5" fill="#FFFFFF" fontSize="5.5" fontWeight="800" fontFamily="sans-serif">UZ</text>

      {/* Humo Card (Right / Front overlapping) */}
      <rect x="20" y="4" width="24" height="28" rx="6" fill="#009A44" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx="32" cy="13" r="3.2" fill="#FF8A00" />
      {/* Humo Bird Wing Arcs */}
      <path d="M26 21C28 17 33 16.5 37 18" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M27 24C29 20.5 33 20 36 21.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <text x="24.5" y="28" fill="#FFFFFF" fontSize="5" fontWeight="800" fontFamily="sans-serif">HUMO</text>
    </svg>
  );
}
