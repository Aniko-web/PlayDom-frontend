import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Check, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { getT } from '../i18n/translations';
import { playdomApi } from '../services/api';

export default function AuthModal({
  isOpen,
  onClose,
  initialTab = 'login',
  currentLang = 'uz',
  onAuthSuccess
}) {
  if (!isOpen) return null;

  const t = getT(currentLang);
  const authT = t.auth || {};

  const [activeTab, setActiveTab] = useState(initialTab); // 'login' | 'register'
  
  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register fields
  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [consentChecked, setConsentChecked] = useState(true);

  // Status states
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const resetForm = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(false);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    resetForm();
  };

  // Handle Login Submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const email = loginEmail.trim();
    const pass = loginPassword.trim();

    if (!email || !pass) {
      setErrorMessage(authT.fillAllFields || "Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate/call authentication service
      await new Promise(r => setTimeout(r, 600));

      let displayName = 'Aniko';
      if (email.includes('@')) {
        const localPart = email.split('@')[0];
        displayName = localPart.charAt(0).toUpperCase() + localPart.slice(1);
      } else if (email) {
        displayName = email.charAt(0).toUpperCase() + email.slice(1);
      }

      const userData = {
        name: displayName,
        email: email.includes('@') ? email : `${email}@gmail.com`,
        avatarLetter: displayName.charAt(0).toUpperCase(),
        balance: 150000
      };

      setSuccessMessage(authT.loginSuccess || "Muvaffaqiyatli kirdingiz!");
      setTimeout(() => {
        onAuthSuccess(userData);
        onClose();
      }, 500);
    } catch (err) {
      setErrorMessage(authT.loginError || "Email yoki parol noto'g'ri");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Register Submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const fName = regFirstName.trim();
    const lName = regLastName.trim();
    const email = regEmail.trim();
    const pass = regPassword.trim();
    const confirm = regConfirmPassword.trim();

    if (!fName || !email || !pass) {
      setErrorMessage(authT.fillAllFields || "Iltimos, barcha majburiy maydonlarni to'ldiring");
      return;
    }

    if (pass.length < 6) {
      setErrorMessage(authT.passwordTooShort || "Parol kamida 6 belgidan iborat bo'lishi kerak");
      return;
    }

    if (confirm && pass !== confirm) {
      setErrorMessage(authT.passwordsDoNotMatch || "Parollar mos kelmadi");
      return;
    }

    if (!consentChecked) {
      setErrorMessage(authT.consentRequired || "Iltimos, shartlarga rozilik bildiring");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(r => setTimeout(r, 700));

      const userData = {
        name: fName,
        lastName: lName,
        email: email,
        avatarLetter: fName.charAt(0).toUpperCase(),
        balance: 0
      };

      setSuccessMessage(authT.registerSuccess || "Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      setTimeout(() => {
        onAuthSuccess(userData);
        onClose();
      }, 600);
    } catch (err) {
      setErrorMessage(err.message || "Xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-backdrop auth-modal-backdrop" onClick={onClose}>
      <div 
        className="modal-window auth-modal-window" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Close Button */}
        <button 
          type="button" 
          className="auth-modal-close" 
          onClick={onClose}
          aria-label="Yopish"
        >
          <X size={18} />
        </button>

        {/* Modal Header & Tabs */}
        <div className="auth-header-wrapper">
          <div className="auth-pill-tabs">
            <button 
              type="button" 
              className={`auth-pill-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => switchTab('login')}
            >
              {authT.signIn || 'Kirish'}
            </button>
            <button 
              type="button" 
              className={`auth-pill-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => switchTab('register')}
            >
              {authT.signUp || "Ro'yxatdan o'tish"}
            </button>
          </div>

          <h3 className="auth-modal-title">
            {activeTab === 'login' 
              ? (authT.titleLogin || 'Hisobingizga kiring') 
              : (authT.titleRegister || "Ro'yxatdan o'tish")}
          </h3>
          <p className="auth-modal-subtitle">
            {activeTab === 'login' 
              ? (authT.subtitleLogin || 'Xaridlarni amalga oshirish uchun hisobingizga kiring') 
              : (authT.subtitleRegister || "Playdom imkoniyatlaridan foydalanish uchun hisob yarating")}
          </p>
        </div>

        {/* Status Alerts */}
        {errorMessage && (
          <div className="auth-alert-box error">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="auth-alert-box success">
            <CheckCircle2 size={16} />
            <span>{successMessage}</span>
          </div>
        )}

        {/* TAB 1: LOGIN FORM */}
        {activeTab === 'login' && (
          <form className="auth-form-body" onSubmit={handleLoginSubmit}>
            <div className="auth-field-group">
              <label className="auth-field-label">
                {authT.loginOrEmail || 'Login yoki email'}
              </label>
              <div className="auth-input-box">
                <Mail size={16} className="auth-input-icon" />
                <input 
                  type="text" 
                  className="auth-text-input"
                  placeholder={authT.loginOrEmailPlaceholder || 'example@gmail.com'}
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="auth-field-group">
              <div className="auth-label-row">
                <label className="auth-field-label">
                  {authT.password || 'Parol'}
                </label>
              </div>
              <div className="auth-input-box">
                <Lock size={16} className="auth-input-icon" />
                <input 
                  type={showLoginPassword ? 'text' : 'password'} 
                  className="auth-text-input"
                  placeholder={authT.passwordPlaceholder || 'Parolni kiriting'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button 
                  type="button" 
                  className="auth-btn-eye" 
                  onClick={() => setShowLoginPassword(v => !v)}
                  tabIndex={-1}
                >
                  {showLoginPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-auth-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="spin-loader" />
                  <span>{authT.pleaseWait || 'Iltimos, kuting...'}</span>
                </>
              ) : (
                <span>{authT.signIn || 'Kirish'}</span>
              )}
            </button>

            <div className="auth-footer-switch">
              <span className="auth-switch-prompt">{authT.noAccount || "Hisobingiz yo'qmi?"}</span>
              <button 
                type="button" 
                className="auth-switch-link"
                onClick={() => switchTab('register')}
              >
                {authT.signUp || "Ro'yxatdan o'tish"}
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: REGISTER FORM */}
        {activeTab === 'register' && (
          <form className="auth-form-body" onSubmit={handleRegisterSubmit}>
            <div className="auth-row-2col">
              <div className="auth-field-group">
                <label className="auth-field-label">
                  {authT.firstName || 'Ism'}
                </label>
                <div className="auth-input-box">
                  <User size={16} className="auth-input-icon" />
                  <input 
                    type="text" 
                    className="auth-text-input"
                    placeholder={authT.firstNamePlaceholder || 'Ismingiz'}
                    value={regFirstName}
                    onChange={(e) => setRegFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-field-group">
                <label className="auth-field-label">
                  {authT.lastName || 'Familiya'}
                </label>
                <div className="auth-input-box">
                  <User size={16} className="auth-input-icon" />
                  <input 
                    type="text" 
                    className="auth-text-input"
                    placeholder={authT.lastNamePlaceholder || 'Familiyangiz'}
                    value={regLastName}
                    onChange={(e) => setRegLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="auth-field-group">
              <label className="auth-field-label">
                {authT.email || 'Email'}
              </label>
              <div className="auth-input-box">
                <Mail size={16} className="auth-input-icon" />
                <input 
                  type="email" 
                  className="auth-text-input"
                  placeholder={authT.emailPlaceholder || 'example@gmail.com'}
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-field-group">
              <label className="auth-field-label">
                {authT.password || 'Parol'}
              </label>
              <div className="auth-input-box">
                <Lock size={16} className="auth-input-icon" />
                <input 
                  type={showRegPassword ? 'text' : 'password'} 
                  className="auth-text-input"
                  placeholder={authT.passwordPlaceholder || 'Kamida 6 belgi'}
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="auth-btn-eye" 
                  onClick={() => setShowRegPassword(v => !v)}
                  tabIndex={-1}
                >
                  {showRegPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Consent agreement checkbox */}
            <label className="auth-consent-label">
              <input 
                type="checkbox" 
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="auth-checkbox"
              />
              <span className="auth-consent-text">
                {authT.consentPrefix || 'Men '}
                <a href="/offerta" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="auth-link-terms">
                  {authT.offer || 'ommaviy oferta'}
                </a>
                {authT.consentMiddle || ' va '}
                <a href="/privacy" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="auth-link-terms">
                  {authT.privacy || 'maxfiylik siyosati'}
                </a>
                {authT.consentSuffix || ' shartlariga roziman'}
              </span>
            </label>

            <button 
              type="submit" 
              className="btn-auth-submit"
              disabled={isLoading || !consentChecked}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="spin-loader" />
                  <span>{authT.pleaseWait || 'Iltimos, kuting...'}</span>
                </>
              ) : (
                <span>{authT.signUp || "Ro'yxatdan o'tish"}</span>
              )}
            </button>

            <div className="auth-footer-switch">
              <span className="auth-switch-prompt">{authT.haveAccount || "Akkauntingiz bormi?"}</span>
              <button 
                type="button" 
                className="auth-switch-link"
                onClick={() => switchTab('login')}
              >
                {authT.signIn || 'Kirish'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
