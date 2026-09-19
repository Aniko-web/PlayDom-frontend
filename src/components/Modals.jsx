import React, { useState } from 'react';
import { X, Check, HelpCircle, Wallet } from 'lucide-react';
import { getT } from '../i18n/translations';

export function IdGuideModal({ isOpen, onClose, currentLang = 'uz' }) {
  if (!isOpen) return null;
  const t = getT(currentLang);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-window-header">
          <div className="modal-hdr-left">
            <div className="modal-hdr-icon">
              <HelpCircle size={18} />
            </div>
            <h3 className="modal-hdr-title">{t.modals.idGuideTitle}</h3>
          </div>
          <button type="button" className="modal-close-trigger" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-window-body">
          <div className="instruction-steps">
            <div className="step-inst-row">
              <div className="inst-index">1</div>
              <p>{t.modals.idGuideStep1}</p>
            </div>
            <div className="step-inst-row">
              <div className="inst-index">2</div>
              <p>{t.modals.idGuideStep2}</p>
            </div>
            <div className="sample-id-box">
              <span>ID: <strong>84920184</strong> (<strong>2041</strong>)</span>
            </div>
            <div className="step-inst-row">
              <div className="inst-index">3</div>
              <p>{t.modals.idGuideStep3}</p>
            </div>
          </div>
          <button type="button" className="btn-modal-action" onClick={onClose}>
            {t.modals.understood}
          </button>
        </div>
      </div>
    </div>
  );
}

export function OrderReceiptModal({ order, isOpen, onClose, onViewOrders, currentLang = 'uz' }) {
  if (!isOpen || !order) return null;
  const t = getT(currentLang);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window modal-receipt" onClick={(e) => e.stopPropagation()}>
        <div className="receipt-success-badge">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="receipt-success-heading">{t.modals.receiptTitle}</h3>
        <p className="receipt-success-sub">{t.modals.receiptSub}</p>

        <div className="formal-receipt-card">
          <div className="receipt-data-row">
            <span>{t.modals.receiptOrderNo}</span>
            <strong>{order.id}</strong>
          </div>
          <div className="receipt-data-row">
            <span>{t.modals.receiptGamePkg}</span>
            <strong>{order.gameTitle} — {order.package || order.packageName}</strong>
          </div>
          <div className="receipt-data-row">
            <span>{t.modals.receiptAccount}</span>
            <strong>{order.playerInfo || `${order.userId} ${order.serverId ? `(${order.serverId})` : ''}`}</strong>
          </div>
          <div className="receipt-data-row">
            <span>{t.modals.receiptPayMethod}</span>
            <span>{t.gameDetail.playdomBalance}</span>
          </div>
          <div className="receipt-separator-dash"></div>
          <div className="receipt-data-row receipt-total-line">
            <span>{t.modals.receiptPaidAmount}</span>
            <strong className="receipt-paid-num">{order.amount.toLocaleString('uz-UZ')} {t.currency}</strong>
          </div>
        </div>

        <div className="modal-dual-actions">
          <button type="button" className="btn-modal-action" onClick={onClose}>
            {t.modals.close}
          </button>
          <button 
            type="button" 
            className="btn-modal-secondary" 
            onClick={() => {
              onClose();
              if (onViewOrders) onViewOrders();
            }}
          >
            {t.modals.viewOrders}
          </button>
        </div>
      </div>
    </div>
  );
}

export function TopupModal({ isOpen, onClose, onDeposit, currentLang = 'uz' }) {
  const [selectedAmt, setSelectedAmt] = useState(50000);
  const [customInput, setCustomInput] = useState('50 000');
  const presets = [20000, 50000, 100000, 250000];
  const t = getT(currentLang);

  if (!isOpen) return null;

  const handleSelect = (amt) => {
    setSelectedAmt(amt);
    setCustomInput(amt.toLocaleString('uz-UZ'));
  };

  const handleCustomChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    const val = parseInt(raw, 10) || 0;
    setSelectedAmt(val);
    setCustomInput(val > 0 ? val.toLocaleString('uz-UZ') : '');
  };

  const handleConfirm = () => {
    const num = parseInt(customInput.replace(/\D/g, ''), 10) || selectedAmt;
    if (num > 0) {
      onDeposit(num);
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-window-header">
          <div className="modal-hdr-left">
            <div className="modal-hdr-icon">
              <Wallet size={18} />
            </div>
            <h3 className="modal-hdr-title">{t.modals.topupTitle}</h3>
          </div>
          <button type="button" className="modal-close-trigger" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-window-body">
          <p className="modal-text-desc">{t.modals.topupChoose}</p>

          <div className="modal-amount-presets">
            {presets.map(amt => (
              <button 
                key={amt}
                type="button" 
                className={`m-amt-btn ${selectedAmt === amt ? 'active' : ''}`}
                onClick={() => handleSelect(amt)}
              >
                {amt.toLocaleString('uz-UZ')} {t.currency}
              </button>
            ))}
          </div>

          <div className="form-group" style={{ marginTop: '0.85rem' }}>
            <label htmlFor="modal-custom-topup-input" className="form-label">{t.modals.topupCustomLabel}</label>
            <input 
              type="text" 
              id="modal-custom-topup-input" 
              className="form-field" 
              value={customInput}
              onChange={handleCustomChange}
              inputMode="numeric"
            />
          </div>

          <div className="modal-payment-options">
            <div className="m-pay-item active">
              <img src="/images/logo-payme.png" alt="Payme" className="m-pay-logo" />
              <span>Payme (0%)</span>
            </div>
            <div className="m-pay-item">
              <img src="/images/logo-click.png" alt="Click" className="m-pay-logo" />
              <span>Click (0%)</span>
            </div>
            <div className="m-pay-item">
              <img src="/images/logo-uzum.png" alt="Uzum" className="m-pay-logo m-pay-logo-uzum" />
              <span>Uzum (0%)</span>
            </div>
          </div>

          <button 
            type="button" 
            className="btn-modal-action" 
            onClick={handleConfirm}
            style={{ marginTop: '1rem' }}
          >
            {t.modals.topupAddBtn} ({customInput || '0'} {t.currency})
          </button>
        </div>
      </div>
    </div>
  );
}
