import React from 'react';
import { CheckCircle2, Eye, ShoppingBag } from 'lucide-react';
import { getT } from '../i18n/translations';
import { formatMoney } from '../services/api';

export default function OrdersView({ orders, onSelectOrderReceipt, onGoShop, currentLang = 'uz' }) {
  const t = getT(currentLang);
  const totalSpent = orders.reduce((sum, o) => sum + (o.amount || 0), 0);

  const formatOrderDate = (dateStr) => {
    if (!dateStr) return '';
    if (currentLang === 'ru') {
      return dateStr
        .replace('Bugun', 'Сегодня')
        .replace('Kecha', 'Вчера')
        .replace('Hozirgina', 'Только что');
    }
    return dateStr;
  };

  return (
    <div className="orders-view-wrapper">
      <div className="container">
        
        <div className="view-header-row">
          <div>
            <h1 className="view-main-title">{t.orders.title}</h1>
            <p className="view-main-subtitle">{t.orders.subtitle}</p>
          </div>
          
          <div className="orders-stats-chips">
            <div className="stat-pill">
              <span className="stat-label">{t.orders.totalOrders}</span>
              <strong>{orders.length} {t.orders.itemsCount}</strong>
            </div>
            <div className="stat-pill">
              <span className="stat-label">{t.orders.totalSpent}</span>
              <strong>{formatMoney(totalSpent, t.currency)}</strong>
            </div>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders-box">
            <ShoppingBag size={48} className="empty-icon" />
            <h3>{t.orders.emptyTitle}</h3>
            <p>{t.orders.emptyDesc}</p>
            <button type="button" className="btn-primary-deposit" onClick={onGoShop}>
              {t.orders.goToShop}
            </button>
          </div>
        ) : (
          <div className="orders-table-wrapper">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>{t.orders.thId}</th>
                  <th>{t.orders.thGamePkg}</th>
                  <th>{t.orders.thAccount}</th>
                  <th>{t.orders.thAmount}</th>
                  <th>{t.orders.thDate}</th>
                  <th>{t.orders.thStatus}</th>
                  <th style={{ textAlign: 'right' }}>{t.orders.thReceipt}</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={order.id || idx}>
                    <td>
                      <span className="order-code-badge">{order.id}</span>
                    </td>
                    <td>
                      <div className="order-product-col">
                        <strong className="order-product-game">{order.gameTitle}</strong>
                        <span className="order-product-name">{order.package}</span>
                      </div>
                    </td>
                    <td>
                      <span className="order-player-id">{order.playerInfo}</span>
                    </td>
                    <td>
                      <strong className="order-amount">{formatMoney(order.amount, t.currency)}</strong>
                    </td>
                    <td>
                      <span className="order-date">{formatOrderDate(order.date)}</span>
                    </td>
                    <td>
                      <span className="order-status-badge status-completed">
                        <CheckCircle2 size={13} />
                        {order.status === 'Bajarildi' ? t.orders.statusCompleted : order.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button 
                        type="button" 
                        className="btn-view-receipt"
                        onClick={() => onSelectOrderReceipt(order)}
                        title={t.orders.viewReceipt}
                      >
                        <Eye size={14} />
                        <span>{t.orders.viewReceipt}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
