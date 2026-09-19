export const GAMES = [
  {
    id: 'mlbb',
    slug: 'mobile_legends',
    title: 'Mobile Legends',
    subtitle: "Mobile Legends: Bang Bang uchun olmos to'ldirish. Player ID va Server ID kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/mlbb.jpg',
    detailBanner: '/images/mlbb-detail-banner.jpg',
    detailTitle: "Mobile Legends olmoslarini to'ldirish",
    detailDesc: "Mobile Legends: Bang Bang uchun olmos to'ldirish. Player ID va Server ID kiriting.",
    unit: 'Olmoslar',
    hasServerId: true,
    packages: [
      // 2x Double Diamonds
      { id: 'ml-2x-50', name: '2x50 Diamonds', category: 'double', base: 50, bonus: 50, price: 13000, badge: '2X BONUS' },
      { id: 'ml-2x-150', name: '150 + 150 Diamonds', category: 'double', base: 150, bonus: 150, price: 37000, badge: '2X BONUS' },
      { id: 'ml-2x-250', name: '250 + 250 Diamonds', category: 'double', base: 250, bonus: 250, price: 61000, badge: '2X BONUS' },
      { id: 'ml-2x-500', name: '500 + 500 Diamonds', category: 'double', base: 500, bonus: 500, price: 122000, badge: '2X BONUS' },
      
      // Regular Diamonds (Matching Screenshot)
      { id: 'ml-reg-5', name: '5 Diamonds', category: 'regular', base: 5, bonus: 0, price: 1300 },
      { id: 'ml-reg-12', name: '12 Diamonds', category: 'regular', base: 11, bonus: 1, price: 3000 },
      { id: 'ml-reg-19', name: '19 Diamonds', category: 'regular', base: 17, bonus: 2, price: 4500 },
      { id: 'ml-reg-28', name: '28 Diamonds', category: 'regular', base: 25, bonus: 3, price: 6500 },
      { id: 'ml-reg-44', name: '44 Diamonds', category: 'regular', base: 40, bonus: 4, price: 10000 },
      { id: 'ml-reg-59', name: '59 Diamonds', category: 'regular', base: 53, bonus: 6, price: 13500 },
      { id: 'ml-reg-86', name: '86 Diamonds', category: 'regular', base: 78, bonus: 8, price: 16500 },
      { id: 'ml-reg-172', name: '172 Diamonds', category: 'regular', base: 156, bonus: 16, price: 32000 },
      { id: 'ml-reg-257', name: '257 Diamonds', category: 'regular', base: 234, bonus: 23, price: 46000 },
      { id: 'ml-reg-343', name: '343 Diamonds', category: 'regular', base: 312, bonus: 31, price: 62000 },
      { id: 'ml-reg-706', name: '706 Diamonds', category: 'regular', base: 625, bonus: 81, price: 123000 },
      { id: 'ml-reg-1049', name: '1049 Diamonds', category: 'regular', base: 1049, bonus: 0, price: 185000, badge: 'Tavsiya' },
      { id: 'ml-reg-2195', name: '2195 Diamonds', category: 'regular', base: 1860, bonus: 335, price: 365000 },

      // Passes
      { id: 'ml-pass-weekly', name: 'Haftalik Olmos Passi', category: 'passes', base: 220, bonus: 0, price: 28000, badge: 'Arzon' },
      { id: 'ml-pass-twilight', name: 'Twilight Pass', category: 'passes', base: 1000, bonus: 0, price: 105000 }
    ]
  },
  {
    id: 'pubg',
    slug: 'pubg_mobile',
    title: 'PUBG Mobile',
    subtitle: "PUBG Mobile uchun UC to'ldirish. Player ID kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/pubg.jpg',
    detailBanner: '/images/banner-pubg.jpg',
    detailTitle: "PUBG Mobile UC to'ldirish",
    detailDesc: "PUBG Mobile UC to'ldirish. Tez kunda ishga tushadi.",
    unit: 'UC',
    hasServerId: false,
    packages: [
      { id: 'pubg-60', name: '60 UC', category: 'regular', base: 60, bonus: 0, price: 14000 },
      { id: 'pubg-325', name: '325 UC (300+25)', category: 'regular', base: 300, bonus: 25, price: 62000, badge: 'Popular' },
      { id: 'pubg-660', name: '660 UC (600+60)', category: 'regular', base: 600, bonus: 60, price: 124000, badge: 'Royale Pass' },
      { id: 'pubg-1800', name: '1800 UC', category: 'regular', base: 1500, bonus: 300, price: 310000 }
    ],
    aboutText: [
      "PUBG Mobile'da UC (Unknown Cash) — Royale Pass sotib olish, kiyim va qurol skinlarini olish hamda qutilarni ochish uchun asosiy valyuta. Playdom.uz da UC o'yin ID raqamingiz (Player ID) bo'yicha avtomatik to'ldiriladi: akkauntga kirish, parol yoki tasdiqlash kodi kerak emas.",
      "ID ni kiritishingiz bilan sahifada o'yinchi niki ko'rinadi — to'lashdan oldin uni albatta solishtiring. Keyin paketni tanlang: 60 UC dan katta paketlargacha, shuningdek Prime va Elite Pass. Narxlar so'mda, ortiqcha komissiyasiz.",
      "To'lov Playdom balansidan bir bosishda amalga oshadi, balansni Payme yoki Click orqali to'ldirish mumkin. Buyurtma holati “Buyurtmalar” bo'limida jonli yangilanadi; to'ldirish bajarilmasa summa balansingizga avtomatik qaytadi."
    ],
    faqs: [
      {
        q: "UC qancha vaqtda tushadi?",
        a: "To'lov muvaffaqiyatli amalga oshirilgach, UC tizim tomonidan avtomatik ravishda 1-5 daqiqa ichida o'yin hisobingizga yuklanadi."
      },
      {
        q: "PUBG Mobile ID mni qanday bilaman?",
        a: "PUBG Mobile o'yiniga kiring, chap yuqori burchakdagi profilingiz avatariga bosing. Profil sahifasida raqamli Player ID va nikingiz ko'rsatiladi, yonidagi nusxa olish tugmasini bosing."
      },
      {
        q: "UC nimaga kerak?",
        a: "UC (Unknown Cash) orqali Royale Pass ochishingiz, qurol va transport skinlari, maxsus kiyimlar, personajlar hamda omadli qutilarni sotib olishingiz mumkin."
      },
      {
        q: "To'lov qanday usullarda qabul qilinadi?",
        a: "Playdom platformasida Payme, Click, Uzum Bank va barcha milliy kartalar (Uzcard/Humo) orqali to'lovlar xavfsiz va tezkor qabul qilinadi."
      },
      {
        q: "Buyurtma bajarilmasa pul qaytariladimi?",
        a: "Ha, albatta. Agar biron-bir sabab bilan buyurtma amalga oshmasa yoki o'yin tizimida xatolik yuz bersa, to'langan mablag' 100% Playdom balansingizga avtomatik qaytadi."
      },
      {
        q: "Qo'llab-quvvatlash bilan qanday bog'lanaman?",
        a: "Saytning pastki qismidagi quloqchin (support) tugmasi orqali yoki Telegram (@playdom_support) orqali 24/7 operatorlarimizga murojaat qilishingiz mumkin."
      }
    ]
  },
  {
    id: 'magicchess',
    slug: 'magic_chess',
    title: 'Magic Ches Go Go',
    subtitle: "Magic Chess Go Go uchun kristall to'ldirish. Player ID va Server ID kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/magicchess.jpg',
    detailBanner: '/images/magicchess.jpg',
    detailTitle: "Magic Chess Go Go to'ldirish",
    detailDesc: "Magic Chess Go Go uchun kristall to'ldirish. Player ID va Server ID kiriting.",
    unit: 'Gems',
    hasServerId: true,
    packages: [
      { id: 'mc-50', name: '50 Kristall', category: 'regular', base: 50, bonus: 0, price: 11000 },
      { id: 'mc-150', name: '150 Kristall', category: 'regular', base: 150, bonus: 15, price: 33000 },
      { id: 'mc-500', name: '500 Kristall', category: 'regular', base: 500, bonus: 50, price: 99000 }
    ]
  },
  {
    id: 'genshin',
    slug: 'genshin_impact',
    title: 'Genshin Impact',
    subtitle: "Genshin Impact uchun kristallar to'ldirish. UID va Server kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/genshin.jpg',
    detailBanner: '/images/banner-genshin.jpg',
    detailTitle: "Genshin Impact kristallarini to'ldirish",
    detailDesc: "Genshin Impact uchun kristallar to'ldirish. UID va Server kiriting.",
    unit: 'Crystals',
    hasServerId: true,
    packages: [
      { id: 'gi-60', name: '60 Genesis Crystals', category: 'regular', base: 60, bonus: 0, price: 15000 },
      { id: 'gi-300', name: '300+30 Crystals', category: 'regular', base: 300, bonus: 30, price: 62000 },
      { id: 'gi-pass-welkin', name: 'Blessing of the Welkin Moon', category: 'passes', base: 3000, bonus: 0, price: 65000, badge: 'Oylik obuna' }
    ]
  },
  {
    id: 'roblox',
    slug: 'roblox',
    title: 'Roblox',
    subtitle: "Roblox uchun Robux to'ldirish. Foydalanuvchi nomini kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/roblox.jpg',
    detailBanner: '/images/roblox.jpg',
    detailTitle: "Roblox Robux to'ldirish",
    detailDesc: "Roblox uchun Robux to'ldirish. Foydalanuvchi nomini kiriting.",
    unit: 'Robux',
    hasServerId: false,
    packages: [
      { id: 'rbx-400', name: '400 Robux', category: 'regular', base: 400, bonus: 0, price: 65000 },
      { id: 'rbx-800', name: '800 Robux', category: 'regular', base: 800, bonus: 0, price: 129000 }
    ]
  },
  {
    id: 'wuthering',
    slug: 'wuthering_waves',
    title: 'Wuthering Waves',
    subtitle: "Wuthering Waves uchun Lunite to'ldirish. User ID va Server kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/wuthering.jpg',
    detailBanner: '/images/wuthering.jpg',
    detailTitle: "Wuthering Waves Lunite to'ldirish",
    detailDesc: "Wuthering Waves uchun Lunite to'ldirish. User ID va Server kiriting.",
    unit: 'Lunite',
    hasServerId: true,
    packages: [
      { id: 'ww-60', name: '60 Lunite', category: 'regular', base: 60, bonus: 0, price: 15000 },
      { id: 'ww-300', name: '300+30 Lunite', category: 'regular', base: 300, bonus: 30, price: 65000 }
    ]
  },
  {
    id: 'freefire',
    slug: 'free_fire',
    title: 'Free Fire',
    subtitle: "Free Fire uchun olmos to'ldirish. Player ID kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/freefire.jpg',
    detailBanner: '/images/freefire.jpg',
    detailTitle: "Free Fire olmoslarini to'ldirish",
    detailDesc: "Free Fire uchun olmos to'ldirish. Player ID kiriting.",
    unit: 'Diamonds',
    hasServerId: false,
    packages: [
      { id: 'ff-100', name: '100+10 Diamonds', category: 'regular', base: 100, bonus: 10, price: 12000 },
      { id: 'ff-310', name: '310+31 Diamonds', category: 'regular', base: 310, bonus: 31, price: 36000 },
      { id: 'ff-520', name: '520+52 Diamonds', category: 'regular', base: 520, bonus: 52, price: 60000 }
    ]
  },
  {
    id: 'telegram',
    slug: 'telegram_stars',
    title: 'Telegram Stars',
    subtitle: "Telegram akkauntingiz uchun yulduzlar (Stars) to'ldirish. @username kiriting.",
    status: 'available',
    statusLabel: 'Mavjud',
    image: '/images/telegram.jpg',
    detailBanner: '/images/telegram.jpg',
    detailTitle: "Telegram Stars xarid qilish",
    detailDesc: "Telegram akkauntingiz uchun yulduzlar (Stars) to'ldirish. @username kiriting.",
    unit: 'Stars',
    hasServerId: false,
    packages: [
      { id: 'tg-50', name: '50 Stars', category: 'regular', base: 50, bonus: 0, price: 18000 },
      { id: 'tg-100', name: '100 Stars', category: 'regular', base: 100, bonus: 0, price: 35000 },
      { id: 'tg-250', name: '250 Stars', category: 'regular', base: 250, bonus: 0, price: 86000 }
    ]
  },
  {
    id: 'hok',
    slug: 'honor_of_kings',
    title: 'Honor of Kings',
    subtitle: "Tez kunda mavjud bo'ladi",
    status: 'coming_soon',
    statusLabel: 'Tez kunda',
    image: '/images/hok.jpg',
    detailBanner: '/images/hok.jpg',
    detailTitle: "Honor of Kings to'ldirish",
    detailDesc: "Honor of Kings tez kunda platformamizda ishga tushadi.",
    unit: 'Tokens',
    hasServerId: true,
    packages: []
  },
  {
    id: 'valorant',
    slug: 'valorant',
    title: 'Valorant',
    subtitle: "VP to'ldirish. Tez kunda",
    status: 'coming_soon',
    statusLabel: 'Tez kunda',
    image: '/images/valorant.jpg',
    detailBanner: '/images/valorant.jpg',
    detailTitle: "Valorant VP to'ldirish",
    detailDesc: "Valorant VP tez kunda platformamizda ishga tushadi.",
    unit: 'VP',
    hasServerId: false,
    packages: []
  }
];

export const PROMO_CODES = {
  'PLAYDOM10': { type: 'percent', value: 10, label: '-10% chegirma' },
  'BONUS5': { type: 'fixed', value: 5000, label: "-5 000 so'm chegirma" },
  'MLBB2026': { type: 'percent', value: 15, label: '-15% chegirma' }
};

export const INITIAL_ORDERS = [
  {
    id: '#PD-849201',
    gameTitle: 'Mobile Legends',
    package: '2x150 Diamonds',
    playerInfo: '84920184 (2041)',
    amount: 32000,
    date: 'Bugun, 17:40',
    status: 'Bajarildi'
  },
  {
    id: '#PD-741938',
    gameTitle: 'Mobile Legends',
    package: 'Haftalik Olmos Passi',
    playerInfo: '84920184 (2041)',
    amount: 28000,
    date: 'Kecha, 14:15',
    status: 'Bajarildi'
  }
];
