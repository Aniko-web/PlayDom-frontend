import React from 'react';
import { User, Wallet, Plus, ShieldCheck, History, HelpCircle, Sun, Moon, ArrowRight, LogOut, LogIn } from 'lucide-react';
import { getT } from '../i18n/translations';
import { formatMoney } from '../services/api';

export default function ProfileView({
  balance,
  onOpenTopup,
  ordersCount,
  onNavigate,
  theme,
  onToggleTheme,
  currentLang = 'uz',
  onChangeLang,
  user,
  onOpenAuth,
  onLogout
}) {
  const t = getT(currentLang);

  // If user is not logged in: display a clean sign in / register prompt
  if (!user) {
    return (
      <div className="profile-viewport">
        <div className="container">
          <div className="profile-login-prompt-card">
            <div className="prompt-icon-box">
              <User size={32} />
            </div>
            <h2>{t.auth?.titleLogin || 'Hisobingizga kiring'}</h2>
            <p>{t.auth?.subtitleLogin || 'Xaridlarni amalga oshirish va shaxsiy hisobingizni boshqarish uchun tizimga kiring'}</p>
            <div className="prompt-actions-row">
              <button 
                type="button" 
                className="btn-auth-submit" 
                style={{ width: 'auto', padding: '0.75rem 1.75rem' }}
                onClick={() => onOpenAuth && onOpenAuth('login')}
              >
                <LogIn size={16} />
                <span>{t.auth?.signIn || 'Kirish'}</span>
              </button>
              <button 
                type="button" 
                className="btn-modal-action" 
                style={{ width: 'auto', padding: '0.75rem 1.75rem', background: 'rgba(255, 255, 255, 0.08)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.15)' }}
                onClick={() => onOpenAuth && onOpenAuth('register')}
              >
                <span>{t.auth?.signUp || "Ro'yxatdan o'tish"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-viewport">
      <div className="container">
        
        {/* Profile Header Card */}
        <div className="profile-hero-card">
          <div className="profile-hero-main">
            <div className="profile-avatar-large">
              <span>{user.avatarLetter || (user.name ? user.name.charAt(0).toUpperCase() : 'A')}</span>
            </div>
            <div className="profile-meta-info">
              <div className="profile-badge-row">
                <span className="profile-status-pill">{t.profile.activeUser}</span>
                <span className="profile-id-pill">ID: #PD-{user.id || '984210'}</span>
              </div>
              <h1 className="profile-user-name">{user.name} {user.lastName || ''}</h1>
              <p className="profile-user-phone">{user.email || '+998 90 ••• •• 45'}</p>
            </div>
          </div>

          <div className="profile-balance-highlight">
            <div className="balance-highlight-content">
              <span className="balance-highlight-label">{t.profile.walletBalance}</span>
              <span className="balance-highlight-amount">{formatMoney(balance, t.currency)}</span>
            </div>
            <button 
              type="button" 
              className="profile-topup-btn"
              onClick={onOpenTopup}
            >
              <Plus size={16} strokeWidth={2.5} />
              <span>{t.profile.topupBtn}</span>
            </button>
          </div>
        </div>

        {/* Profile Grid Cards */}
        <div className="profile-sections-grid">
          
          {/* Quick Actions Card */}
          <div className="profile-panel-card">
            <h3 className="profile-panel-title">{t.profile.quickSections}</h3>
            <div className="profile-nav-list">
              <button 
                type="button" 
                className="profile-nav-item"
                onClick={() => onNavigate('orders')}
              >
                <div className="profile-nav-left">
                  <div className="profile-nav-icon orders">
                    <History size={18} />
                  </div>
                  <div className="profile-nav-text">
                    <span className="nav-text-title">{t.profile.myOrders}</span>
                    <span className="nav-text-sub">{ordersCount} {t.profile.ordersDesc}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="profile-nav-arrow" />
              </button>

              <button 
                type="button" 
                className="profile-nav-item"
                onClick={() => onNavigate('payments')}
              >
                <div className="profile-nav-left">
                  <div className="profile-nav-icon wallet">
                    <Wallet size={18} />
                  </div>
                  <div className="profile-nav-text">
                    <span className="nav-text-title">{t.profile.payments}</span>
                    <span className="nav-text-sub">{t.profile.paymentsDesc}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="profile-nav-arrow" />
              </button>

              <button 
                type="button" 
                className="profile-nav-item"
                onClick={() => onNavigate('faq')}
              >
                <div className="profile-nav-left">
                  <div className="profile-nav-icon faq">
                    <HelpCircle size={18} />
                  </div>
                  <div className="profile-nav-text">
                    <span className="nav-text-title">{t.profile.faq}</span>
                    <span className="nav-text-sub">{t.profile.faqDesc}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="profile-nav-arrow" />
              </button>
            </div>
          </div>

          {/* Application Settings Card */}
          <div className="profile-panel-card">
            <h3 className="profile-panel-title">{t.profile.settings}</h3>
            
            <div className="profile-setting-row">
              <div className="setting-label-col">
                <span className="setting-name">{t.profile.themeSetting}</span>
                <span className="setting-desc">
                  {theme === 'dark' ? t.profile.themeDark : t.profile.themeLight}
                </span>
              </div>
              <button 
                type="button" 
                className="setting-toggle-btn"
                onClick={onToggleTheme}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? (currentLang === 'ru' ? 'Светлая тема' : 'Kungi rejim') : (currentLang === 'ru' ? 'Темная тема' : 'Tungi rejim')}</span>
              </button>
            </div>

            <div className="profile-setting-row">
              <div className="setting-label-col">
                <span className="setting-name">{t.profile.langSetting}</span>
                <span className="setting-desc">{t.profile.currentLangLabel} {currentLang.toUpperCase()}</span>
              </div>
              <div className="setting-lang-pills">
                <button 
                  type="button" 
                  className={`setting-lang-pill ${currentLang === 'uz' ? 'active' : ''}`}
                  onClick={() => onChangeLang('uz')}
                >
                  O'zbekcha
                </button>
                <button 
                  type="button" 
                  className={`setting-lang-pill ${currentLang === 'ru' ? 'active' : ''}`}
                  onClick={() => onChangeLang('ru')}
                >
                  Русский
                </button>
              </div>
            </div>

            <div className="profile-setting-row">
              <div className="setting-label-col">
                <span className="setting-name">{currentLang === 'ru' ? 'Безопасность' : 'Xavfsizlik'}</span>
                <span className="setting-desc">
                  {currentLang === 'ru' ? 'Аккаунт защищен двухфакторной аутентификацией' : 'Shaxsiy hisob 2FA himoyasi faollashtirilgan'}
                </span>
              </div>
              <div className="security-status-tag">
                <ShieldCheck size={16} />
                <span>{currentLang === 'ru' ? 'Защищено' : 'Himoyalangan'}</span>
              </div>
            </div>

            {/* Logout button in profile settings */}
            {onLogout && (
              <div className="profile-setting-row" style={{ borderBottom: 'none', paddingTop: '0.85rem' }}>
                <div className="setting-label-col">
                  <span className="setting-name" style={{ color: '#f87171' }}>
                    {t.nav?.logout || 'Chiqish'}
                  </span>
                  <span className="setting-desc">
                    {currentLang === 'ru' ? 'Выйти из текущего аккаунта' : 'Joriy hisobdan chiqish'}
                  </span>
                </div>
                <button 
                  type="button" 
                  className="dropdown-btn-topup"
                  style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)' }}
                  onClick={onLogout}
                >
                  <LogOut size={15} />
                  <span>{t.nav?.logout || 'Chiqish'}</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
