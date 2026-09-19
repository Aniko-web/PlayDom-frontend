import React from 'react';
import { User, Wallet, Plus, ShieldCheck, History, HelpCircle, Sun, Moon, ArrowRight } from 'lucide-react';
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
  onChangeLang
}) {
  const t = getT(currentLang);

  return (
    <div className="profile-viewport">
      <div className="container">
        
        {/* Profile Header Card */}
        <div className="profile-hero-card">
          <div className="profile-hero-main">
            <div className="profile-avatar-large">
              <span>A</span>
            </div>
            <div className="profile-meta-info">
              <div className="profile-badge-row">
                <span className="profile-status-pill">{t.profile.activeUser}</span>
                <span className="profile-id-pill">ID: #PD-984210</span>
              </div>
              <h1 className="profile-user-name">Aniko</h1>
              <p className="profile-user-phone">anikosanuno@gmail.com</p>
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
                <div className="profile-nav-icon">
                  <History size={18} />
                </div>
                <div className="profile-nav-text">
                  <span className="profile-nav-heading">{t.profile.myOrders}</span>
                  <span className="profile-nav-desc">{ordersCount} {t.profile.ordersDesc}</span>
                </div>
                <ArrowRight size={16} className="profile-nav-arrow" />
              </button>

              <button 
                type="button" 
                className="profile-nav-item"
                onClick={() => onNavigate('payments')}
              >
                <div className="profile-nav-icon">
                  <Wallet size={18} />
                </div>
                <div className="profile-nav-text">
                  <span className="profile-nav-heading">{t.profile.payments}</span>
                  <span className="profile-nav-desc">{t.profile.paymentsDesc}</span>
                </div>
                <ArrowRight size={16} className="profile-nav-arrow" />
              </button>

              <button 
                type="button" 
                className="profile-nav-item"
                onClick={() => onNavigate('faq')}
              >
                <div className="profile-nav-icon">
                  <HelpCircle size={18} />
                </div>
                <div className="profile-nav-text">
                  <span className="profile-nav-heading">{t.profile.faq}</span>
                  <span className="profile-nav-desc">{t.profile.faqDesc}</span>
                </div>
                <ArrowRight size={16} className="profile-nav-arrow" />
              </button>
            </div>
          </div>

          {/* Settings & Security Card */}
          <div className="profile-panel-card">
            <h3 className="profile-panel-title">{t.profile.settings}</h3>
            
            <div className="profile-setting-row">
              <div className="setting-label-col">
                <span className="setting-name">{t.profile.themeSetting}</span>
                <span className="setting-desc">
                  {theme === 'dark' 
                    ? (currentLang === 'ru' ? 'Активна темная тема' : 'Tungi rejim faol') 
                    : (currentLang === 'ru' ? 'Активна светлая тема' : 'Kungi rejim faol')}
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

          </div>

        </div>

      </div>
    </div>
  );
}
