/**
 * PlayDom.uz Comprehensive Localization & i18n System
 * High-quality translations for Uzbek (UZ) and Russian (RU)
 */

export const TRANSLATIONS = {
  uz: {
    currency: "so'm",
    nav: {
      games: "O'yinlar",
      orders: "Buyurtmalar",
      payments: "To'lovlar",
      profile: "Profil",
      walletBalance: "Hamyon balansi",
      lightMode: "Kungi rejimga o'tish (Light Mode)",
      darkMode: "Tungi rejimga o'tish (Dark Mode)",
      topupShort: "+ To'ldirish",
      balance: "Balans",
      myOrders: "Buyurtmalarim",
      myPayments: "To'lovlarim",
      topUp: "To'ldirish",
      logout: "Chiqish"
    },
    home: {
      allGames: "Barcha o'yinlar",
      searchPlaceholder: "Qidirish...",
      available: "Mavjud",
      comingSoon: "Tez kunda",
      buyNow: "Sotib olish →",
      slides: [
        { title: "Mobile Legends", action: "Sotib olish →" },
        { title: "Genshin Impact", action: "Sotib olish →" },
        { title: "PUBG Mobile", action: "Sotib olish →" }
      ]
    },
    gameDetail: {
      backToAll: "Barcha o'yinlar",
      available: "Mavjud",
      comingSoon: "Tez kunda",
      step1Title: "User ID kiriting",
      howToFindId: "ID qayerdan olinadi?",
      userIdLabel: "User ID",
      serverIdLabel: "Server ID",
      userIdPlaceholder: "User ID",
      serverIdPlaceholder: "Server ID",
      userIdRequired: "User ID kiriting",
      serverIdRequired: "Server ID kiriting",
      idNotice: "ID ni to'g'ri kiriting — noto'g'ri ID uchun mablag' qaytarilmaydi.",
      step2Title: "Paketni tanlang",
      step2Subtitle: "Kerakli miqdorni tanlang",
      tabAll: "Barchasi",
      tabDouble: "2x Bonus",
      tabRegular: "Standart Paketlar",
      tabPasses: "Passlar / Obuna",
      bonusBadge: "+{bonus} bonus",
      sidebarTitle: "Buyurtmani tasdiqlash",
      sidebarSubtitle: "Hisob-kitob va rasmiylashtirish",
      recipientAccount: "Qabul qiluvchi akkaunt:",
      selectedPackage: "Tanlangan paket:",
      bonusOlmos: "Bonus: +{bonus} {unit}",
      hasPromo: "Promokod bormi?",
      example: "Namuna:",
      promoPlaceholder: "PROMOKODNI KIRITING",
      apply: "Qo'llash",
      promoEmpty: "Iltimos, promokodni kiriting",
      promoNotFound: "Bunday promokod mavjud emas yoki muddati tugagan",
      promoApplied: "\"{code}\" promokodi qo'llandi!",
      paymentSource: "To'lov manbai:",
      playdomBalance: "Playdom Balansi",
      availableBalance: "Mavjud qoldiq:",
      topupLink: "+ To'ldirish",
      packagePrice: "Paket narxi:",
      discount: "Chegirma ({code}):",
      totalToPay: "Jami to'lov:",
      buyBtn: "Sotib olish",
      insufficientBalance: "Mablag' yetarli emas (Balansni to'ldiring)",
      dataCorrectNotice: "Barcha ma'lumotlar to'g'ri kiritildi",
      safePayment: "100% Xavfsiz to'lov",
      instantDelivery: "1 daqiqada avtomat yetkazish",
      aboutSuffix: "haqida",
      faqSectionTitle: "Ko'p beriladigan savollar",
      langSwitchBtn: "Читать на русском",
      accountVerified: "Akkaunt tasdiqlandi",
      accountChecking: "Tekshirilmoqda...",
      alreadyPurchased: "Siz allaqachon olgansiz",
      availableCount: "mavjud",
      selectProduct: "MAHSULOTNI TANLANG",
      section2x: "2x Olmaslar",
      sectionRegular: "Olmaslar",
      sectionPasses: "Passlar va obunalar",
      lockedNotice: "Ushbu 2x bonus ushbu akkaunt uchun allaqachon ishlatilgan",
      bonusStatusTitle: "2x Bonus holati",
      bonusAllClaimed: "Barchasi olingan (0/{total})",
      bonusAvailablePill: "{count} / {total} mavjud",
      checkingAccountSub: "Akkaunt va 2x bonus holati tekshirilmoqda...",
      accountCheckingText: "Akkaunt tekshirilmoqda...",
      accountNotFound: "Akkaunt topilmadi",
      notEntered: "Kiritilmagan"
    },
    orders: {
      title: "Buyurtmalar tarixi",
      subtitle: "Playdom orqali amalga oshirilgan barcha xaridlaringiz va rasmiy kvitansiyalar",
      totalOrders: "Jami buyurtmalar:",
      totalSpent: "Umumiy xarid:",
      itemsCount: "ta",
      emptyTitle: "Hozircha buyurtmalar yo'q",
      emptyDesc: "Siz hali hech qanday o'yin uchun to'ldirish amalga oshirmadingiz.",
      goToShop: "Donat qilishga o'tish",
      thId: "Buyurtma ID",
      thGamePkg: "O'yin & Paket",
      thAccount: "Hisob (ID)",
      thAmount: "Summa",
      thDate: "Sana",
      thStatus: "Holat",
      thReceipt: "Kvitansiya",
      statusCompleted: "Bajarildi",
      viewReceipt: "Chek"
    },
    payments: {
      title: "To'lovlar va Balans",
      subtitle: "Hamyon hisobingizni qulay mahalliy to'lov tizimlari orqali to'ldiring",
      walletBadge: "Playdom Hamyon",
      availableBalance: "Mavjud qoldiq:",
      walletNote: "Hamyoningizdagi mablag' bilan barcha o'yinlarni hech qanday ortiqcha SMS tasdiqlashlarsiz, bir zumda sotib olishingiz mumkin.",
      f1: "0% to'ldirish komissiyasi",
      f2: "Bir martalik to'lov orqali tezkor xaridlar",
      f3: "Barcha mahalliy bank kartalari qabul qilinadi",
      depositTitle: "Hisobni to'ldirish",
      depositDesc: "To'ldirmoqchi bo'lgan summani tanlang yoki kiriting:",
      otherAmountLabel: "Boshqa summa (so'm)",
      btnDeposit: "Hisobni to'ldirish",
      successMsg: "To'lov muvaffaqiyatli qabul qilindi! Balansingiz to'ldirildi.",
      securityNote: "Barcha to'lovlar 256-bitli shifrlangan xavfsiz bank shlyuzlari orqali amalga oshiriladi."
    },
    faq: {
      title: "Ko'p beriladigan savollar va yordam",
      subtitle: "O'yin hisobini to'ldirish, xavfsizlik va to'lovlar bo'yicha batafsil javoblar",
      supportTitle: "Qo'llab-quvvatlash xizmati",
      supportDesc: "Savol yoki biror tushunmovchilik bormi? Mutaxassislarimiz har kuni 24 soat davomida sizga yordam berishga tayyor.",
      operator: "Telegram Operator",
      channel: "Rasmiy Telegram Kanal",
      channelSub: "Yangiliklar va Aksiyalar"
    },
    profile: {
      activeUser: "Faol foydalanuvchi",
      walletBalance: "Hamyon balansi",
      topupBtn: "Balansni to'ldirish",
      quickSections: "Tezkor bo'limlar",
      myOrders: "Mening buyurtmalarim",
      ordersDesc: "ta buyurtma mavjud",
      payments: "To'lovlar va hisob",
      paymentsDesc: "Balans va to'ldirish tarixi",
      faq: "Yordam markazi (FAQ)",
      faqDesc: "Ko'p so'raladigan savollar",
      settings: "Ilova sozlamalari",
      langSetting: "Interfeys tili",
      currentLangLabel: "Hozirgi til:",
      themeSetting: "Tungi / Kungi rejim",
      themeDark: "Tungi (Dark Mode)",
      themeLight: "Kungi (Light Mode)",
      support: "Qo'llab-quvvatlash xizmati",
      supportDesc: "Biror savol yoki muammo bormi? Bizning 24/7 qo'llab-quvvatlash jamoamiz yordam berishga tayyor.",
      writeTelegram: "Telegram orqali yozish"
    },
    footer: {
      leadText: "Sevimli o'yinlaringiz uchun donat va vaucherlarni tez, xavfsiz va arzon narxda to'ldiring.",
      docs: "Hujjatlar",
      offer: "Ommaviy oferta",
      privacy: "Maxfiylik siyosati",
      support: "Qo'llab-quvvatlash",
      partner: "Partnyorimiz bo'ling",
      partnerDesc: "Hamkorlik va reklama takliflari uchun bizga yozing:",
      copyright: "© 2026 Playdom.uz — Barcha huquqlar himoyalangan. Barcha o'yin nomlari va logotiplari tegishli egalarining tovar belgilaridir."
    },
    modals: {
      idGuideTitle: "User ID va Server ID qayerdan olinadi?",
      idGuideStep1: "Mobile Legends o'yinini oching va chap yuqori burchakdagi Avatar (Profil) belgisini bosing.",
      idGuideStep2: "O'yinchi profilingizda nikneymingizning tagida quyidagicha raqamlar ko'rsatilgan:",
      idGuideStep3: "Birinchi uzun raqam (84920184) bu sizning User IDingiz, qavs ichidagi 4 xonali raqam (2041) esa Server/Zone ID hisoblanadi.",
      understood: "Tushundim",
      receiptTitle: "Buyurtma muvaffaqiyatli qabul qilindi!",
      receiptSub: "Olmoslar 1-3 daqiqa ichida o'yin hisobingizga yuklanadi.",
      receiptOrderNo: "Buyurtma raqami:",
      receiptGamePkg: "O'yin & Paket:",
      receiptAccount: "Hisob (ID):",
      receiptPayMethod: "To'lov usuli:",
      receiptPaidAmount: "To'langan summa:",
      close: "Yopish",
      viewOrders: "Buyurtmalarimda ko'rish",
      topupTitle: "Hamyon balansini to'ldirish",
      topupChoose: "To'ldirmoqchi bo'lgan summani tanlang:",
      topupCustomLabel: "Summa (so'm)",
      topupAddBtn: "Balansga qo'shish"
    }
  },

  ru: {
    currency: "сум",
    nav: {
      games: "Игры",
      orders: "Заказы",
      payments: "Оплата",
      profile: "Профиль",
      walletBalance: "Баланс кошелька",
      lightMode: "Переключить на светлую тему (Light Mode)",
      darkMode: "Переключить на темную тему (Dark Mode)",
      topupShort: "+ Пополнить",
      balance: "Баланс",
      myOrders: "Мои заказы",
      myPayments: "Мои платежи",
      topUp: "Пополнить",
      logout: "Выйти"
    },
    home: {
      allGames: "Все игры",
      searchPlaceholder: "Поиск по играм...",
      available: "Доступно",
      comingSoon: "Скоро",
      buyNow: "Купить →",
      slides: [
        { title: "Mobile Legends", action: "Купить →" },
        { title: "Genshin Impact", action: "Купить →" },
        { title: "PUBG Mobile", action: "Купить →" }
      ]
    },
    gameDetail: {
      backToAll: "Все игры",
      available: "Доступно",
      comingSoon: "Скоро",
      step1Title: "Введите User ID",
      howToFindId: "Где найти ID?",
      userIdLabel: "User ID",
      serverIdLabel: "Server ID",
      userIdPlaceholder: "User ID",
      serverIdPlaceholder: "Server ID",
      userIdRequired: "Введите User ID",
      serverIdRequired: "Введите Server ID",
      idNotice: "Вводите ID внимательно — за ошибочно указанный ID средства не возвращаются.",
      step2Title: "Выберите пакет",
      step2Subtitle: "Выберите необходимое количество",
      tabAll: "Все",
      tabDouble: "2x Бонус",
      tabRegular: "Стандартные пакеты",
      tabPasses: "Пропуска / Подписки",
      bonusBadge: "+{bonus} бонус",
      sidebarTitle: "Подтверждение заказа",
      sidebarSubtitle: "Расчет и оформление",
      recipientAccount: "Аккаунт получателя:",
      selectedPackage: "Выбранный пакет:",
      bonusOlmos: "Бонус: +{bonus} {unit}",
      hasPromo: "Есть промокод?",
      example: "Пример:",
      promoPlaceholder: "ВВЕДИТЕ ПРОМОКОД",
      apply: "Применить",
      promoEmpty: "Пожалуйста, введите промокод",
      promoNotFound: "Такой промокод не найден или срок его действия истек",
      promoApplied: "Промокод \"{code}\" успешно применен!",
      paymentSource: "Способ оплаты:",
      playdomBalance: "Баланс Playdom",
      availableBalance: "Доступный остаток:",
      topupLink: "+ Пополнить",
      packagePrice: "Стоимость пакета:",
      discount: "Скидка ({code}):",
      totalToPay: "Итого к оплате:",
      buyBtn: "Купить",
      insufficientBalance: "Недостаточно средств (Пополните баланс)",
      dataCorrectNotice: "Все данные проверены и верны",
      safePayment: "100% Безопасная оплата",
      instantDelivery: "Автоматическая доставка за 1 мин",
      aboutSuffix: "— об игре и пополнении",
      faqSectionTitle: "Часто задаваемые вопросы",
      langSwitchBtn: "O'zbek tilida o'qish",
      accountVerified: "Аккаунт подтвержден",
      accountChecking: "Проверка аккаунта...",
      alreadyPurchased: "Вы уже приобрели",
      availableCount: "доступно",
      selectProduct: "ВЫБЕРИТЕ ПРОДУКТ",
      section2x: "2x Алмазы",
      sectionRegular: "Алмазы",
      sectionPasses: "Пропуска и подписки",
      bonusStatusTitle: "Статус 2x бонуса",
      bonusAllClaimed: "Все получены (0/{total})",
      bonusAvailablePill: "{count} / {total} доступно",
      checkingAccountSub: "Проверка аккаунта и 2x бонуса...",
      accountCheckingText: "Проверка аккаунта...",
      accountNotFound: "Аккаунт не найден",
      notEntered: "Не указан"
    },
    orders: {
      title: "История заказов",
      subtitle: "Все ваши покупки и официальные чеки, оформленные через Playdom",
      totalOrders: "Всего заказов:",
      totalSpent: "Общая сумма:",
      itemsCount: "шт.",
      emptyTitle: "У вас пока нет заказов",
      emptyDesc: "Вы еще не совершали пополнений ни для одной игры.",
      goToShop: "Перейти к покупкам",
      thId: "ID заказа",
      thGamePkg: "Игра и Пакет",
      thAccount: "Аккаунт (ID)",
      thAmount: "Сумма",
      thDate: "Дата",
      thStatus: "Статус",
      thReceipt: "Квитанция",
      statusCompleted: "Выполнен",
      viewReceipt: "Чек"
    },
    payments: {
      title: "Оплата и Баланс",
      subtitle: "Пополняйте баланс кошелька через удобные платежные системы Узбекистана",
      walletBadge: "Кошелек Playdom",
      availableBalance: "Доступный остаток:",
      walletNote: "С баланса кошелька вы можете моментально покупать донаты в любых играх без лишних SMS-подтверждений.",
      f1: "Комиссия за пополнение 0%",
      f2: "Моментальные покупки в один клик",
      f3: "Принимаются любые карты Uzcard и Humo",
      depositTitle: "Пополнение счета",
      depositDesc: "Выберите или введите сумму пополнения:",
      otherAmountLabel: "Другая сумма (сум)",
      btnDeposit: "Пополнить баланс",
      successMsg: "Оплата успешно принята! Ваш баланс пополнен.",
      securityNote: "Все платежи защищены 256-битным SSL-шифрованием банковских шлюзов."
    },
    faq: {
      title: "Часто задаваемые вопросы и помощь",
      subtitle: "Подробные ответы по пополнению игр, безопасности и способам оплаты",
      supportTitle: "Служба поддержки",
      supportDesc: "Есть вопросы или затруднения? Наши специалисты готовы помочь вам 24 часа в сутки, без выходных.",
      operator: "Оператор в Telegram",
      channel: "Официальный Telegram-канал",
      channelSub: "Новости и Акции"
    },
    profile: {
      activeUser: "Активный пользователь",
      walletBalance: "Баланс кошелька",
      topupBtn: "Пополнить баланс",
      quickSections: "Быстрые разделы",
      myOrders: "Мои заказы",
      ordersDesc: "заказов оформлено",
      payments: "Оплата и счета",
      paymentsDesc: "Баланс и история пополнений",
      faq: "Центр помощи (FAQ)",
      faqDesc: "Часто задаваемые вопросы",
      settings: "Настройки приложения",
      langSetting: "Язык интерфейса",
      currentLangLabel: "Текущий язык:",
      themeSetting: "Темная / Светлая тема",
      themeDark: "Темная (Dark Mode)",
      themeLight: "Светлая (Light Mode)",
      support: "Служба поддержки",
      supportDesc: "Есть вопрос или возникла сложность? Наша служба заботы 24/7 готова помочь в любое время.",
      writeTelegram: "Написать в Telegram"
    },
    footer: {
      leadText: "Быстрое, безопасное и выгодное пополнение донатов и ваучеров для ваших любимых игр.",
      docs: "Документы",
      offer: "Публичная оферта",
      privacy: "Политика конфиденциальности",
      support: "Поддержка",
      partner: "Сотрудничество",
      partnerDesc: "По вопросам партнерства и рекламы пишите нам:",
      copyright: "© 2026 Playdom.uz — Все права защищены. Все названия игр и логотипы являются товарными знаками их правообладателей."
    },
    modals: {
      idGuideTitle: "Где найти User ID и Server ID?",
      idGuideStep1: "Откройте игру Mobile Legends и нажмите на значок Аватара (Профиля) в левом верхнем углу.",
      idGuideStep2: "В профиле игрока под вашим никнеймом будут указаны следующие данные:",
      idGuideStep3: "Первое длинное число (84920184) — это ваш User ID, а 4 цифры в скобках (2041) — Server/Zone ID.",
      understood: "Понятно",
      receiptTitle: "Заказ успешно принят!",
      receiptSub: "Пополнение поступит на игровой аккаунт в течение 1–3 минут.",
      receiptOrderNo: "Номер заказа:",
      receiptGamePkg: "Игра и Пакет:",
      receiptAccount: "Аккаунт (ID):",
      receiptPayMethod: "Способ оплаты:",
      receiptPaidAmount: "Оплаченная сумма:",
      close: "Закрыть",
      viewOrders: "Посмотреть в моих заказах",
      topupTitle: "Пополнение баланса кошелька",
      topupChoose: "Выберите сумму для пополнения:",
      topupCustomLabel: "Сумма (сум)",
      topupAddBtn: "Пополнить баланс"
    }
  }
};

/**
 * High-fidelity Russian data overrides for games catalog
 */
export const GAME_TRANSLATIONS_RU = {
  mlbb: {
    subtitle: "Пополнение алмазов в Mobile Legends: Bang Bang. Введите Player ID и Server ID.",
    detailTitle: "Пополнение алмазов Mobile Legends",
    detailDesc: "Пополнение алмазов в Mobile Legends: Bang Bang. Введите Player ID и Server ID.",
    unit: "Алмазы",
    packages: {
      'ml-2x-50': { name: '2x50 Алмазов', badge: '2X БОНУС' },
      'ml-2x-150': { name: '150 + 150 Алмазов', badge: '2X БОНУС' },
      'ml-2x-250': { name: '250 + 250 Алмазов', badge: '2X БОНУС' },
      'ml-2x-500': { name: '500 + 500 Алмазов', badge: '2X БОНУС' },
      'ml-reg-5': { name: '5 Алмазов' },
      'ml-reg-12': { name: '12 Алмазов' },
      'ml-reg-19': { name: '19 Алмазов' },
      'ml-reg-28': { name: '28 Алмазов' },
      'ml-reg-44': { name: '44 Алмаза' },
      'ml-reg-59': { name: '59 Алмазов' },
      'ml-reg-86': { name: '86 Алмазов' },
      'ml-reg-172': { name: '172 Алмаза' },
      'ml-reg-257': { name: '257 Алмазов' },
      'ml-reg-275': { name: '275 Алмазов' },
      'ml-reg-343': { name: '343 Алмаза' },
      'ml-reg-447': { name: '447 Алмазов' },
      'ml-reg-514': { name: '514 Алмазов' },
      'ml-reg-565': { name: '565 Алмазов' },
      'ml-reg-706': { name: '706 Алмазов' },
      'ml-reg-1049': { name: '1049 Алмазов', badge: 'Рекомендуем' },
      'ml-reg-1271': { name: '1271 Алмаз' },
      'ml-reg-1412': { name: '1412 Алмазов' },
      'ml-reg-2195': { name: '2195 Алмазов' },
      'ml-reg-3688': { name: '3688 Алмазов' },
      'ml-reg-4394': { name: '4394 Алмаза' },
      'ml-pass-weekly': { name: 'Еженедельный Алмазный Пропуск', badge: 'Выгодно' },
      'ml-pass-summer': { name: 'Летний пропуск' },
      'ml-pass-twilight': { name: 'Сумеречный пропуск' }
    },
    aboutText: [
      "В Mobile Legends: Bang Bang алмазы являются основной валютой для покупки новых героев, эксклюзивных обликов, боевых пропусков и участия в событиях. На Playdom.uz донат осуществляется напрямую по Player ID и Server ID: без паролей и передачи доступа к аккаунту.",
      "Введите свой ID и сервер в форму выше, выберите нужный пакет и оплатите через баланс Playdom. Алмазы зачисляются на аккаунт моментально в автоматическом режиме.",
      "Оплата защищена и проходит без скрытых комиссий. При возникновении вопросов служба поддержки Playdom на связи круглосуточно."
    ],
    faqs: [
      {
        q: "Как быстро приходят алмазы?",
        a: "После успешной оплаты система отправляет запрос на официальный сервер, и алмазы поступают на игровой аккаунт в течение 1–3 минут. Достаточно перезапустить игру."
      },
      {
        q: "Где найти свой Player ID и Server ID?",
        a: "Откройте Mobile Legends, перейдите в профиль (аватар в левом верхнем углу). Под вашим никнеймом будет строка вида: ID: 84920184 (2041). Первые цифры — это Player ID, 4 цифры в скобках — Server ID."
      },
      {
        q: "Что делать, если указал неверный ID?",
        a: "Пожалуйста, внимательно проверяйте ID перед покупкой. Система работает автоматически, поэтому возврат средств за пополнение чужого аккаунта невозможен."
      },
      {
        q: "Безопасно ли покупать через Playdom?",
        a: "Да, на 100%. Мы работаем через официальные шлюзы прямых пополнений (Direct Top-up). Мы никогда не запрашиваем пароли от аккаунта."
      },
      {
        q: "Какие способы оплаты поддерживаются?",
        a: "Вы можете пополнить баланс через Payme, Click, Uzum Bank и любые национальные карты Uzcard и Humo с комиссией 0%."
      }
    ]
  },
  pubg: {
    subtitle: "Пополнение UC в PUBG Mobile. Введите Player ID.",
    detailTitle: "Пополнение UC в PUBG Mobile",
    detailDesc: "Быстрое пополнение игровой валюты UC для PUBG Mobile.",
    unit: "UC",
    packages: {
      'pubg-60': { name: '60 UC' },
      'pubg-325': { name: '325 UC (300+25)', badge: 'Популярно' },
      'pubg-660': { name: '660 UC (600+60)', badge: 'Royale Pass' },
      'pubg-1800': { name: '1800 UC' }
    },
    aboutText: [
      "В PUBG Mobile валюта UC (Unknown Cash) используется для покупки Royale Pass, открытия ящиков, приобретения скинов на оружие, одежду и транспорт. На Playdom.uz UC пополняются автоматически по вашему Player ID: без ввода пароля или кодов подтверждения.",
      "Сразу после ввода ID на странице отображается ник игрока — обязательно сверьте его перед оплатой. Затем выберите пакет от 60 UC до крупных наборов. Цены в сумах без скрытых комиссий.",
      "Оплата происходит в один клик с баланса Playdom. Статус заказа обновляется в реальном времени в разделе «Заказы»."
    ],
    faqs: [
      {
        q: "За сколько времени начисляются UC?",
        a: "После успешной оплаты UC зачисляются системой автоматически в течение 1–5 минут."
      },
      {
        q: "Как узнать свой PUBG Mobile ID?",
        a: "Войдите в PUBG Mobile, нажмите на свой аватар в левом верхнем углу. В окне профиля отобразится цифровой Player ID и кнопка копирования."
      },
      {
        q: "Для чего нужны UC?",
        a: "UC (Unknown Cash) позволяют открыть Royale Pass, приобретать скины, персонажей, костюмы и участвовать в эксклюзивных рулетках."
      },
      {
        q: "Как можно оплатить покупку?",
        a: "На платформе Playdom принимаются Payme, Click, Uzum Bank и все карты Uzcard/Humo без переплат."
      },
      {
        q: "Возвращаются ли деньги, если заказ не выполнен?",
        a: "Да, абсолютно. Если заказ не может быть доставлен по техническим причинам, 100% средств мгновенно возвращаются на ваш баланс Playdom."
      },
      {
        q: "Как связаться со службой поддержки?",
        a: "Вы можете нажать на иконку наушников в правом нижнем углу или написать в Telegram: @playdom_support (24/7)."
      }
    ]
  },
  magicchess: {
    subtitle: "Пополнение кристаллов в Magic Chess Go Go. Введите Player ID и Server ID.",
    detailTitle: "Пополнение Magic Chess Go Go",
    detailDesc: "Пополнение кристаллов в Magic Chess Go Go. Введите Player ID и Server ID.",
    unit: "Кристаллы",
    packages: {
      'mc-50': { name: '50 Кристаллов' },
      'mc-150': { name: '150 Кристаллов' },
      'mc-500': { name: '500 Кристаллов' }
    }
  },
  genshin: {
    subtitle: "Пополнение Кристаллов Сотворения в Genshin Impact. Введите UID и Server.",
    detailTitle: "Пополнение Genshin Impact",
    detailDesc: "Кристаллы Сотворения и Благословение полой луны по вашему UID.",
    unit: "Кристаллы",
    packages: {
      'gi-60': { name: '60 Кристаллов Сотворения' },
      'gi-300': { name: '300+30 Кристаллов' },
      'gi-pass-welkin': { name: 'Благословение полой луны', badge: 'Подписка' }
    }
  },
  roblox: {
    subtitle: "Пополнение Робуксов (Robux) для Roblox. Введите имя пользователя.",
    detailTitle: "Пополнение Робуксов (Robux)",
    detailDesc: "Быстрое зачисление Robux на ваш аккаунт Roblox.",
    unit: "Робуксы",
    packages: {
      'rbx-400': { name: '400 Робуксов' },
      'rbx-800': { name: '800 Робуксов' }
    }
  },
  wuthering: {
    subtitle: "Пополнение Лунита (Lunite) для Wuthering Waves. Введите User ID и Server.",
    detailTitle: "Пополнение Wuthering Waves Lunite",
    detailDesc: "Пополнение Лунита по вашему внутриигровому User ID.",
    unit: "Лунит",
    packages: {
      'ww-60': { name: '60 Лунита' },
      'ww-300': { name: '300+30 Лунита' }
    }
  },
  freefire: {
    subtitle: "Пополнение алмазов в Free Fire. Введите Player ID.",
    detailTitle: "Пополнение алмазов Free Fire",
    detailDesc: "Быстрое зачисление алмазов в Free Fire по Player ID.",
    unit: "Алмазы",
    packages: {
      'ff-100': { name: '100+10 Алмазов' },
      'ff-310': { name: '310+31 Алмазов' },
      'ff-520': { name: '520+52 Алмаза' }
    }
  },
  telegram: {
    subtitle: "Пополнение Звезд (Stars) для вашего Telegram аккаунта. Введите @username.",
    detailTitle: "Покупка Telegram Stars",
    detailDesc: "Звезды Telegram для ботов, каналов и платного контента.",
    unit: "Звезды",
    packages: {
      'tg-50': { name: '50 Звезд' },
      'tg-100': { name: '100 Звезд' },
      'tg-250': { name: '250 Звезд' }
    }
  },
  hok: {
    subtitle: "Скоро появится на платформе",
    detailTitle: "Пополнение Honor of Kings",
    detailDesc: "Honor of Kings скоро будет доступен на платформе Playdom.",
    unit: "Жетоны"
  },
  valorant: {
    subtitle: "Пополнение VP. Скоро появится",
    detailTitle: "Пополнение Valorant VP",
    detailDesc: "Valorant VP скоро будет доступен на платформе Playdom.",
    unit: "VP"
  }
};

/**
 * Helper to get localized game object
 */
export function getLocalizedGame(game, lang = 'uz') {
  if (!game) return game;
  if (lang === 'uz') {
    return {
      ...game,
      aboutText: game.aboutText || [],
      faqs: game.faqs || [],
      packages: game.packages || []
    };
  }

  const ru = GAME_TRANSLATIONS_RU[game.id];
  if (!ru) {
    return {
      ...game,
      statusLabel: game.status === 'available' ? 'Доступно' : 'Скоро',
      aboutText: game.aboutText || [],
      faqs: game.faqs || [],
      packages: game.packages || []
    };
  }

  return {
    ...game,
    subtitle: ru.subtitle || game.subtitle,
    statusLabel: game.status === 'available' ? 'Доступно' : 'Скоро',
    detailTitle: ru.detailTitle || game.detailTitle,
    detailDesc: ru.detailDesc || game.detailDesc,
    unit: ru.unit || game.unit,
    aboutText: ru.aboutText || game.aboutText || [],
    faqs: ru.faqs || game.faqs || [],
    packages: (game.packages || []).map(pkg => {
      const pkgRu = ru.packages?.[pkg.id];
      if (!pkgRu) return pkg;
      return {
        ...pkg,
        name: pkgRu.name || pkg.name,
        badge: pkgRu.badge !== undefined ? pkgRu.badge : pkg.badge
      };
    })
  };
}

/**
 * Helper to get active translation dictionary
 */
export function getT(lang = 'uz') {
  return TRANSLATIONS[lang] || TRANSLATIONS.uz;
}
