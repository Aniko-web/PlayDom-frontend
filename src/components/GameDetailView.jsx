import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, ArrowLeft, ShieldCheck, Check, 
  Tag, X, Lock, Zap, ChevronRight, Headphones, Plus, Minus,
  Info, Loader2, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { PROMO_CODES } from '../data/games';
import { formatMoney, formatNumber, calculateDiscount, playdomApi } from '../services/api';
import { getT, GAME_TRANSLATIONS_RU } from '../i18n/translations';

export default function GameDetailView({
  game,
  onBack,
  balance,
  onOpenTopup,
  onOpenGuide,
  onSubmitOrder,
  currentLang = 'uz',
  onChangeLang,
  transitionSource = 'card'
}) {
  const t = getT(currentLang);
  const heroCardRef = React.useRef(null);

  // Shared banner view-transition management (auto-cleans after transition finishes)
  const [activeSharedBanner, setActiveSharedBanner] = useState(transitionSource === 'banner');
  const [showLeavingBannerContent, setShowLeavingBannerContent] = useState(transitionSource === 'banner');

  useEffect(() => {
    if (activeSharedBanner) {
      const timer = setTimeout(() => {
        setActiveSharedBanner(false);
      }, 3300);
      return () => clearTimeout(timer);
    }
  }, [activeSharedBanner]);

  useEffect(() => {
    if (showLeavingBannerContent) {
      const timer = setTimeout(() => {
        setShowLeavingBannerContent(false);
      }, 2100);
      return () => clearTimeout(timer);
    }
  }, [showLeavingBannerContent]);

  // Direct FLIP shrink animation from the home carousel banner to the detail hero card
  React.useLayoutEffect(() => {
    if (transitionSource === 'banner' && window.__lastBannerRect && heroCardRef.current) {
      const startRect = window.__lastBannerRect;
      const isFresh = Date.now() - (startRect.timestamp || 0) < 4500;

      if (isFresh) {
        const targetRect = heroCardRef.current.getBoundingClientRect();
        if (targetRect.width > 0 && targetRect.height > 0) {
          const scaleX = startRect.width / targetRect.width;
          const scaleY = startRect.height / targetRect.height;
          const deltaX = startRect.left - targetRect.left;
          const deltaY = startRect.top - targetRect.top;

          // Align initial state to the exact dimensions and position of the home carousel banner
          heroCardRef.current.style.transformOrigin = 'top left';
          heroCardRef.current.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`;
          heroCardRef.current.style.transition = 'none';
          heroCardRef.current.style.zIndex = '35';
          heroCardRef.current.style.boxShadow = '0 25px 60px -15px rgba(0, 0, 0, 0.7)';

          // Force reflow
          void heroCardRef.current.offsetHeight;

          // Smoothly & slowly shrink down into State 2 over 3.0s
          const raf = requestAnimationFrame(() => {
            if (heroCardRef.current) {
              heroCardRef.current.style.transition = 'transform 3.0s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 3.0s cubic-bezier(0.16, 1, 0.3, 1)';
              heroCardRef.current.style.transform = 'translate3d(0, 0, 0) scale(1, 1)';
              heroCardRef.current.style.boxShadow = '';
            }
          });

          const timer = setTimeout(() => {
            if (heroCardRef.current) {
              heroCardRef.current.style.transform = '';
              heroCardRef.current.style.transformOrigin = '';
              heroCardRef.current.style.transition = '';
              heroCardRef.current.style.zIndex = '';
              heroCardRef.current.style.boxShadow = '';
            }
            window.__lastBannerRect = null;
          }, 3300);

          return () => {
            cancelAnimationFrame(raf);
            clearTimeout(timer);
          };
        }
      }
    }
  }, [transitionSource]);
  // Empty by default - server ham id ham kiritilmagunicha chiqarilmaydi
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState('');
  const [userIdTouched, setUserIdTouched] = useState(false);
  const [serverIdTouched, setServerIdTouched] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const [accountError, setAccountError] = useState(null);
  const [activeRegion, setActiveRegion] = useState('global');
  const [verifiedAccount, setVerifiedAccount] = useState(null);
  const [isCheckingAccount, setIsCheckingAccount] = useState(false);
  const [lockedNoticeToast, setLockedNoticeToast] = useState(null);

  // Auto-select first available package
  const [selectedPackage, setSelectedPackage] = useState(() => {
    return game.packages ? game.packages[0] : null;
  });

  const showUserIdError = (userIdTouched || isInteracted) && !userId.trim();
  const showServerIdError = game.hasServerId && (serverIdTouched || isInteracted) && !serverId.trim();

  // Account check on ID change via Backend API: BOTH ID AND SERVER MUST BE ENTERED
  const prevIdRef = React.useRef({ userId, serverId });
  useEffect(() => {
    if (prevIdRef.current.userId === userId && prevIdRef.current.serverId === serverId) {
      return;
    }
    prevIdRef.current = { userId, serverId };

    const cleanU = userId.trim();
    const cleanS = serverId.trim();

    // STRICT CHECK: server ham id ham kiritilmagunicha chiqarilmasin
    const hasRequiredInputs = game.hasServerId
      ? (cleanU.length >= 4 && cleanS.length >= 3)
      : (cleanU.length >= 4);

    if (hasRequiredInputs) {
      setIsCheckingAccount(true);
      setAccountError(null);
      let isCancelled = false;

      const timer = setTimeout(async () => {
        try {
          const res = await playdomApi.account.checkAccount({
            gameId: game.id,
            userId: cleanU,
            serverId: cleanS,
            hasServerId: game.hasServerId
          });

          if (!isCancelled) {
            if (res && res.success && res.data) {
              setVerifiedAccount(res.data);
              setAccountError(null);
              if (res.data.region) {
                setActiveRegion(res.data.region);
              }
            } else {
              setVerifiedAccount(null);
              setAccountError(t.gameDetail.accountNotFound || "Akkaunt topilmadi");
            }
            setIsCheckingAccount(false);
          }
        } catch (err) {
          if (!isCancelled) {
            console.error('[API Error]:', err);
            setVerifiedAccount(null);
            setAccountError(t.gameDetail.accountNotFound || "Akkaunt topilmadi");
            setIsCheckingAccount(false);
          }
        }
      }, 350);

      return () => {
        isCancelled = true;
        clearTimeout(timer);
      };
    } else {
      setVerifiedAccount(null);
      setIsCheckingAccount(false);
      setAccountError(null);
    }
  }, [userId, serverId, game.id, game.hasServerId, t]);

  // Ensure selected package is never a locked package
  useEffect(() => {
    if (selectedPackage && verifiedAccount?.used2x?.includes(selectedPackage.id)) {
      const available = (game.packages || []).find(p => !verifiedAccount.used2x.includes(p.id));
      setSelectedPackage(available || null);
    }
  }, [verifiedAccount]);

  // Promocode state
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoFeedback, setPromoFeedback] = useState(null);

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const handleToggleFaq = (idx) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  // Packages classification and 2x availability metrics
  const doublePackages = (game.packages || []).filter(pkg => pkg.category === 'double');
  const regularPackages = (game.packages || []).filter(pkg => pkg.category === 'regular' || (!pkg.category && pkg.category !== 'double' && pkg.category !== 'passes'));
  const passesPackages = (game.packages || []).filter(pkg => pkg.category === 'passes');

  const total2xCount = doublePackages.length;
  const used2xCount = doublePackages.filter(p => verifiedAccount?.used2x?.includes(p.id)).length;
  const available2xCount = Math.max(0, total2xCount - used2xCount);

  // Helper to render individual package card
  const renderPackageCard = (pkg, isDoubleSection = false) => {
    const isLocked = isDoubleSection && verifiedAccount?.used2x?.includes(pkg.id);
    const isSelected = selectedPackage && selectedPackage.id === pkg.id && !isLocked;
    const pkgName = (currentLang === 'ru' && GAME_TRANSLATIONS_RU?.[game.id]?.packages?.[pkg.id]?.name) 
      ? GAME_TRANSLATIONS_RU[game.id].packages[pkg.id].name 
      : pkg.name;

    if (isLocked) {
      return (
        <div 
          key={pkg.id} 
          className="pkg-clean-card locked-card"
          onClick={() => {
            setLockedNoticeToast(t.gameDetail.lockedNotice);
            setTimeout(() => setLockedNoticeToast(null), 3500);
          }}
          title={t.gameDetail.lockedNotice}
        >
          <div className="pkg-lock-icon-badge">
            <Lock size={13} />
          </div>
          <div className="pkg-clean-header">
            <div className="pkg-title-with-icon">
              <span className="pkg-gem-icon muted">💎</span>
              <strong className="pkg-clean-title">{pkgName}</strong>
            </div>
            <div className="pkg-clean-breakdown">
              <span>{pkg.base}</span>
              <span className="bonus-highlight">+{pkg.bonus}</span>
            </div>
          </div>
          <div className="pkg-purchased-notice">
            <Check size={12} strokeWidth={2.5} />
            <span>{t.gameDetail.alreadyPurchased}</span>
          </div>
          <div className="pkg-clean-footer">
            <span className="pkg-clean-price struck">
              {formatMoney(pkg.price, t.currency)}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div 
        key={pkg.id} 
        className={`pkg-clean-card ${isSelected ? 'selected' : ''}`}
        onClick={() => {
          setSelectedPackage(pkg);
          setLockedNoticeToast(null);
        }}
      >
        {pkg.badge && (
          <span className="pkg-clean-badge">{pkg.badge}</span>
        )}
        
        <div className="pkg-clean-header">
          <div className="pkg-title-with-icon">
            <span className="pkg-gem-icon">💎</span>
            <strong className="pkg-clean-title">{pkgName}</strong>
          </div>
          {pkg.bonus > 0 ? (
            <div className="pkg-clean-breakdown">
              <span>{pkg.base}</span>
              <span className="bonus-highlight">
                +{pkg.bonus}
              </span>
            </div>
          ) : (
            <div className="pkg-clean-breakdown">
              <span>{pkg.base > 0 ? `${pkg.base} ${game.unit}` : ''}</span>
            </div>
          )}
        </div>

        <div className="pkg-clean-footer">
          <span className="pkg-clean-price">
            {formatMoney(pkg.price, t.currency)}
          </span>
          {isSelected && (
            <span className="selected-indicator">
              <Check size={14} strokeWidth={3} />
            </span>
          )}
        </div>
      </div>
    );
  };

  // Calculate pricing via API utility
  const basePrice = selectedPackage ? Number(selectedPackage.price) : 0;
  const discountAmount = calculateDiscount(basePrice, appliedPromo);
  const finalTotal = Math.max(0, basePrice - discountAmount);

  // Handle promo code application
  const handleApplyPromo = (codeToApply) => {
    const raw = (codeToApply || promoCodeInput).trim().toUpperCase();
    if (!raw) {
      setPromoFeedback({ type: 'error', message: t.gameDetail.promoEmpty });
      return;
    }

    if (PROMO_CODES[raw]) {
      setAppliedPromo({
        code: raw,
        ...PROMO_CODES[raw]
      });
      setPromoFeedback({ 
        type: 'success', 
        message: t.gameDetail.promoApplied.replace('{code}', raw) 
      });
      setPromoCodeInput('');
    } else {
      setPromoFeedback({ type: 'error', message: t.gameDetail.promoNotFound });
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoFeedback(null);
    setPromoCodeInput('');
  };

  // Submit Order
  const handleCheckout = () => {
    if (!userId.trim() || (game.hasServerId && !serverId.trim())) {
      setIsInteracted(true);
      setUserIdTouched(true);
      setServerIdTouched(true);
      return;
    }
    if (!selectedPackage) return;

    const orderData = {
      gameId: game.id,
      gameTitle: game.title,
      packageName: selectedPackage.name,
      userId: userId.trim(),
      serverId: game.hasServerId ? serverId.trim() : null,
      amount: finalTotal,
      originalPrice: basePrice,
      discount: discountAmount,
      promoCode: appliedPromo ? appliedPromo.code : null
    };

    onSubmitOrder(orderData);
  };

  const isFormValid = userId.trim().length >= 4 && (!game.hasServerId || serverId.trim().length >= 3) && !!selectedPackage;

  return (
    <div className={`game-detail-wrapper anim-entry-${transitionSource}`}>
      <div className="container">
        
        {/* Top Back Navigation */}
        <div className="detail-top-nav">
          <button type="button" className="btn-back-breadcrumb" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>{t.gameDetail.backToAll}</span>
          </button>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="game-order-grid">
          
          {/* LEFT COLUMN: Hero Card + Steps */}
          <div className="order-steps-column">
            
            {/* HERO BANNER CARD (playdom.uz authentic design) */}
            <div 
              ref={heroCardRef}
              className="game-detail-hero-card"
              style={activeSharedBanner ? { viewTransitionName: 'hero-banner-shared' } : undefined}
            >
              <div className="hero-banner-image-container">
                <img 
                  src={game.detailBanner || game.image} 
                  alt={game.title} 
                  className="hero-banner-cover-img" 
                />
                <div className="hero-banner-overlay-gradient"></div>

                {/* Exiting Home Carousel Dark Shadow & Title/CTA (Slides left together in 2 seconds) */}
                {showLeavingBannerContent && (
                  <div className="banner-morph-leaving-layer">
                    <div className="banner-morph-leaving-dark-overlay"></div>
                    <div className="banner-morph-leaving-content">
                      <h2 className="carousel-game-title">{game.title}</h2>
                      <div className="carousel-cta-btn">
                        <span>{t.home?.buyNow || (currentLang === 'ru' ? 'Купить →' : 'Sotib olish →')}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="hero-banner-info-bar">
                <img src={game.image} alt={game.title} className="hero-banner-game-icon" />
                <div className="hero-banner-title-area">
                  <div className="hero-banner-title-row">
                    <h1 className="hero-banner-title">
                      {currentLang === 'ru' && GAME_TRANSLATIONS_RU?.[game.id]?.detailTitle
                        ? GAME_TRANSLATIONS_RU[game.id].detailTitle
                        : (game.detailTitle || `${game.title} olmoslarini to'ldirish`)}
                    </h1>
                    <span className="badge-available-status">
                      <Zap size={13} fill="currentColor" />
                      {t.gameDetail.available}
                    </span>
                  </div>
                  <p className="hero-banner-subtitle">
                    {game.detailDesc || game.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 1: Account Information */}
            <section className="order-step-card step-card-user-id">
              <div className="step-card-header-clean">
                <div className="step-badge-number-clean">1</div>
                <h2 className="step-heading-clean">{t.gameDetail.step1Title}</h2>
              </div>

              {/* Clean Inputs with validation feedback matching Playdom */}
              <div className={`clean-inputs-grid ${game.hasServerId ? '' : 'single-col'}`}>
                <div className="clean-input-group">
                  <label htmlFor="user-id-input" className="clean-input-label">
                    {t.gameDetail.userIdLabel}
                  </label>
                  <input 
                    type="text" 
                    id="user-id-input"
                    className={`clean-text-input ${showUserIdError ? 'has-error' : ''}`}
                    placeholder={t.gameDetail.userIdPlaceholder || 'User ID'}
                    value={userId}
                    onChange={(e) => {
                      setUserId(e.target.value);
                      setUserIdTouched(true);
                    }}
                    onFocus={() => {
                      setUserIdTouched(true);
                      if (game.hasServerId) setServerIdTouched(true);
                    }}
                    onBlur={() => {
                      setUserIdTouched(true);
                      if (game.hasServerId) setServerIdTouched(true);
                    }}
                    autoComplete="off"
                  />
                  {showUserIdError && (
                    <p className="clean-input-error">{t.gameDetail.userIdRequired || 'User ID kiriting'}</p>
                  )}
                </div>

                {game.hasServerId && (
                  <div className="clean-input-group">
                    <label htmlFor="server-id-input" className="clean-input-label">
                      {t.gameDetail.serverIdLabel}
                    </label>
                    <input 
                      type="text" 
                      id="server-id-input"
                      className={`clean-text-input ${showServerIdError ? 'has-error' : ''}`}
                      placeholder={t.gameDetail.serverIdPlaceholder || 'Server ID'}
                      value={serverId}
                      onChange={(e) => {
                        setServerId(e.target.value.replace(/\D/g, ''));
                        setServerIdTouched(true);
                      }}
                      onFocus={() => {
                        setServerIdTouched(true);
                        setUserIdTouched(true);
                      }}
                      onBlur={() => {
                        setServerIdTouched(true);
                        setUserIdTouched(true);
                      }}
                      maxLength={6}
                      autoComplete="off"
                    />
                    {showServerIdError && (
                      <p className="clean-input-error">{t.gameDetail.serverIdRequired || 'Server ID kiriting'}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Status: Checking Account Line (Authentic Playdom) */}
              {isCheckingAccount && (
                <div className="account-checking-line">
                  <Loader2 size={16} className="spin-loader" />
                  <span>{t.gameDetail.accountCheckingText || 'Akkaunt tekshirilmoqda...'}</span>
                </div>
              )}

              {/* Clean Verified Account Banner */}
              {!isCheckingAccount && verifiedAccount && (
                <div className="account-verified-card-clean">
                  <div className="verified-card-main-clean">
                    <CheckCircle2 size={18} className="verified-success-icon-clean" />
                    <div className="verified-player-info-clean">
                      <strong className="verified-nick-clean">{verifiedAccount.nickname}</strong>
                      <div className="verified-meta-clean">
                        {verifiedAccount.flag && <span className="region-flag-emoji">{verifiedAccount.flag}</span>}
                        <span>{verifiedAccount.regionName || verifiedAccount.country}</span>
                        {game.hasServerId && serverId && (
                          <span>• Server: {serverId}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {doublePackages.length > 0 && (
                    <div className="verified-bonus-pill-clean">
                      <span>💎 2x: {available2xCount}/{total2xCount} {t.gameDetail.availableCount || 'mavjud'}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Account Check Error */}
              {!isCheckingAccount && accountError && (
                <div className="account-error-line">
                  <AlertCircle size={15} />
                  <span>{accountError}</span>
                </div>
              )}

              <div className="clean-input-helper-notice">
                <ShieldCheck size={16} className="helper-shield-icon" />
                <span>{t.gameDetail.idNotice}</span>
              </div>
            </section>

            {/* STEP 2: Package Selection */}
            <section className="order-step-card step-card-packages">
              <div className="step-card-header flex-between">
                <div className="header-title-box">
                  <div className="step-badge-number-clean">2</div>
                  <h2 className="step-heading-clean">{t.gameDetail.step2Title}</h2>
                </div>
              </div>

              {/* Product Region Selector (Matches Screenshot 2) */}
              {game.id === 'mlbb' && (
                <div className="product-region-section">
                  <div className="product-region-label">{t.gameDetail.selectProduct}</div>
                  <div className="region-pills-row">
                    <button 
                      type="button" 
                      className={`region-pill-btn ${activeRegion === 'global' ? 'active' : ''}`}
                      onClick={() => setActiveRegion('global')}
                    >
                      <span>🇺🇿 UZB / 🌐 Global</span>
                    </button>
                    <button 
                      type="button" 
                      className={`region-pill-btn ${activeRegion === 'ru' ? 'active' : ''}`}
                      onClick={() => setActiveRegion('ru')}
                    >
                      <span>🇷🇺 RU</span>
                    </button>
                    <button 
                      type="button" 
                      className={`region-pill-btn ${activeRegion === 'id' ? 'active' : ''}`}
                      onClick={() => setActiveRegion('id')}
                    >
                      <span>🇮🇩 {currentLang === 'ru' ? 'Индонезия' : 'Indonesia'}</span>
                    </button>
                    <button 
                      type="button" 
                      className={`region-pill-btn ${activeRegion === 'tr' ? 'active' : ''}`}
                      onClick={() => setActiveRegion('tr')}
                    >
                      <span>🇹🇷 {currentLang === 'ru' ? 'Турция' : 'Turkey'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Locked Notice Alert Toast if user clicks locked card */}
              {lockedNoticeToast && (
                <div className="locked-toast-alert">
                  <Lock size={15} />
                  <span>{lockedNoticeToast}</span>
                </div>
              )}

              {/* SECTION 1: 2x Double Diamonds with clean availability badge */}
              {doublePackages.length > 0 && (
                <div className="package-section-block">
                  <div className="pkg-section-header">
                    <div className="pkg-section-title-wrap">
                      <h3 className="pkg-section-title">{t.gameDetail.section2x}</h3>
                      <button 
                        type="button" 
                        className="pkg-info-icon-btn" 
                        title="2x Diamond bonus har bir akkaunt uchun 1 martadan beriladi"
                      >
                        <Info size={14} />
                      </button>
                    </div>
                    <div className="double-avail-badge">
                      <span className={`avail-dot ${available2xCount > 0 ? 'dot-active' : 'dot-empty'}`}>●</span>
                      <span>{available2xCount} / {total2xCount} {t.gameDetail.availableCount}</span>
                    </div>
                  </div>

                  <div className="packages-cards-grid">
                    {doublePackages.map(pkg => renderPackageCard(pkg, true))}
                  </div>
                </div>
              )}

              {/* SECTION 2: Regular Diamonds */}
              {regularPackages.length > 0 && (
                <div className="package-section-block">
                  <div className="pkg-section-header">
                    <div className="pkg-section-title-wrap">
                      <h3 className="pkg-section-title">{t.gameDetail.sectionRegular}</h3>
                      <button 
                        type="button" 
                        className="pkg-info-icon-btn" 
                        title="Standart to'ldirish paketlari"
                      >
                        <Info size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="packages-cards-grid">
                    {regularPackages.map(pkg => renderPackageCard(pkg, false))}
                  </div>
                </div>
              )}

              {/* SECTION 3: Passes & Subscriptions */}
              {passesPackages.length > 0 && (
                <div className="package-section-block">
                  <div className="pkg-section-header">
                    <div className="pkg-section-title-wrap">
                      <h3 className="pkg-section-title">{t.gameDetail.sectionPasses}</h3>
                      <button 
                        type="button" 
                        className="pkg-info-icon-btn" 
                        title="Passlar va obunalar"
                      >
                        <Info size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="packages-cards-grid">
                    {passesPackages.map(pkg => renderPackageCard(pkg, false))}
                  </div>
                </div>
              )}

              {/* SECTION 2: Regular Diamonds */}
              {regularPackages.length > 0 && (
                <div className="package-section-block">
                  <div className="pkg-section-header">
                    <div className="pkg-section-title-wrap">
                      <h3 className="pkg-section-title">{t.gameDetail.sectionRegular}</h3>
                      <button 
                        type="button" 
                        className="pkg-info-icon-btn" 
                        title="Standart to'ldirish paketlari"
                      >
                        <Info size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="packages-cards-grid">
                    {regularPackages.map(pkg => renderPackageCard(pkg, false))}
                  </div>
                </div>
              )}

              {/* SECTION 3: Passes & Subscriptions */}
              {passesPackages.length > 0 && (
                <div className="package-section-block">
                  <div className="pkg-section-header">
                    <div className="pkg-section-title-wrap">
                      <h3 className="pkg-section-title">{t.gameDetail.sectionPasses}</h3>
                      <button 
                        type="button" 
                        className="pkg-info-icon-btn" 
                        title="Passlar va obunalar"
                      >
                        <Info size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="packages-cards-grid">
                    {passesPackages.map(pkg => renderPackageCard(pkg, false))}
                  </div>
                </div>
              )}
            </section>

          </div>

          {/* RIGHT COLUMN: Sticky Order Summary (Buyurtmani tasdiqlash at the top) */}
          <aside className="order-sidebar-column">
            <div className="sticky-sidebar-inner">
              
              <div className="summary-box">
                <div className="summary-box-header">
                  <div>
                    <h3 className="summary-box-title">{t.gameDetail.sidebarTitle}</h3>
                    <span className="summary-box-sub">{t.gameDetail.sidebarSubtitle}</span>
                  </div>
                </div>

                {/* Player Account Tile */}
                <div className={`summary-item-tile ${verifiedAccount ? 'filled' : ''}`}>
                  <div className="tile-icon">
                    <Check size={16} />
                  </div>
                  <div className="tile-details">
                    <span className="tile-label">{t.gameDetail.recipientAccount}</span>
                    <strong className="tile-value">
                      {verifiedAccount ? (
                        <span className="summary-verified-account-wrap">
                          <span className="summary-verified-name">{verifiedAccount.nickname}</span>
                          <span className="summary-verified-sub">({userId}{game.hasServerId && serverId ? ` / ${serverId}` : ''}) {verifiedAccount.flag}</span>
                        </span>
                      ) : (
                        <span className="summary-empty-account-placeholder">
                          {t.gameDetail.notEntered || 'Kiritilmagan'}
                        </span>
                      )}
                    </strong>
                  </div>
                  <span className={`account-check-dot ${verifiedAccount ? 'verified' : ''}`}></span>
                </div>

                {/* Selected Package Tile */}
                <div className={`summary-item-tile ${selectedPackage ? 'filled' : ''}`}>
                  <div className="tile-icon">
                    <Tag size={16} />
                  </div>
                  <div className="tile-details">
                    <span className="tile-label">{t.gameDetail.selectedPackage}</span>
                    <strong className="tile-value">
                      {selectedPackage ? selectedPackage.name : (currentLang === 'ru' ? 'Пакет не выбран' : 'Paket tanlanmagan')}
                    </strong>
                    {selectedPackage && selectedPackage.bonus > 0 && (
                      <span className="tile-subvalue">
                        {t.gameDetail.bonusOlmos.replace('{bonus}', selectedPackage.bonus).replace('{unit}', game.unit || '')}
                      </span>
                    )}
                  </div>
                  <span className="tile-price">
                    {formatMoney(basePrice, t.currency)}
                  </span>
                </div>

                {/* REDESIGNED MINIMALIST PROMOCODE MODULE (Zero neon) */}
                <div className="promocode-module">
                  <div className="promo-title-row">
                    <label htmlFor="promo-input-field" className="promo-caption">{t.gameDetail.hasPromo}</label>
                    {!appliedPromo && (
                      <button 
                        type="button" 
                        className="promo-quick-btn"
                        onClick={() => handleApplyPromo('PLAYDOM10')}
                        title={currentLang === 'ru' ? 'Применить тестовый промокод' : "Sinov promokodini qo'llash"}
                      >
                        {t.gameDetail.example} <code>PLAYDOM10</code>
                      </button>
                    )}
                  </div>

                  {!appliedPromo ? (
                    <div className="promo-input-row">
                      <input 
                        type="text" 
                        id="promo-input-field"
                        className="promo-text-field"
                        placeholder={t.gameDetail.promoPlaceholder}
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value.toUpperCase())}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleApplyPromo();
                          }
                        }}
                        autoComplete="off"
                        spellCheck="false"
                      />
                      <button 
                        type="button" 
                        className="btn-promo-apply"
                        onClick={() => handleApplyPromo()}
                      >
                        {t.gameDetail.apply}
                      </button>
                    </div>
                  ) : (
                    <div className="promo-active-bar">
                      <div className="promo-active-left">
                        <Check size={14} strokeWidth={3} />
                        <div>
                          <strong className="active-code-title">{appliedPromo.code}</strong>
                          <span className="active-code-discount">{appliedPromo.label}</span>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        className="btn-remove-promo"
                        onClick={handleRemovePromo}
                        title={currentLang === 'ru' ? 'Отменить промокод' : 'Promokodni bekor qilish'}
                      >
                        <X size={15} />
                      </button>
                    </div>
                  )}

                  {promoFeedback && (
                    <div className={`promo-feedback ${promoFeedback.type}`}>
                      {promoFeedback.message}
                    </div>
                  )}
                </div>

                {/* Integrated Payment Source */}
                <div className="payment-source-card">
                  <div className="source-top">
                    <span className="source-label">{t.gameDetail.paymentSource}</span>
                    <span className="source-wallet-title">{t.gameDetail.playdomBalance}</span>
                  </div>
                  <div className="source-bottom">
                    <span>{t.gameDetail.availableBalance} <b>{formatMoney(balance, t.currency)}</b></span>
                    <button 
                      type="button" 
                      className="sidebar-topup-action"
                      onClick={onOpenTopup}
                    >
                      {t.gameDetail.topupLink}
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="price-breakdown-list">
                  <div className="breakdown-row">
                    <span>{t.gameDetail.packagePrice}</span>
                    <span>{formatMoney(basePrice, t.currency)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="breakdown-row discount-row">
                      <span>{t.gameDetail.discount.replace('{code}', appliedPromo?.code || '')}</span>
                      <span className="discount-num">- {formatMoney(discountAmount, t.currency)}</span>
                    </div>
                  )}
                  <div className="breakdown-separator"></div>
                  <div className="breakdown-row total-row">
                    <span>{t.gameDetail.totalToPay}</span>
                    <span className="total-price-num">{formatMoney(finalTotal, t.currency)}</span>
                  </div>
                </div>

                {/* Checkout CTA Button */}
                <div className="checkout-action-section">
                  <button 
                    type="button" 
                    className="btn-primary-checkout"
                    disabled={!isFormValid}
                    onClick={handleCheckout}
                  >
                    <span>{t.gameDetail.buyBtn}</span>
                    <ChevronRight size={16} />
                  </button>
                  <p className="checkout-hint">
                    {!userId 
                      ? (currentLang === 'ru' ? 'Пожалуйста, укажите User ID' : 'Iltimos, User ID ni kiriting')
                      : (!selectedPackage 
                          ? (currentLang === 'ru' ? 'Выберите пакет' : 'Paketni tanlang') 
                          : t.gameDetail.dataCorrectNotice)}
                  </p>
                </div>

                {/* Security Guarantees */}
                <div className="security-guarantees-note">
                  <div className="sec-item">
                    <Lock size={13} />
                    <span>{t.gameDetail.safePayment}</span>
                  </div>
                  <div className="sec-item">
                    <Zap size={13} />
                    <span>{t.gameDetail.instantDelivery}</span>
                  </div>
                </div>

              </div>

            </div>
          </aside>

        </div>

        {/* GAME SEO / ABOUT DESCRIPTION SECTION */}
        {game.aboutText && game.aboutText.length > 0 && (
          <section className="game-detail-about-section">
            <div className="game-about-divider"></div>
            <h2 className="game-about-heading">
              {currentLang === 'ru' 
                ? `${game.title} ${t.gameDetail.aboutSuffix}` 
                : `${game.title} — to'ldirish haqida`}
            </h2>
            <div className="game-about-body">
              {game.aboutText.map((p, idx) => (
                <p key={idx} className="game-about-paragraph">{p}</p>
              ))}
            </div>
          </section>
        )}

        {/* GAME FAQ ACCORDION SECTION */}
        {game.faqs && game.faqs.length > 0 && (
          <section className="game-detail-faq-section">
            <h2 className="game-faq-heading">{t.gameDetail.faqSectionTitle}</h2>
            <div className="game-faq-accordion-card">
              {game.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`game-faq-item ${isOpen ? 'open' : ''}`}>
                    <button 
                      type="button" 
                      className="game-faq-question-btn"
                      onClick={() => handleToggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="game-faq-question-text">{faq.q}</span>
                      <span className="game-faq-toggle-icon">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="game-faq-answer-pane">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="game-faq-lang-footer">
              <button 
                type="button" 
                className="btn-faq-lang-toggle"
                onClick={() => {
                  setOpenFaqIndex(null);
                  if (onChangeLang) {
                    onChangeLang(currentLang === 'ru' ? 'uz' : 'ru');
                  }
                }}
              >
                <span className="lang-icon-symbol">文A</span>
                <span>{currentLang === 'ru' ? "O'zbek tilida o'qish" : "Читать на русском"}</span>
              </button>
            </div>
          </section>
        )}

      </div>

      {/* Floating Customer Support Widget matching playdom.uz */}
      <div className="floating-support-container">
        <button 
          type="button" 
          className="floating-support-btn" 
          aria-label="Qo'llab-quvvatlash"
        >
          <Headphones size={22} />
          <span className="support-badge-pulse">1</span>
        </button>
      </div>

    </div>
  );
}
