import React from 'react';
import { Send } from 'lucide-react';
import { getT } from '../i18n/translations';

export default function Footer({ onNavigate, currentLang = 'uz' }) {
  const t = getT(currentLang);

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Main 3-Column Footer Grid matching user screenshot */}
        <div className="footer-layout-grid">
          
          {/* Col 1: Brand & Socials */}
          <div className="footer-col-brand">
            <div className="footer-logo-brand">
              <span className="footer-logo-main">Playdom</span>
              <span className="footer-logo-sub">GAME TOP-UP</span>
            </div>
            <p className="footer-lead-text">
              {t.footer.leadText}
            </p>
            <div className="footer-social-row">
              <a 
                href="https://t.me/playdom_uz" 
                target="_blank" 
                rel="noreferrer" 
                className="social-pill-btn" 
                aria-label="Telegram"
              >
                <Send size={16} />
              </a>
              <a 
                href="https://instagram.com/playdom_uz" 
                target="_blank" 
                rel="noreferrer" 
                className="social-pill-btn" 
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Documents */}
          <div className="footer-col-nav">
            <h4 className="footer-col-title">{t.footer.docs}</h4>
            <ul className="footer-nav-links">
              <li>
                <button type="button" onClick={() => onNavigate && onNavigate('faq')}>
                  {t.footer.offer}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate && onNavigate('faq')}>
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate && onNavigate('faq')}>
                  {t.footer.support}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Partner */}
          <div className="footer-col-partner">
            <h4 className="footer-col-title">{t.footer.partner}</h4>
            <p className="footer-partner-desc">
              {t.footer.partnerDesc}
            </p>
            <a href="mailto:support@playdom.uz" className="footer-partner-email">
              support@playdom.uz
            </a>
          </div>

        </div>

        {/* Separator Divider */}
        <div className="footer-hr-divider"></div>

        {/* Bottom Legal Copyright */}
        <div className="footer-legal-bottom">
          <p className="footer-legal-text">
            {t.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
