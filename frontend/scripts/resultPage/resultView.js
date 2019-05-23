import {allLevels, progress} from '../src/utils';
// import {Share} from './resultHandler';
let data = window.testData;
let site = 'http://localhost:3000';
let title = 'Как хорошо вы разбираетесь в новостях бизнеса';

function addImgWithAlt (str) {
  return str.substr(0);
}

export default function createResultView (obj) {
  let text = '';
  let imgBox = {};

  if (progress.success == 0) {
    text = 'Мне больше интересен футбол';
    imgBox.src = 'img/football.png';
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
        <img class="box__img" src=${addImgWithAlt(imgBox.src)} alt=${addImgWithAlt(imgBox.alt)}>
      </div>
    </div>

  `;
}

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

