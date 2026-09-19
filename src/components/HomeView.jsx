import React, { useState, useEffect } from 'react';
import { Search, Zap, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { GAMES } from '../data/games';
import { getT, getLocalizedGame } from '../i18n/translations';

const BANNER_SLIDES = [
  {
    id: 'mlbb',
    title: 'Mobile Legends',
    tag: 'Mobile Legends: Bang Bang',
    image: '/images/banner-mlbb.jpg'
  },
  {
    id: 'genshin',
    title: 'Genshin Impact',
    tag: 'Genshin Impact',
    image: '/images/banner-genshin.jpg'
  },
  {
    id: 'pubg',
    title: 'PUBG Mobile',
    tag: 'PUBG Mobile',
    image: '/images/banner-pubg.jpg'
  }
];

export default function HomeView({ onSelectGame, searchQuery, onSearchChange, currentLang = 'uz' }) {
  const t = getT(currentLang);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide rotation (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % BANNER_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide(prev => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide(prev => (prev + 1) % BANNER_SLIDES.length);
  };

  const localizedGames = GAMES.map(g => getLocalizedGame(g, currentLang));

  const filteredGames = localizedGames.filter(game => {
    if (!searchQuery) return true;
    return (
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="home-catalog-viewport">
      <div className="container">
        
        {/* WIDE CINEMATIC HERO BANNER CAROUSEL WITH SMOOTH SLIDE ANIMATION */}
        <div 
          className="carousel-banner-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Horizontal Slide Track */}
          <div 
            className="carousel-track"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {BANNER_SLIDES.map((slide, idx) => (
              <div 
                key={slide.id}
                className="carousel-slide-item"
                style={{ backgroundImage: `url(${slide.image})` }}
                onClick={() => onSelectGame(slide.id)}
              >
                <div className="carousel-slide-overlay"></div>

                {/* Slide Text Content */}
                <div className="carousel-content-box">
                  <h2 className="carousel-game-title">{slide.title}</h2>
                  <button 
                    type="button" 
                    className="carousel-cta-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectGame(slide.id);
                    }}
                  >
                    <span>{t.home.buyNow}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left/Right Arrow Navigation Controls */}
          <button 
            type="button" 
            className="carousel-arrow-btn arrow-prev" 
            onClick={handlePrevSlide}
            aria-label="Oldingi slayd"
          >
            <ChevronLeft size={22} />
          </button>
          <button 
            type="button" 
            className="carousel-arrow-btn arrow-next" 
            onClick={handleNextSlide}
            aria-label="Keyingi slayd"
          >
            <ChevronRight size={22} />
          </button>

          {/* Pagination Indicators */}
          <div className="carousel-indicators">
            {BANNER_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                aria-label={`Slayd ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Section Header: 🎮 Barcha o'yinlar & 🔍 Qidirish */}
        <div className="catalog-top-bar">
          <div className="catalog-title-wrap">
            <span className="catalog-emoji">🎮</span>
            <h1 className="catalog-main-heading">{t.home.allGames}</h1>
          </div>

          <div className="catalog-search-inline">
            <Search size={15} className="catalog-search-icon" />
            <input 
              type="text" 
              placeholder={t.home.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="catalog-search-input"
            />
          </div>
        </div>

        {/* 5-Column Games Poster Grid */}
        <div className="games-poster-grid">
          {filteredGames.map(game => {
            const isAvailable = game.status === 'available';
            return (
              <div 
                key={game.id} 
                className={`poster-card ${isAvailable ? 'interactive' : 'disabled'}`}
                onClick={() => {
                  if (isAvailable) {
                    onSelectGame(game.id);
                  }
                }}
              >
                {/* Poster Media & Badge */}
                <div className="poster-media">
                  <img src={game.image} alt={game.title} className="poster-img" />
                  
                  {/* Status Badge */}
                  {isAvailable ? (
                    <span className="poster-badge badge-available">
                      <Zap size={11} fill="currentColor" />
                      <span>{t.home.available}</span>
                    </span>
                  ) : (
                    <span className="poster-badge badge-coming-soon">
                      <Clock size={11} />
                      <span>{t.home.comingSoon}</span>
                    </span>
                  )}
                </div>

                {/* Bottom Details (Title & Subtitle ONLY, NO PRICES) */}
                <div className="poster-caption">
                  <h3 className="poster-title">{game.title}</h3>
                  <p className="poster-subtitle">{game.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
