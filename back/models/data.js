function getCurrentLevel(level) {
  return level;
}
const allLevels = 8;

let progress = {
  mistakes: 0,
  success: 0
};

let links = {
  one:
    "https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley",
  two:
    "https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha",
  three:
    "https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii",
  four: {
    common:
      "https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu",
    personal: "https://twitter.com/foolsbridge/status/986935782287003649"
  },
  five: {
    first: "https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20",
    second: "https://vc.ru/38891-nds-20"
  },
  six: {
    first:
      "https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu",
    second:
      "https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu"
  },
  seven:
    "https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley",
  eight:
    "https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat"
};

module.exports = Object.freeze({
  startPage: {
    describe: "Тест",
    title: "Как хорошо вы разбираетесь в новостях бизнеса",
    subtitle: "По следам публикаций на vc.ru",
    btnTitle: "Начать"
  },

  "1": {
    level: `${getCurrentLevel(1)}/${allLevels}`,
    question:
      "На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?",
    answers: {
      first: {
        answer: "6,3 млн рублей",
        text: "Верно."
      },
      second: {
        answer: "1 млн рублей",
        text: "Нет, немного больше: 6,3 млн рублей."
      },
      third: {
        answer: "50 млн рублей",
        text: "Нет, гораздо меньше: 6,3 млн рублей."
      },
      fourth: {
        answer: "Не оштрафовал, а объявил выговор",
        text: "Нет, всё же оштрафовал на 6,3 млн рублей."
      },
      right: "6,3 млн рублей",
      commonText: `Проверка <a href=${
        links.one
      } target="_blank">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.`
    },
    btnTitle: "Продолжить"
  },

  "2": {
    level: `${getCurrentLevel(2)}/${allLevels}`,
    question:
      "Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?",
    answers: {
      first: {
        answer: "Она оказалась огнеопасной",
        text: "Да, бутылка благодаря своей форме призмы фокусировала свет так"
      },
      second: {
        answer: "Дети играли ею в футбол и разбивали окна",
        text: "Нет, дело в её форме призмы — она фокусировала свет так"
      },
      third: {
        answer: "Она постоянно скатывалась с полок",
        text:
          "Бутылка была довольно устойчивая, но благодаря своей форме призмы фокусировала свет так"
      },
      fourth: {
        answer: "Её никто не покупал",
        text:
          "Её покупали, но бутылка благодаря своей форме призмы фокусировала свет так"
      },
      right: "Она оказалась огнеопасной",
      commonText: `, что он <a href=${
        links.two
      } target="_blank">воспламенял</a> окружающие предметы.`
    },
    btnTitle: "Продолжить"
  },

  "3": {
    level: `${getCurrentLevel(3)}/${allLevels}`,
    question:
      "Сколько денег потеряли основатели WhatsApp после ухода из  Facebook?",
    answers: {
      first: {
        answer: "Они лишились акций на $1,3 млрд",
        text:
          "Ян Кум и Брайан Эктон действительно могли получить акции на эту сумму, если бы проработали в Facebook до ноября 2018 года."
      },
      second: {
        answer:
          "Они не только лишились акций на $1,3 млрд и выплатили штрафы на $100 млн",
        text:
          "Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года."
      },
      third: {
        answer:
          "Ничего не лишились, но получили иски за нарушение коммерческой тайны",
        text:
          "Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года."
      },
      fourth: {
        answer:
          "Ничего не лишились, к моменту ухода они уже получили всё вознаграждение",
        text:
          "Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года."
      },
      right: "Они лишились акций на $1,3 млрд",
      commonText: `Они ушли досрочно из-за <a href=${
        links.three
      } target="_blank">конфликта</a> с руководством.`
    },
    btnTitle: "Продолжить"
  },

  "4": {
    level: `${getCurrentLevel(4)}/${allLevels}`,
    question: "В какой скандал угодила компания «Газелькин» в июне 2018 года?",
    answers: {
      first: {
        answer:
          "Предложила клиентам вызвать «водителей-славян» за дополнительную плату",
        text: "Компания "
      },
      second: {
        answer:
          "Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет»",
        text: `Было пару раз, <a href=${
          links.four.personal
        } target="_blank">но не в июне</a>. На самом деле компания`
      },
      third: {
        answer: "Грузчики разбили антикварный шкаф стоимостью 163 млн рублей",
        text: "О таком случае не сообщалось, но зато компания"
      },
      fourth: {
        answer:
          "Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ",
        text: "О таком случае не сообщалось, но зато компания"
      },
      right:
        "Предложила клиентам вызвать «водителей-славян» за дополнительную плату",
      commonText: `дала клиентам <a href=${
        links.four.common
      } target="_blank">возможность</a> выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`
    },
    btnTitle: "Продолжить"
  },

  "5": {
    level: `${getCurrentLevel(5)}/${allLevels}`,
    question:
      "Простой вопрос для передышки. До какого порога правительство собирается повысить НДС?",
    answers: {
      first: {
        answer: "20%",
        text: "Да, "
      },
      second: {
        answer: "19%",
        text: "Нет, всё же именно"
      },
      third: {
        answer: "21%",
        text: "Нет, "
      },
      fourth: {
        answer: "Никто не собирается повышать НДС, зато повысят НДФЛ",
        text: "Нет, всё же именно "
      },
      right: "20%",
      commonText: `НДС <a href=${
        links.five.first
      } target="_blank">собираются</a> повысить с 18% до 20%. Кстати, <a href=${
        links.five.second
      } target="_blank">вот чем</a> это грозит`
    },
    btnTitle: "Продолжить"
  },

  "6": {
    level: `${getCurrentLevel(6)}/${allLevels}`,
    question:
      "Чем займётся Герман Клименко после ухода с поста советника президента по интернету?",
    answers: {
      first: {
        answer: "Проектами в сфере цифровой медицины",
        text: `<a href=${links.six.first} target="_blank">Верно</a>`
      },
      second: {
        answer: "Станет разрабатывать собственный мессенджер",
        text: `Это вполне возможно, но сперва он `
      },
      third: {
        answer: "Будет советником по медицине",
        text: `Нет, он `
      },
      fourth: {
        answer: "Отправится в кругосветное путешествие",
        text: `Он `
      },
      right: "Проектами в сфере цифровой медицины",
      commonText: `<a href=${
        links.six.second
      } target="_blank">планирует</a> заниматься собственными проектами в сфере цифровой медицины`
    },
    btnTitle: "Продолжить"
  },

  "7": {
    level: `${getCurrentLevel(7)}/${allLevels}`,
    question:
      "Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс-дизайна»?",
    answers: {
      first: {
        answer:
          "Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей",
        text: "Да, "
      },
      second: {
        answer:
          "Сервис экспресс-маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог",
        text: "Речь об экспресс-дизайне предметов, "
      },
      third: {
        answer: "Экспресс-доставку обедов в офис",
        text: "Речь об экспресс-дизайне предметов, "
      },
      fourth: {
        answer: "Создание визиток за 50 тысяч рублей",
        text: "Речь об экспресс-дизайне предметов, "
      },
      right: "Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей",
      commonText: `и заказчик точно так же <a href=${
        links.seven
      } target="_blank">обязан</a> принять первый предложенный вариант.`
    },
    btnTitle: "Продолжить"
  },

  "8": {
    level: `${getCurrentLevel(8)}/${allLevels}`,
    question:
      "Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ-2018?",
    answers: {
      first: {
        answer: "Это стыдно — нанимать людей, которыми нужно управлять",
        text: "Да, "
      },
      second: {
        answer:
          "Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель»",
        text: "Речь об экспресс-дизайне предметов, "
      },
      third: {
        answer: "Чтобы быть предпринимателем, не нужно никакого образования",
        text: "Речь об экспресс-дизайне предметов, "
      },
      fourth: {
        answer: "Предприниматели должны быть звёздами и элитой общества",
        text: "Речь об экспресс-дизайне предметов, "
      },
      right: "Это стыдно — нанимать людей, которыми нужно управлять",
      commonText: `Вопрос был с подвохом: все эти фразы прозвучали в <a href=${
        links.eight
      } target="_blank">интервью</a>.`
    },
    btnTitle: "Продолжить"
  },

  result: {
    btnTitle: "Пройти еще раз"
  }
});
