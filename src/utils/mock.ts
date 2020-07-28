export const promoMenuItems = [
  { id: "#hello", item: "Привет" },
  { id: "#resume", item: "Резюме" },
  { id: "#portfolio", item: "Портфолио" },
  { id: "#contact", item: "Контакты" },
];

export const introBlock = {
  img:
    "https://sun9-72.userapi.com/w9Wxx0G6QFsHlmXkUqLcipouhKmKzAgbsqFTRQ/ieIep7fDS_c.jpg",
  name: "Адам Абдулаев_",
  speciality: "front-end разработчик",
  age: "28",
  phone: "8 (963) 705-19-92",
  mail: "almalib@bk.ru",
  address: "Чеченская Республика, Грозный",
};

export const helloBlockDescription =
  "Я начинающий веб-разработчик, с опытом создания веб-приложений с нуля. Умею писать хорошо разработанный, тестируемый и эффективный код, используя лучшие практики в веб-разработке. Быстро учусь, люблю решать сложные задачи и работать в команде. Отвественно подхожу к принятым обязательствам.";

export const resume = {
  skillsBlock: [
    { technology: "html5", percent: "80%" },
    { technology: "css3", percent: "70%" },
    { technology: "java script", percent: "50%" },
    { technology: "angular", percent: "40%" },
    { technology: "react", percent: "40%" },
    { technology: "stencil js", percent: "50%" },
    { technology: "git", percent: "50%" },
    { technology: "adobe photoshop", percent: "60%" },
  ],
  employmentBlock: [
    {
      job: 'Информационное агентство "Грозный-информ"',
      speciality: "Корреспондент",
      date: "2012 - 2014",
    },
    {
      job:
        "Информационно-аналитическое управление Главы и Правительства Чеченской Республики",
      speciality: "Ведущий специалист-эксперт",
      date: "2014 - 2018",
    },
    {
      job: "Федерация профсоюзов Чеченской Республики",
      speciality: "Заместитель руководителя информационно-аналитического центра",
      date: "2018 - 2019",
    },
    {
      job: "Фриланс",
      speciality: "HTML-верстальщик",
      date: "2018 - 2020",
    },
    {
      job: "IT-протсранство Кодология",
      speciality: "Преподаватель, контент-менеджер",
      date: "2018 - н.в.",
    },
    {
      job: "Федерация профсоюзов Чеченской Республики",
      speciality:
        "Пресс-секретарь Председателя Федерации профсоюзов Чеченской Республики",
      date: "2019 - 2020",
    },
  ],
  educationBlock: [
    {
      institution: "Чеченский Государственный Университет",
      date: "2009 - 2014",
      speciality: "Журналистика",
    },
    {
      institution: "Чеченский государственный педагогический университ",
      date: "2015",
      speciality:
        "Информационно-аналитическое управление на государственной службе",
    },
    {
      institution: "Курсы программирования Intocode",
      date: "2020",
      speciality: "Веб-разработка",
    }
  ],
  resumeBlockDescription: "Сертификат окончания курсов программирования. Английский на уровне Intermediate. Опыт коммерческой веб-разработки. Подготовка спичей, написание новостных и аналитических статей, постов для социальных сетей."
}

export const portfolio = {
  portfolioCategory: [
    { id: "all", item: "Все" },
    { id: "web-app", item: "Веб-приложения" },
    { id: "web-site", item: "Веб-сайты" },
    { id: "landing", item: "Лендинги" },
  ],
  portfolioCardsItems: [
    {
      img:
        "https://cdn1.radikalno.ru/uploads/2020/7/28/48031f44c9b68278c08800048519cdd7-full.png",
      title: "Новостной блог",
      description: "Моя первая работа с использованием Stencil JS.",
      link: "https://almalib.github.io/angular-app/",
      category: "web-app",
      stackList: [
        "html5",
        "css3",
        "java script",
        "angular",
        "stencil js",
        "git",
      ],
    },
    {
      img:
        "https://cdn1.radikalno.ru/uploads/2020/7/28/7933e96aa4eb531084f1d092fab1c37a-full.png",
      title: "Мобильной и десктоп чат",
      description:
        "Веб-приложение с возможностью отправки сообщений, фильтрами категорий, диалогов и личных сообщений",
      link: "https://almalib.github.io/angular-app/",
      category: "web-app",
      stackList: [
        "html5",
        "css3",
        "java script",
        "angular",
        "stencil js",
        "git",
      ],
    },
    {
      img:
        "https://cdn1.radikalno.ru/uploads/2020/7/28/5676898bfa0663143ecac00d9b81af76-full.png",
      title: "Сайт на CMS WordPress",
      description: "Медицинский справочник с фильтрацией категорий по алфавиту",
      link: "http://medikmira.ru/",
      category: "web-site",
      stackList: ["html5", "css3", "java script", "wordpress"],
    },
    {
      img:
        "https://cdn1.radikalno.ru/uploads/2020/7/28/52b52d11023a7a72cab31042bd228e26-full.png",
      title: "Лендинг на CMS Tilda Publishing",
      description: "Сайт-визитка для IT-пространства Кодология",
      link: "http://codologia95.tilda.ws/",
      category: "landing",
      stackList: ["tilda"],
    },
  ],
};

export const footerBlock = {
  img: "https://previews.aspirity.com/spirit/assets/img/img_bg_main.jpg",
  phone: "8 (963) 705-19-92",
  mail: "almalib@bk.ru",
  skype: "almalib",
};
