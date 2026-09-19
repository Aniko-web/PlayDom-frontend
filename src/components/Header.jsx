import React from 'react';
import { Play, Plus, Sun, Moon, Wallet } from 'lucide-react';
import { formatMoney } from '../services/api';
import { getT } from '../i18n/translations';

export default function Header({
  onNavigate,
  balance,
  onOpenTopup,
  currentLang,
  onChangeLang,
  theme,
  onToggleTheme
}) {
  const t = getT(currentLang);

  return (
    <header className="site-header">
      <div className="container header-container">
        
        {/* Brand Logo */}
        <button 
          type="button" 
          className="brand-logo" 
          onClick={() => onNavigate('home')}
          title={t.nav.games}
        >
          <div className="logo-badge">
            <Play size={18} fill="currentColor" />
          </div>
          <div className="logo-copy">
            <span className="logo-title">Playdom<span className="logo-suffix">.uz</span></span>
            <span className="logo-tagline">GAME TOP-UP</span>
          </div>
        </button>

        {/* Header Right Actions (Pill & Circle Roundings matching PlayDom) */}
        <div className="header-right">
          {/* Language Switch Pill */}
          <div className="lang-selector">
            <button 
              type="button" 
              className={`lang-toggle ${currentLang === 'uz' ? 'active' : ''}`}
              onClick={() => onChangeLang('uz')}
            >
              UZ
            </button>
            <button 
              type="button" 
              className={`lang-toggle ${currentLang === 'ru' ? 'active' : ''}`}
              onClick={() => onChangeLang('ru')}
            >
              RU
            </button>
          </div>

          {/* Theme Switch Pill Button */}
          <button 
            type="button" 
            className="theme-toggle-btn" 
            onClick={onToggleTheme}
            title={theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
            aria-label="Rejimni almashtirish"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Balance Widget Pill (👛 0 so'm | +) */}
          <div className="user-balance-widget" title={t.nav.walletBalance}>
            <Wallet className="balance-wallet-icon" size={17} />
            <span className="balance-digit">{formatMoney(balance, t.currency)}</span>
            <span className="balance-divider" />
            <button 
              type="button" 
              className="btn-topup-trigger" 
              onClick={onOpenTopup}
              title={t.nav.topupShort}
            >
              <Plus size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* User Profile Avatar Circle (A) */}
          <button 
            type="button" 
            className="profile-avatar-btn" 
            title="Alijon S. (Mening profilim)"
            onClick={() => onNavigate('profile')}
          >
            <span>A</span>
          </button>
        </div>

      </div>
    </header>
  );
}
