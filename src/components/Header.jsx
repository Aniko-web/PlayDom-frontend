import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, Sun, Moon, Wallet, User, LogOut, LogIn } from 'lucide-react';
import { formatMoney } from '../services/api';
import { getT } from '../i18n/translations';

// Exact ticket/receipt with dollar sign icon matching user screenshot
function ReceiptDollarIcon({ size = 18, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M15 8h-4a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H9" />
      <path d="M12 6.5v11" />
    </svg>
  );
}

export default function Header({
  onNavigate,
  balance,
  onOpenTopup,
  currentLang,
  onChangeLang,
  theme,
  onToggleTheme,
  user,
  onOpenAuth,
  onLogout
}) {
  const t = getT(currentLang);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  // Close dropdown on click outside or ESC key
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsProfileMenuOpen(false);
      }
    }
    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProfileMenuOpen]);

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

          {/* If user is logged in: show balance & profile menu */}
          {user ? (
            <>
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

              {/* User Profile Avatar with Dropdown Menu */}
              <div className="profile-menu-container" ref={profileMenuRef}>
                <button 
                  type="button" 
                  className={`profile-avatar-btn ${isProfileMenuOpen ? 'active' : ''}`} 
                  title={`${user.name} (${user.email})`}
                  onClick={() => setIsProfileMenuOpen(prev => !prev)}
                  aria-expanded={isProfileMenuOpen}
                  aria-haspopup="true"
                >
                  <span>{user.avatarLetter || (user.name ? user.name.charAt(0).toUpperCase() : 'A')}</span>
                </button>

                {/* Profile Dropdown Card */}
                {isProfileMenuOpen && (
                  <div className="profile-dropdown-card" role="menu">
                    {/* 1. User Info Header */}
                    <div className="dropdown-user-header">
                      <h4 className="dropdown-user-name">{user.name}</h4>
                      <span className="dropdown-user-email">{user.email}</span>
                    </div>

                    {/* 2. Balance & Topup Row */}
                    <div className="dropdown-balance-section">
                      <div className="dropdown-balance-info">
                        <span className="dropdown-balance-label">{t.nav.balance}</span>
                        <strong className="dropdown-balance-amount">{formatMoney(balance, t.currency)}</strong>
                      </div>
                      <button 
                        type="button" 
                        className="dropdown-btn-topup"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          onOpenTopup();
                        }}
                      >
                        <Plus size={14} strokeWidth={2.5} />
                        <span>{t.nav.topUp}</span>
                      </button>
                    </div>

                    {/* 3. Navigation Links List */}
                    <div className="dropdown-menu-links">
                      <button 
                        type="button" 
                        className="dropdown-menu-link"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          onNavigate('profile');
                        }}
                      >
                        <User size={18} className="dropdown-link-icon" />
                        <span>{t.nav.profile}</span>
                      </button>

                      <button 
                        type="button" 
                        className="dropdown-menu-link"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          onNavigate('orders');
                        }}
                      >
                        <ReceiptDollarIcon size={18} className="dropdown-link-icon" />
                        <span>{t.nav.myOrders}</span>
                      </button>

                      <button 
                        type="button" 
                        className="dropdown-menu-link"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          onNavigate('payments');
                        }}
                      >
                        <Wallet size={18} className="dropdown-link-icon" />
                        <span>{t.nav.myPayments}</span>
                      </button>
                    </div>

                    {/* 4. Logout Option */}
                    <div className="dropdown-logout-section">
                      <button 
                        type="button" 
                        className="dropdown-menu-link dropdown-link-logout"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          if (onLogout) onLogout();
                        }}
                      >
                        <LogOut size={18} className="dropdown-link-icon" />
                        <span>{t.nav.logout}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* If not logged in: show Kirish (Log In) button matching PlayDom */
            <button 
              type="button" 
              className="btn-header-login"
              onClick={onOpenAuth}
            >
              <LogIn size={15} />
              <span>{t.auth?.signIn || 'Kirish'}</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
