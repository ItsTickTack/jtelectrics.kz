;(function () {
  const translations = {
    ru: {
      'common.tagline': 'Все виды электромонтажных работ от профессионалов с 20-летним стажем',
      'nav.home': 'Главная',
      'nav.services': 'Услуги',
      'nav.portfolio': 'Портфолио',
      'nav.about': 'Про нас',

      'hero.title': 'Электрики, которым можно доверять',
      'hero.subtitle': 'Все виды электромонтажных работ от профессионалов с 20-летним стажем',

      'license.title': 'JT Electrics имеет официальную лицензию на проведение строительно-монтажных работ',

      'services.title': 'Наши услуги',
      'services.pageTitle': 'Сервис и услуги',
      'services.kicker1': 'Высокий профессионализм',
      'services.name1': 'Электрика под ключ',
      'services.card1.title': 'Электрика под ключ',
      'services.card1.desc': 'Высококачественный профессионализм',
      'services.kicker2': 'Любое оборудование',
      'services.name2': 'Монтаж оборудования',
      'services.card2.title': 'Срочный вызов',
      'services.card2.desc': 'Скорость и гарантия',
      'services.kicker3': 'Согласно ГОСТу',
      'services.name3': 'Прокладка кабеля',
      'services.card3.title': 'Электромонтаж на производстве',
      'services.card3.desc': 'Гарантия и последующее обслуживание',
      'services.kicker4': 'С последующим обслуживанием',
      'services.name4': 'Электромонтаж на производстве',
      'services.card4.title': 'Прокладка кабеля',
      'services.card4.desc': 'Согласно ГОСТу',
      'services.card5.title': 'Монтаж оборудования',
      'services.card5.desc': 'Любое оборудование',
      'services.card6.title': 'Монтаж автоматов',
      'services.card6.desc': '20 лет опыта',
      'services.card7.title': 'Замена кабеля',
      'services.card7.desc': 'Исправим ошибки "коллег"',
      'services.card8.title': 'Проектирование электропроводки',
      'services.card8.desc': 'Безопасно и надолго',
      'services.saving.kicker': 'Получи 10% скидку',
      'services.saving.title': 'Экономьте по‑крупному',
      'services.saving.body': 'Мы понимаем что обеспечение электромонтажных работ может быть накладным, поэтому нашим постоянным клиентам действует 10% скидка!',
      'services.saving.btn': 'Круто!',

      'about.title': 'МЫ — JT Electrics',
      'about.subtitle': 'Наша история',
      'about.p1': 'JT Electrics — это электромонтажная компания с более чем 20-летним опытом проектирования, монтажа и обслуживания электрических систем.',
      'about.p2': 'Мы выполняем работы любой сложности — от простых ремонтных работ до сложных систем электроснабжения на промышленных объектах.',
      'about.p3': 'Мы ценим безопасность, сроки и прозрачность. Работаем по договору и предоставляем гарантию на выполненные работы.',
      'about.pageTitle': 'Про JT Electrics',
      'about.team': 'Наша команда',
      'about.teamLead': 'Бригадир',
      'about.founder': 'Основатель',
      'about.teamDesc1': 'Команда электриков в JT Electrics имеет более чем 10-летний опыт работы на рынке, что позволяет им предоставлять высококачественные услуги своим клиентам. Каждый электрик в нашей команде прошел обязательное обучение и имеет все необходимые сертификаты и лицензии для выполнения электромонтажных работ.',
      'about.teamDesc2': 'Мы специализируемся на широком спектре услуг, включая установку и ремонт электрических систем в домах и офисах, установку систем безопасности, а также обслуживание и ремонт электрических машин и оборудования. Мы используем только самые современные технологии и оборудование для выполнения наших задач, что гарантирует высокое качество нашей работы.',

      'advantages.title': 'Преимущества JT Electrics',
      'advantages.a1': 'Предоставляем договор и гарантию на 10 лет на все виды работ. Монтаж производится согласно ГОСТа.',
      'advantages.a2': 'Оперативный выезд электрика в любой район Астаны.',
      'advantages.a3': 'Назовём стоимость услуг перед выездом, а для постоянных клиентов действуют скидки.',
      'advantages.a4': 'Используем профессиональные инструменты и высокотехнологичное оборудование.',

      'partners.title': 'Наши партнеры',

      // Portfolio
      'portfolio.pageTitle': 'Наши работы',
      'portfolio.lead': 'Здесь вы можете посмотреть примеры наших последних работ',
      'portfolio.gallery': 'Галерея проектов',
      'portfolio.p1.title': 'Мечеть',
      'portfolio.p1.desc': 'В течении 6 месяцев мы проводили свет в мечети, а также обеспечили долгосрочную инфраструктуру',
      'portfolio.p1.date': 'Сентябрь 2022',
      'portfolio.p2.title': 'Частный дом',
      'portfolio.p2.desc': 'Запрос был провести свет в новом частном доме',
      'portfolio.p2.date': 'Ноябрь 2022',
      'portfolio.p3.title': 'Офисный центр',
      'portfolio.p3.desc': 'Полный электромонтаж в современном офисном центре',
      'portfolio.p3.date': 'Январь 2023',
      'portfolio.p4.title': 'Фитнес центр',
      'portfolio.p4.desc': 'Электромонтаж в новом фитнес центре',
      'portfolio.p4.date': 'Январь 2023',

      'cta.title1': 'Есть вопросы?',

      'footer.services': 'Наши сервисы',
      'footer.hours': 'Рабочие часы',
      'footer.hoursText': 'Пн–Сб: 8:00–21:00; Вс: 8:00–14:00',
      'footer.contact': 'Свяжитесь с нами',
      'footer.li1': 'Электрика под ключ',
      'footer.li2': 'Срочный выезд',
      'footer.li3': 'Электромонтаж на производстве',
      'footer.li4': 'Прокладка кабеля',
      'footer.li5': 'Проектирование электропроводки',

      'buttons.more': 'Подробнее',
      'buttons.details': 'Подробнее',
      'buttons.view': 'Посмотреть',
      'buttons.whatsapp': 'Whatsapp',
      'buttons.send': 'Отправить',

      'contact.city': 'Астана, Казахстан',
      'form.name': 'Имя',
      'form.phone': 'Телефон',
      'form.msg': 'Сообщение',
      'form.thanks': 'Спасибо что выбрали нас!'
    },
    kk: {
      'common.tagline': '20 жыл тәжірибесі бар мамандардан барлық электромонтаж жұмыстары',
      'nav.home': 'Басты бет',
      'nav.services': 'Қызметтер',
      'nav.portfolio': 'Портфолио',
      'nav.about': 'Біз туралы',

      'hero.title': 'Сенім артуға болатын электриктер',
      'hero.subtitle': '20 жылдық тәжірибесі бар мамандардан барлық электромонтаж жұмыстары',

      'license.title': 'JT Electrics құрылыс-монтаж жұмыстарын жүргізуге ресми лицензияға ие',

      'services.title': 'Біздің қызметтер',
      'services.pageTitle': 'Сервис және қызметтер',
      'services.kicker1': 'Жоғары кәсібилік',
      'services.name1': 'Кілтке тапсырылатын электрика',
      'services.card1.title': 'Кілтке тапсырылатын электрика',
      'services.card1.desc': 'Жоғары сапалы кәсібилік',
      'services.kicker2': 'Кез келген жабдық',
      'services.name2': 'Жабдықтарды монтаждау',
      'services.card2.title': 'Шұғыл шығу',
      'services.card2.desc': 'Жылдамдық және кепілдік',
      'services.kicker3': 'МЕСТ бойынша',
      'services.name3': 'Кабель төсеу',
      'services.card3.title': 'Өндірістегі электромонтаж',
      'services.card3.desc': 'Кепілдік және кейінгі қызмет',
      'services.kicker4': 'Кейінгі қызмет көрсету',
      'services.name4': 'Өндірістегі электромонтаж',
      'services.card4.title': 'Кабель төсеу',
      'services.card4.desc': 'МЕСТ бойынша',
      'services.card5.title': 'Жабдықтарды монтаждау',
      'services.card5.desc': 'Кез келген жабдық',
      'services.card6.title': 'Автоматтар монтажы',
      'services.card6.desc': '20 жыл тәжірибе',
      'services.card7.title': 'Кабельді алмастыру',
      'services.card7.desc': '«Әріптестер» қателіктерін түзетеміз',
      'services.card8.title': 'Электр сымдарын жобалау',
      'services.card8.desc': 'Қауіпсіз және ұзақ мерзімге',
      'services.saving.kicker': '10% жеңілдік ал',
      'services.saving.title': 'Үлкен үнемдеңіз',
      'services.saving.body': 'Электромонтаж жұмыстары шығынды болуы мүмкін, сондықтан тұрақты клиенттерімізге 10% жеңілдік бар!',
      'services.saving.btn': 'Керемет!',

      'about.title': 'БІЗ — JT Electrics',
      'about.subtitle': 'Біздің тарих',
      'about.p1': 'JT Electrics — электр жүйелерін жобалау, монтаждау және қызмет көрсету бойынша 20 жылдан астам тәжірибесі бар компания.',
      'about.p2': 'Біз кез келген күрделіліктегі жұмыстарды орындаймыз — қарапайым жөндеуден бастап өндірістік энергиямен жабдықтау жүйелеріне дейін.',
      'about.p3': 'Қауіпсіздік, мерзім және айқындықты бағалаймыз. Келісімшартпен жұмыс істейміз және кепілдік береміз.',
      'about.pageTitle': 'JT Electrics туралы',
      'about.team': 'Біздің команда',
      'about.teamLead': 'Бригадир',
      'about.founder': 'Негізін қалаушы',
      'about.teamDesc1': 'JT Electrics электриктері нарықта 10 жылдан аса тәжірибеге ие. Әр маман міндетті оқудан өткен, сертификаттар мен лицензиялары бар.',
      'about.teamDesc2': 'Біз үйлер мен офистерде электр жүйелерін орнату/жөндеу, қауіпсіздік жүйелерін орнату, жабдыққа қызмет көрсету жұмыстарын атқарамыз.',

      'advantages.title': 'JT Electrics артықшылықтары',
      'advantages.a1': 'Барлық жұмыс түрлеріне 10 жыл кепілдік және келісімшарт. Монтаж МЕСТ бойынша.',
      'advantages.a2': 'Электрик Астананың кез келген ауданына жедел шығады.',
      'advantages.a3': 'Шығуға дейін құнын айтамыз, тұрақты клиенттерге жеңілдіктер бар.',
      'advantages.a4': 'Кәсіби құралдар мен жоғары технологиялық жабдықтарды қолданамыз.',

      'partners.title': 'Біздің серіктестер',

      // Portfolio
      'portfolio.pageTitle': 'Біздің жұмыстар',
      'portfolio.lead': 'Мұнда соңғы жобаларымыздың мысалдарын көре аласыз',
      'portfolio.gallery': 'Жобалар галереясы',
      'portfolio.p1.title': 'Мешіт',
      'portfolio.p1.desc': '6 ай бойы мешітте жарық жүргізіп, ұзақ мерзімді инфрақұрылым қамтамасыз еттік',
      'portfolio.p1.date': 'Қыркүйек 2022',
      'portfolio.p2.title': 'Жеке үй',
      'portfolio.p2.desc': 'Жаңа жеке үйге жарық жүргізу',
      'portfolio.p2.date': 'Қараша 2022',
      'portfolio.p3.title': 'Офис орталығы',
      'portfolio.p3.desc': 'Қазіргі заманғы офис орталығында толық электромонтаж',
      'portfolio.p3.date': 'Қаңтар 2023',
      'portfolio.p4.title': 'Фитнес орталығы',
      'portfolio.p4.desc': 'Жаңа фитнес орталығында электромонтаж',
      'portfolio.p4.date': 'Қаңтар 2023',

      'cta.title1': 'Сұрақтарыңыз бар ма?',

      'footer.services': 'Біздің сервистер',
      'footer.hours': 'Жұмыс уақыты',
      'footer.hoursText': 'Дс–Сб: 8:00–21:00; Жс: 8:00–14:00',
      'footer.contact': 'Бізбен байланыс',
      'footer.li1': 'Кілтке тапсырылатын электрика',
      'footer.li2': 'Шұғыл шығу',
      'footer.li3': 'Өндірістегі электромонтаж',
      'footer.li4': 'Кабель төсеу',
      'footer.li5': 'Электрсым жобалау',

      'buttons.more': 'Толығырақ',
      'buttons.details': 'Толығырақ',
      'buttons.view': 'Қарау',
      'buttons.whatsapp': 'WhatsApp',
      'buttons.send': 'Жіберу',

      'contact.city': 'Астана, Қазақстан',
      'form.name': 'Аты',
      'form.phone': 'Телефон',
      'form.msg': 'Хабарлама',
      'form.thanks': 'Бізді таңдағаныңызға рахмет!'
    }
  };

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.ru;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // Toggle active state on buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }

  function init() {
    const saved = localStorage.getItem('lang') || 'ru';
    applyTranslations(saved);
    // Direct listeners (for static headers)
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang') === 'kk' ? 'kk' : 'ru';
        applyTranslations(lang);
      });
    });
    // Delegate as a fallback (works even if header is re-rendered)
    document.addEventListener('click', (e) => {
      const target = e.target.closest && e.target.closest('.lang-btn');
      if (target) {
        const lang = target.getAttribute('data-lang') === 'kk' ? 'kk' : 'ru';
        applyTranslations(lang);
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


