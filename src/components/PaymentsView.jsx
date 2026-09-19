import React, { useState } from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { getT } from '../i18n/translations';
import { formatMoney } from '../services/api';

export default function PaymentsView({ balance, onDeposit, currentLang = 'uz' }) {
  const t = getT(currentLang);
  const [selectedPreset, setSelectedPreset] = useState(100000);
  const [customAmount, setCustomAmount] = useState('100 000');
  const [selectedProvider, setSelectedProvider] = useState('payme');
  const [isSuccess, setIsSuccess] = useState(false);

  const presets = [20000, 50000, 100000, 250000, 500000, 1000000];

  const handleSelectPreset = (amt) => {
    setSelectedPreset(amt);
    setCustomAmount(amt.toLocaleString('ru-RU'));
  };

  const handleCustomChange = (e) => {
    const numeric = e.target.value.replace(/\D/g, '');
    const val = parseInt(numeric, 10) || 0;
    setSelectedPreset(val);
    setCustomAmount(val > 0 ? val.toLocaleString('ru-RU') : '');
  };

  const handleConfirm = () => {
    const rawNum = parseInt(customAmount.replace(/\D/g, ''), 10) || selectedPreset;
    if (rawNum > 0) {
      onDeposit(rawNum);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div className="payments-view-wrapper">
      <div className="container">
        
        <div className="view-header-row">
          <div>
            <h1 className="view-main-title">{t.payments.title}</h1>
            <p className="view-main-subtitle">{t.payments.subtitle}</p>
          </div>
        </div>

        <div className="wallet-layout-grid">
          
          {/* Balance Overview Card */}
          <div className="wallet-balance-card">
            <span className="wallet-badge">{t.payments.walletBadge}</span>
            <div className="wallet-balance-amount">
              <span className="currency-label">{t.payments.availableBalance}</span>
              <h2 className="wallet-amount-digit">{formatMoney(balance, t.currency)}</h2>
            </div>
            <p className="wallet-card-note">
              {t.payments.walletNote}
            </p>
            <div className="wallet-features-list">
              <div className="wf-item">
                <Check size={15} />
                <span>{t.payments.f1}</span>
              </div>
              <div className="wf-item">
                <Check size={15} />
                <span>{t.payments.f2}</span>
              </div>
              <div className="wf-item">
                <Check size={15} />
                <span>{t.payments.f3}</span>
              </div>
            </div>
          </div>

          {/* Deposit Form Card */}
          <div className="wallet-deposit-card">
            <h3 className="deposit-card-title">{t.payments.depositTitle}</h3>
            <p className="deposit-card-desc">{t.payments.depositDesc}</p>

            {/* Presets Grid */}
            <div className="amount-presets-grid">
              {presets.map(amt => (
                <button
                  key={amt}
                  type="button"
                  className={`preset-amount-btn ${selectedPreset === amt ? 'active' : ''}`}
                  onClick={() => handleSelectPreset(amt)}
                >
                  {formatMoney(amt, t.currency)}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="form-group" style={{ marginTop: '1rem' }}>
              <label htmlFor="custom-deposit-field" className="form-label">{t.payments.otherAmountLabel}</label>
              <input
                type="text"
                id="custom-deposit-field"
                className="form-field"
                value={customAmount}
                onChange={handleCustomChange}
                inputMode="numeric"
              />
            </div>

            {/* Payment Providers */}
            <div className="payment-providers-section">
              <label className="form-label">
                {currentLang === 'ru' ? 'Выберите платежную систему:' : "To'lov tizimini tanlang:"}
              </label>
              <div className="providers-grid">
                
                {/* Payme */}
                <div 
                  className={`provider-box ${selectedProvider === 'payme' ? 'active' : ''}`}
                  onClick={() => setSelectedProvider('payme')}
                >
                  <div className="provider-logo-card">
                    <img 
                      src="/images/logo-payme.png" 
                      alt="Payme" 
                      className="provider-brand-img payme-brand-img" 
                    />
                  </div>
                  <span className="provider-title">Payme</span>
                  <span className="provider-fee">{currentLang === 'ru' ? '0% комиссия' : '0% komissiya'}</span>
                </div>

                {/* Click */}
                <div 
                  className={`provider-box ${selectedProvider === 'click' ? 'active' : ''}`}
                  onClick={() => setSelectedProvider('click')}
                >
                  <div className="provider-logo-card">
                    <img 
                      src="/images/logo-click.png" 
                      alt="Click" 
                      className="provider-brand-img click-brand-img" 
                    />
                  </div>
                  <span className="provider-title">Click</span>
                  <span className="provider-fee">{currentLang === 'ru' ? '0% комиссия' : '0% komissiya'}</span>
                </div>

                {/* Uzum Bank */}
                <div 
                  className={`provider-box ${selectedProvider === 'uzum' ? 'active' : ''}`}
                  onClick={() => setSelectedProvider('uzum')}
                >
                  <div className="provider-logo-card uzum-logo-card">
                    <img 
                      src="/images/logo-uzum.png" 
                      alt="Uzum Bank" 
                      className="provider-brand-img uzum-brand-img" 
                    />
                  </div>
                  <span className="provider-title">Uzum Bank</span>
                  <span className="provider-fee">{currentLang === 'ru' ? '0% комиссия' : '0% komissiya'}</span>
                </div>

                {/* Humo / Uzcard */}
                <div 
                  className={`provider-box ${selectedProvider === 'card' ? 'active' : ''}`}
                  onClick={() => setSelectedProvider('card')}
                >
                  <div className="provider-logo-card humo-logo-card">
                    <img 
                      src="/images/logo-humo-uzcard.png" 
                      alt="Humo / Uzcard" 
                      className="provider-brand-img humo-brand-img" 
                    />
                  </div>
                  <span className="provider-title">Humo / Uzcard</span>
                  <span className="provider-fee">{currentLang === 'ru' ? 'Напрямую' : "To'g'ridan-to'g'ri"}</span>
                </div>

              </div>
            </div>

            <button 
              type="button" 
              className="btn-primary-deposit"
              onClick={handleConfirm}
            >
              <span>{t.payments.btnDeposit} ({customAmount || '0'} {t.currency})</span>
            </button>

            {isSuccess && (
              <div className="deposit-success-toast">
                <Check size={16} />
                <span>{t.payments.successMsg}</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
