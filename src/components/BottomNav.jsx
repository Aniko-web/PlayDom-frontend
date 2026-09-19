import React from 'react';
import { Gamepad2, FileText, CreditCard, User } from 'lucide-react';
import { getT } from '../i18n/translations';

export default function BottomNav({ currentView, onNavigate, ordersCount, currentLang = 'uz' }) {
  const t = getT(currentLang);

  const navItems = [
    {
      id: 'home',
      label: t.nav.games,
      icon: Gamepad2,
    },
    {
      id: 'orders',
      label: t.nav.orders,
      icon: FileText,
      badge: ordersCount > 0 ? ordersCount : null,
    },
    {
      id: 'payments',
      label: t.nav.payments,
      icon: CreditCard,
    },
    {
      id: 'profile',
      label: t.nav.profile,
      icon: User,
    }
  ];

  return (
    <nav className="bottom-dock-nav" aria-label="Asosiy navigatsiya">
      <div className="bottom-dock-inner">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`bottom-dock-item ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="bottom-dock-icon-wrap">
                <Icon size={18} strokeWidth={isActive ? 2.3 : 1.9} />
              </span>
              <span className="bottom-dock-label">{item.label}</span>
              {item.badge !== null && item.badge !== undefined && (
                <span className="bottom-dock-badge">{item.badge}</span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
