(function () {
'use strict';

function createStartView (obj) {
  return `
    <div class="test">

      <div class="test__wrapper">
        <span class="test__describe">${obj.describe}</span>
        <h1 class="test__title">${obj.title}</h1>
        <p class="test__subtitle">${obj.subtitle}</p>
      </div>

      <div class="test__cash">
        <img src='img/cash.png' alt='американские доллары' data-rjs="3">
      </div>
      <div class="test__face">
        <img src='img/face.png' alt='профиль известного предпринимателя' data-rjs="3">
      </div>
      <div class="test__newspapper">
        <img src='img/newspapper.png' alt='газета' data-rjs="3">
      </div>

      <div>
        <button class="test__start btn">${obj.btnTitle}</button>
      </div>

    </div>
  `;
}

function getCurrentLevel (level) {
  return level;
}

const allLevels = 8;

let progress = {
  mistakes: 0,
  success: 0
};

function createQuestionView (obj, level) {
  let container = document.querySelector('.container');
  container.innerHTML = '';
  return `
    <div class="test test--game">
      <div class="test__wrap ">
        <span class="test__level">${level}/${allLevels}</span>
        <p class="test__question">${obj.question}</p>
        <ul class="test__list">
          <li class="test__item">
            <a class="answer" href="#" onclick="return false">${obj.answers.first.answer}</a>
          </li>
          <li class="test__item">
            <a class="answer" href="#" onclick="return false">${obj.answers.second.answer}</a>
          </li>
          <li class="test__item">
            <a class="answer" href="#" onclick="return false">${obj.answers.third.answer}</a>
          </li>
          <li class="test__item">
            <a class="answer" href="#" onclick="return false">${obj.answers.fourth.answer}</a>
          </li>
        </ul>
      </div>
    </div>
  `;
}

function createAnswerView (obj, userAnswer) {
  let text = '';
  for (let key in obj.answers) {
    if (obj.answers[key].answer == userAnswer) {
      text = obj.answers[key].text;
    }
  }
  return `
    <div class='test test--game'>
      <div class="test__wrap">
        <span class="test__level">${obj.level}</span>
        <p class="test__question test__question--anime">${obj.question}</p>
        <p class="test__answer answer">${userAnswer}</p>
        <p class="test__text"><b>${text}</b> ${obj.answers.commonText}</p>
        <button class="test__next">
          ${obj.btnTitle} <span class="test__arrow"><i class="fas fa-arrow-right"></i></span>
        </button
      </div>  
  `;
}

// import {Share} from './resultHandler';
let data = window.testData;
let site = 'http://localhost:3000';
let title = 'Как хорошо вы разбираетесь в новостях бизнеса';

function addImgWithAlt (str) {
  return str;
}

function createResultView (obj) {
  let text = '';
  let imgBox = {};

  if (progress.success == 0) {
    text = 'Мне больше интересен футбол';
    imgBox.src = 'img/football.png';
    imgBox.src2x = 'img/football@2x.png';
    imgBox.alt = '"Мне больше интересен футбол"';
    imgBox.myClassName = '"test__box box box--zero"';
  } else if (progress.success <= 3) {
    text = 'Читаю <a href="#">vc.ru</a> с экрана попутчика в метро';
    imgBox.src = 'img/women.png';
    imgBox.alt = '"Читаю с экрана попутчика в метро"';
    imgBox.myClassName = '"test__box box box--three"';
  } else if (progress.success <= 5) {
    text = 'Бизнес это интересно,<br> но где взять столько времени?';
    imgBox.src = 'img/hand.png';
    imgBox.alt = '"Бизнес это интересно, но где взять столько времени?"';
    imgBox.myClassName = '"test__box box box--five"';
  } else if (progress.success <= 7) {
    text = 'Читаю <a href="#">vc.ru</a> каждый день, но работать тоже нужно';
    imgBox.src = 'img/man.png';
    imgBox.alt = '"Читаю vc.ru каждый день, но работать тоже нужно"';
    imgBox.myClassName = '"test__box box box--seven"';
  } else {
    text = 'Я работаю<br> в редакции <a href="#">vc.ru</a>';
    imgBox.src = 'img/editor.png';
    imgBox.alt = '"Я работаю в редакции vc.ru"';
    imgBox.myClassName = '"test__box box box--eight"';
  }

  return `

    <div class="test test--game">
      <div class="test__wrap test__wrap--result">
        <p class="test__level">${progress.success} из ${allLevels} правильных ответов</p>
        <p class="test__result">${text}</p>
        <ul class="test__socials socials">

          <li class="socials__item">
            <a class="socials__link" href="http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=${title}&p%5Burl%5D=${site}" target="_blank">
              <span class="visually-hidden">fb</span>
              <i class="socials__icon fab fa-facebook-f"></i>
              <span class="socials__text">Поделиться</span>
            </a>
          </li>

          <li class="socials__item">
            <a class="socials__link" href="http://vk.com/share.php?url=${site}&title=${title}&image=${addImgWithAlt(imgBox.src)}&noparse=true" target="_blank">
              <span class="visually-hidden">vk</span>
              <i class="socials__icon fab fa-vk"></i>
            </a>            
          </li>

          <li class="socials__item">
            <a class="socials__link" href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=${title}&url=${site}" target="_blank" >
              <span class="visually-hidden">twitter</span>
              <i class="socials__icon fab fa-twitter"></i>
            </a>
          </li>
        </ul>

        <button class="test__repeat">
          ${obj.btnTitle}
          <i class="test__refresh fas fa-redo"></i>
        </button>
      </div>

      <div class=${addImgWithAlt(imgBox.myClassName)}>
        <img class="box__img" src=${addImgWithAlt(imgBox.src)} alt=${addImgWithAlt(imgBox.alt)} data-rjs="3">
      </div>
    </div>
  `;
}

//

// <a onclick="Share.facebook('URL','TITLE','IMG_PATH','DESC')"> {шарь меня полностью}</a>

// <a class="socials__link" href="#">
//   <span class="visually-hidden">fb</span>
//   <i class="socials__icon fab fa-facebook-f"></i>
//   <span class="socials__text">Поделиться</span>
// </a>

// <a class="socials__link" id="my-share" href="vk.com">
//   <span class="visually-hidden">vk</span>
//   <i class="socials__icon fab fa-vk"></i>
// </a>

// <a class="socials__link" href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=${title}&url=${site}" target="_blank" >
//   <span class="visually-hidden">twitter</span>
//   <i class="socials__icon fab fa-twitter"></i>
// </a>

class Result {
  constructor () {
    this.data = window.testData;
  }

  getLayout () {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    container.innerHTML = createResultView(this.data.result);
    return;
  }

  init () {
    this.getLayout();
    this.repeat();
    return;
  }

  repeat (level = 1) {
    let btnRepeat = document.querySelector('.test__repeat');
    btnRepeat.addEventListener('click', (e) => {
      e.preventDefault();
      progress.success = 0;
      progress.mistakes = 0;
      let question = new Question();
      return question.init(getCurrentLevel(level));
    });

    return;
  }
}

// function resultHandler () {
//
//
//
//
//   let links = document.querySelector('.social__links');
//
//   for (let link of links) {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       window.Sharer.init();
//     });
//   }
// }

// let url = '';
// export let Share = {
//   vkontakte: function (purl, ptitle, pimg, text) {
//     url = 'http://vkontakte.ru/share.php?';
//     url += 'url=' + encodeURIComponent(purl);
//     url += '&title=' + encodeURIComponent(ptitle);
//     url += '&image=' + encodeURIComponent(pimg);
//     url += '&noparse=true';
//     Share.popup(url);
//   },
//   facebook: function (purl, ptitle, pimg, text) {
//     url = 'http://www.facebook.com/sharer.php?s=100';
//     url += '&p[title]=' + encodeURIComponent(ptitle);
//     url += '&p[summary]=' + encodeURIComponent(text);
//     url += '&p[url]=' + encodeURIComponent(purl);
//     url += '&p[images][0]=' + encodeURIComponent(pimg);
//     Share.popup(url);
//   },
//   twitter: function (purl, ptitle) {
//     url = 'http://twitter.com/share?';
//     url += 'text=' + encodeURIComponent(ptitle);
//     url += '&url=' + encodeURIComponent(purl);
//     url += '&counturl=' + encodeURIComponent(purl);
//     Share.popup(url);
//   },
//
//   popup: function (url) {
//     window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
//   },
//
//   me: function (el) {
//     // console.log(el.href);
//     // Share.popup(el.href);
//     return false;
//   }
// };

class Answer {
  constructor () {
    this.data = window.testData;
  }

  getLayout (answer, level) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    container.innerHTML = createAnswerView(this.data[getCurrentLevel(level)], answer);
    return;
  }

  getCondition (answerCondition) {
    let answerBox = document.querySelector('.test__answer');

    if (answerCondition) {
      answerBox.classList.add('test__answer--right');
    } else {
      answerBox.classList.add('test__answer--loose');
    }

    return;
  }

  init (answer, level, answerCondition) {
    this.getLayout(answer, level);
    this.getCondition(answerCondition);

    let btnNext = document.querySelector('.test__next');
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();

      if (level == allLevels) {
        let result = new Result();
        return result.init();
      }

      level++;
      let question = new Question();
      return question.init(getCurrentLevel(level));
    });
  }
}

class Question {
  constructor () {
    this.data = window.testData;
    this.isUserAnswerRight = false;
  }

  getLayout (level = 1) {
    let container = document.querySelector('.container');
    container.innerHTML = createQuestionView(this.data[level], level);
    return;
  }

  init (level) {
    this.getLayout(level);

    let list = document.querySelector('.test__list');
    list.addEventListener('click', (e) => {
      let target = e.target;
      console.log(target);
      if (target.tagName != 'A') return;

      let answer;
      if (target.textContent === this.data[getCurrentLevel(level)].answers.right) {
        progress.success += 1;
        this.isUserAnswerRight = true;
        answer = new Answer();
        return answer.init(target.textContent, level, this.isUserAnswerRight);
      } else {
        progress.mistakes += 1;
        answer = new Answer();
        return answer.init(target.textContent, level, this.isUserAnswerRight);
      }
    });
  }
}

class StartPage {
  constructor () {
    this.data = window.testData;
  }

  getLayout () {
    let container = document.querySelector('.container');
    container.innerHTML = createStartView(this.data.startPage);
    return;
  }

  init () {
    this.getLayout();

    let btnStart = document.querySelector('.test__start');
    btnStart.addEventListener('click', (e) => {
      e.preventDefault();
      let question = new Question();
      return question.init(getCurrentLevel(1));
    });
  }
}

let startPage = new StartPage();

class App {
  init () {
    return startPage.init();
  }
}

let app = new App();

app.init();

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
