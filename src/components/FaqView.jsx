import React, { useState } from 'react';
import { ChevronDown, Send, Headphones, HelpCircle } from 'lucide-react';
import { getT } from '../i18n/translations';

export default function FaqView({ currentLang = 'uz' }) {
  const t = getT(currentLang);
  const [openIndex, setOpenIndex] = useState(0);

  const faqItemsUz = [
    {
      q: "Olmoslar qancha vaqtda o'yin hisobimga tushadi?",
      a: "To'lov muvaffaqiyatli amalga oshirilgach, tizim avtomat ravishda rasmiy o'yin serveri bilan ulanadi va olmoslar 1-3 daqiqa ichida akkauntingizga yuklanadi. O'yinni bir marta qayta ishga tushirish kifoya."
    },
    {
      q: "Agar User ID yoki Server ID ni noto'g'ri kiritib qo'ysam nima bo'ladi?",
      a: "Buyurtmani tasdiqlashdan avval kiritilgan raqamlarni sinchkovlik bilan tekshirishingizni so'raymiz. Tizim to'liq avtomatlashtirilgani sababli, noto'g'ri kiritilgan begona hisobga tushgan olmoslar uchun mablag' qaytarilmaydi."
    },
    {
      q: "Playdom orqali donat qilish xavfsizmi? Akkauntimga zarar yetmaydimi?",
      a: "100% xavfsiz. Playdom faqatgina o'yin kompaniyalarining rasmiy hamkorlik shlyuzlari (Direct Top-up) orqali ishlaydi. Biz hech qachon sizdan o'yin paroli yoki maxfiy ma'lumotlarni so'ramaymiz. Faqatgina ochiq User ID kifoya."
    },
    {
      q: "Promokodni qayerdan olish mumkin va u qanday ishlaydi?",
      a: "Rasmiy Telegram kanalimiz va doimiy o'tkaziladigan tanlovlar orqali chegirma promokodlari berib boriladi. Hozirgi kunda platformamizni sinab ko'rish uchun `PLAYDOM10` promokodidan (10% chegirma) foydalanishingiz mumkin."
    },
    {
      q: "To'lov uchun qanday vositalar qabul qilinadi?",
      a: "O'zbekistondagi barcha asosiy to'lov vositalari: Payme, Click, Uzum Bank, Humo va Uzcard to'g'ridan-to'g'ri 0% komissiya bilan qabul qilinadi."
    }
  ];

  const faqItemsRu = [
    {
      q: "Как быстро алмазы и донаты поступают на игровой счет?",
      a: "После успешной оплаты система автоматически подключается к официальным серверам игры, и пополнение поступает на ваш аккаунт в течение 1–3 минут. Достаточно перезапустить игру."
    },
    {
      q: "Что произойдет, если я укажу неверный User ID или Server ID?",
      a: "Пожалуйста, внимательно проверяйте вводимые идентификаторы перед подтверждением заказа. Ввиду полной автоматизации процессов возврат средств за зачисление на чужой аккаунт не осуществляется."
    },
    {
      q: "Безопасно ли покупать через Playdom? Не заблокируют ли мой аккаунт?",
      a: "100% безопасно. Playdom работает исключительно через официальные шлюзы прямых пополнений (Direct Top-up). Мы никогда не запрашиваем пароли от вашей учетной записи или конфиденциальные данные — достаточно только публичного User ID."
    },
    {
      q: "Где можно получить промокод и как им воспользоваться?",
      a: "Промокоды на скидку регулярно публикуются в нашем официальном Telegram-канале и акциях. Вы можете протестировать систему с промокодом `PLAYDOM10`, дающим скидку 10%."
    },
    {
      q: "Какие методы оплаты доступны на платформе?",
      a: "Принимаются все популярные платежные системы Узбекистана: Payme, Click, Uzum Bank, а также любые банковские карты Uzcard и Humo без комиссии (0%)."
    }
  ];

  const faqItems = currentLang === 'ru' ? faqItemsRu : faqItemsUz;

  return (
    <div className="faq-view-wrapper">
      <div className="container">
        
        <div className="view-header-row">
          <div>
            <h1 className="view-main-title">{t.faq.title}</h1>
            <p className="view-main-subtitle">{t.faq.subtitle}</p>
          </div>
        </div>

        <div className="faq-layout-grid">
          
          {/* FAQ Accordion List */}
          <div className="faq-accordion-col">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-clean-card ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-clean-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`faq-clean-chevron ${isOpen ? 'rotate' : ''}`} size={16} />
                  </button>
                  {isOpen && (
                    <div className="faq-clean-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Support / Contact Cards */}
          <div className="faq-contact-col">
            <div className="support-box">
              <h3 className="support-title">{t.faq.supportTitle}</h3>
              <p className="support-desc">
                {t.faq.supportDesc}
              </p>

              <div className="support-links-list">
                <a href="https://t.me/playdom_support" target="_blank" rel="noreferrer" className="support-btn-link">
                  <div className="support-link-icon">
                    <Send size={18} />
                  </div>
                  <div>
                    <strong>{t.faq.operator}</strong>
                    <span>@playdom_support (24/7)</span>
                  </div>
                </a>

                <a href="https://t.me/playdom_uz" target="_blank" rel="noreferrer" className="support-btn-link">
                  <div className="support-link-icon">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <strong>{t.faq.channel}</strong>
                    <span>{t.faq.channelSub}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
