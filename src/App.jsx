import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import GameDetailView from './components/GameDetailView';
import OrdersView from './components/OrdersView';
import PaymentsView from './components/PaymentsView';
import FaqView from './components/FaqView';
import ProfileView from './components/ProfileView';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import AuthModal from './components/AuthModal';
import { IdGuideModal, OrderReceiptModal, TopupModal } from './components/Modals';
import { GAMES, INITIAL_ORDERS } from './data/games';
import { getLocalizedGame, getT } from './i18n/translations';

// Helper to parse current pathname into view and gameId
function parseRoute(pathname) {
  const clean = (pathname || '').replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!clean || clean === 'oyinlar' || clean === 'games') {
    return { view: 'home', gameId: null };
  }
  if (clean === 'buyurtmalar' || clean === 'orders') {
    return { view: 'orders', gameId: null };
  }
  if (clean === 'tolovlar' || clean === 'payments') {
    return { view: 'payments', gameId: null };
  }
  if (clean === 'profil' || clean === 'profile') {
    return { view: 'profile', gameId: null };
  }
  if (clean === 'faq') {
    return { view: 'faq', gameId: null };
  }
  if (clean === 'login' || clean === 'kirish') {
    return { view: 'home', gameId: null, openAuth: 'login' };
  }
  if (clean === 'register' || clean === 'signup' || clean === 'ro-yxatdan-o-tish') {
    return { view: 'home', gameId: null, openAuth: 'register' };
  }

  // Check if matches game slug or id
  const matchedGame = GAMES.find(g => {
    const slug = (g.slug || '').toLowerCase();
    const id = g.id.toLowerCase();
    return (
      clean === slug ||
      clean === id ||
      clean === slug.replace(/_/g, '-') ||
      clean === id.replace(/_/g, '-')
    );
  });

  if (matchedGame) {
    return { view: 'game', gameId: matchedGame.id };
  }

  return { view: 'home', gameId: null };
}

export default function App() {
  const initialRoute = parseRoute(window.location.pathname);
  const [currentView, setCurrentView] = useState(initialRoute.view);
  const [selectedGameId, setSelectedGameId] = useState(initialRoute.gameId || 'mlbb');
  const [balance, setBalance] = useState(150000);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('playdom_lang') || 'uz';
  });

  // User auth state
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('playdom_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    // Default active user matching screenshot
    return {
      name: 'Aniko',
      email: 'anikosanuno@gmail.com',
      avatarLetter: 'A'
    };
  });

  // Auth modal state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(!!initialRoute.openAuth);
  const [authModalTab, setAuthModalTab] = useState(initialRoute.openAuth || 'login');

  const handleOpenAuth = (tab = 'login') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('playdom_user', JSON.stringify(userData));
    if (userData.balance !== undefined) {
      setBalance(userData.balance);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('playdom_user');
  };

  const handleLangChange = (newLang) => {
    setCurrentLang(newLang);
    localStorage.setItem('playdom_lang', newLang);
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('playdom_theme') || 'dark';
  });

  // Sync theme with html root attribute
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('playdom_theme', theme);
  }, [theme]);

  // Listen to browser Back/Forward navigation (popstate)
  React.useEffect(() => {
    const onPopState = () => {
      const route = parseRoute(window.location.pathname);
      setCurrentView(route.view);
      if (route.gameId) {
        setSelectedGameId(route.gameId);
      }
      if (route.openAuth) {
        setAuthModalTab(route.openAuth);
        setIsAuthModalOpen(true);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Modals state
  const [isTopupModalOpen, setIsTopupModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [receiptModalOrder, setReceiptModalOrder] = useState(null);

  const handleNavigate = (view, gameId = null) => {
    setCurrentView(view);
    if (gameId) {
      setSelectedGameId(gameId);
      const gameObj = GAMES.find(g => g.id === gameId);
      const slug = gameObj?.slug || gameId;
      window.history.pushState({}, '', `/${slug}`);
    } else {
      const pathMap = {
        home: '/',
        orders: '/buyurtmalar',
        payments: '/tolovlar',
        profile: '/profil',
        faq: '/faq'
      };
      window.history.pushState({}, '', pathMap[view] || '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGame = (gameId) => {
    handleNavigate('game', gameId);
  };

  // Top-up deposit
  const handleDeposit = (amount) => {
    setBalance(prev => prev + amount);
  };

  // Submit Order from Game Detail
  const handleSubmitOrder = (orderData) => {
    const newOrderId = `#PD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: newOrderId,
      gameTitle: orderData.gameTitle,
      package: orderData.packageName,
      playerInfo: `${orderData.userId} ${orderData.serverId ? `(${orderData.serverId})` : ''}`,
      amount: orderData.amount,
      date: currentLang === 'ru' ? 'Только что' : 'Hozirgina',
      status: currentLang === 'ru' ? 'Выполнен' : 'Bajarildi'
    };

    // Deduct from balance if enough
    if (balance >= orderData.amount) {
      setBalance(prev => prev - orderData.amount);
    }

    setOrders(prev => [newOrder, ...prev]);
    setReceiptModalOrder(newOrder);
  };

  const baseSelectedGame = GAMES.find(g => g.id === selectedGameId) || GAMES[0];
  const selectedGame = getLocalizedGame(baseSelectedGame, currentLang);

  return (
    <>
      {/* Dynamic blurred wallpaper for dark and light modes */}
      <div className="app-wallpaper-layer" aria-hidden="true" />
      <div className="app-wallpaper-overlay" aria-hidden="true" />

      <div className="app-root">
        {/* Global Header */}
        <Header
          onNavigate={handleNavigate}
          balance={balance}
          onOpenTopup={() => {
            if (!currentUser) {
              handleOpenAuth('login');
            } else {
              setIsTopupModalOpen(true);
            }
          }}
          currentLang={currentLang}
          onChangeLang={handleLangChange}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          user={currentUser}
          onOpenAuth={() => handleOpenAuth('login')}
          onLogout={handleLogout}
        />

      {/* Main Viewport */}
      <main className="app-main-viewport">
        {currentView === 'home' && (
          <HomeView
            onSelectGame={handleSelectGame}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            currentLang={currentLang}
          />
        )}

        {currentView === 'game' && (
          <GameDetailView
            game={selectedGame}
            onBack={() => handleNavigate('home')}
            balance={balance}
            onOpenTopup={() => {
              if (!currentUser) {
                handleOpenAuth('login');
              } else {
                setIsTopupModalOpen(true);
              }
            }}
            onOpenGuide={() => setIsGuideModalOpen(true)}
            onSubmitOrder={handleSubmitOrder}
            currentLang={currentLang}
            onChangeLang={handleLangChange}
          />
        )}

        {currentView === 'orders' && (
          <OrdersView
            orders={orders}
            onSelectOrderReceipt={(order) => setReceiptModalOrder(order)}
            onGoShop={() => handleNavigate('home')}
            currentLang={currentLang}
          />
        )}

        {currentView === 'payments' && (
          <PaymentsView
            balance={balance}
            onDeposit={handleDeposit}
            currentLang={currentLang}
          />
        )}

        {currentView === 'faq' && (
          <FaqView
            currentLang={currentLang}
          />
        )}

        {currentView === 'profile' && (
          <ProfileView
            balance={balance}
            onOpenTopup={() => {
              if (!currentUser) {
                handleOpenAuth('login');
              } else {
                setIsTopupModalOpen(true);
              }
            }}
            ordersCount={orders.length}
            onNavigate={handleNavigate}
            theme={theme}
            onToggleTheme={handleToggleTheme}
            currentLang={currentLang}
            onChangeLang={handleLangChange}
            user={currentUser}
            onOpenAuth={handleOpenAuth}
            onLogout={handleLogout}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectGame={handleSelectGame}
        onNavigate={handleNavigate}
        currentLang={currentLang}
      />

      {/* Floating Center Bottom Navigation Bar */}
      <BottomNav
        currentView={currentView}
        onNavigate={handleNavigate}
        ordersCount={orders.length}
        currentLang={currentLang}
      />

      {/* Modals */}
      <IdGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        currentLang={currentLang}
      />

      <OrderReceiptModal
        order={receiptModalOrder}
        isOpen={!!receiptModalOrder}
        onClose={() => setReceiptModalOrder(null)}
        onViewOrders={() => handleNavigate('orders')}
        currentLang={currentLang}
      />

      <TopupModal
        isOpen={isTopupModalOpen}
        onClose={() => setIsTopupModalOpen(false)}
        onDeposit={handleDeposit}
        currentLang={currentLang}
      />

      {/* Auth Modal (Login / Sign Up) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authModalTab}
        currentLang={currentLang}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  </>
  );
}
