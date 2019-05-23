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

let url = 'https://economictest.herokuapp.com';
let title = '"Как хорошо вы разбираетесь в новостях бизнеса"';

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
            <a class="socials__link" href="http://www.facebook.com" data-sharer="facebook" data-url=${url} target="_blank">
              <span class="visually-hidden">fb</span>
              <i class="socials__icon fab fa-facebook-f"></i>
              <span class="socials__text">Поделиться</span>
            </a>
          </li>

          <li class="socials__item">
            <a class="socials__link" href="http://vk.com/" data-sharer="vk" data-title=${title} data-url=${url} target="_blank">
              <span class="visually-hidden">vk</span>
              <i class="socials__icon fab fa-vk"></i>
            </a>            
          </li>

          <li class="socials__item">
            <a class="socials__link" href="https:/twitter.com" data-sharer="twitter" data-title=${title} data-url=${url} target="_blank" >
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

/*

<button class="tw"  data-hashtags="awesome, sharer.js" >Share on Twitter</button>

*/

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

/**
 * @preserve
 * Sharer.js
 *
 * @description Create your own social share buttons
 * @version 0.3.8
 * @author Ellison Leao <ellisonleao@gmail.com>
 * @license GPLv3
 *
 */

(function (window, document) {
  var Sharer = function (elem) {
    this.elem = elem;
  };

    /**
     *  @function init
     *  @description bind the events for multiple sharer elements
     *  @returns {Empty}
     */
  Sharer.init = function () {
    var elems = document.querySelectorAll('[data-sharer]'),
      i,
      l = elems.length;

    for (i = 0; i < l; i++) {
      // Sharer.add(elems[i]);
      elems[i].addEventListener('click', Sharer.add);
    }
  };

    /**
     *  @function add
     *  @description bind the share event for a single dom element
     *  @returns {Empty}
     */
  Sharer.add = function (elem) {
    var target = elem.currentTarget || elem.srcElement;
    var sharer = new Sharer(target);
    sharer.share();
  };

    // instance methods
  Sharer.prototype = {
    constructor: Sharer,
        /**
         *  @function getValue
         *  @description Helper to get the attribute of a DOM element
         *  @param {String} attr DOM element attribute
         *  @returns {String|Empty} returns the attr value or empty string
         */
    getValue: function (attr) {
      var val = this.elem.getAttribute('data-' + attr);
            // handing facebook hashtag attribute
      if (val && attr === 'hashtag') {
        if (!val.startsWith('#')) {
          val = '#' + val;
        }
      }
      return val;
    },

        /**
         * @event share
         * @description Main share event. Will pop a window or redirect to a link
         * based on the data-sharer attribute.
         */
    share: function () {
      var sharer = this.getValue('sharer').toLowerCase(),
        sharers = {
          facebook: {
            shareUrl: 'https://www.facebook.com/sharer/sharer.php',
            params: {
              u: this.getValue('url'),
              hashtag: this.getValue('hashtag')
            }
          },
          linkedin: {
            shareUrl: 'https://www.linkedin.com/shareArticle',
            params: {
              url: this.getValue('url'),
              mini: true
            }
          },
          twitter: {
            shareUrl: 'https://twitter.com/intent/tweet/',
            params: {
              text: this.getValue('title'),
              url: this.getValue('url'),
              hashtags: this.getValue('hashtags'),
              via: this.getValue('via')
            }
          },
          email: {
            shareUrl: 'mailto:' + this.getValue('to') || '',
            params: {
              subject: this.getValue('subject'),
              body: this.getValue('title') + '\n' + this.getValue('url')
            },
            isLink: true
          },
          whatsapp: {
            shareUrl: this.getValue('web') !== null ? 'https://api.whatsapp.com/send' : 'whatsapp://send',
            params: {
              text: this.getValue('title') + ' ' + this.getValue('url')
            },
            isLink: true
          },
          telegram: {
            shareUrl: 'tg://msg_url',
            params: {
              text: this.getValue('title'),
              url: this.getValue('url'),
              to: this.getValue('to')
            },
            isLink: true
          },
          viber: {
            shareUrl: 'viber://forward',
            params: {
              text: this.getValue('title') + ' ' + this.getValue('url')
            },
            isLink: true
          },
          line: {
            shareUrl:
                            'http://line.me/R/msg/text/?' +
                            encodeURIComponent(this.getValue('title') + ' ' + this.getValue('url')),
            isLink: true
          },
          pinterest: {
            shareUrl: 'https://www.pinterest.com/pin/create/button/',
            params: {
              url: this.getValue('url'),
              media: this.getValue('image'),
              description: this.getValue('description')
            }
          },
          tumblr: {
            shareUrl: 'http://tumblr.com/widgets/share/tool',
            params: {
              canonicalUrl: this.getValue('url'),
              content: this.getValue('url'),
              posttype: 'link',
              title: this.getValue('title'),
              caption: this.getValue('caption'),
              tags: this.getValue('tags')
            }
          },
          hackernews: {
            shareUrl: 'https://news.ycombinator.com/submitlink',
            params: {
              u: this.getValue('url'),
              t: this.getValue('title')
            }
          },
          reddit: {
            shareUrl: 'https://www.reddit.com/submit',
            params: { url: this.getValue('url') }
          },
          vk: {
            shareUrl: 'http://vk.com/share.php',
            params: {
              url: this.getValue('url'),
              title: this.getValue('title'),
              description: this.getValue('caption'),
              image: this.getValue('image')
            }
          },
          xing: {
            shareUrl: 'https://www.xing.com/app/user',
            params: {
              op: 'share',
              url: this.getValue('url'),
              title: this.getValue('title')
            }
          },
          buffer: {
            shareUrl: 'https://buffer.com/add',
            params: {
              url: this.getValue('url'),
              title: this.getValue('title'),
              via: this.getValue('via'),
              picture: this.getValue('picture')
            }
          },
          instapaper: {
            shareUrl: 'http://www.instapaper.com/edit',
            params: {
              url: this.getValue('url'),
              title: this.getValue('title'),
              description: this.getValue('description')
            }
          },
          pocket: {
            shareUrl: 'https://getpocket.com/save',
            params: {
              url: this.getValue('url')
            }
          },
          digg: {
            shareUrl: 'http://www.digg.com/submit',
            params: {
              url: this.getValue('url')
            }
          },
          stumbleupon: {
            shareUrl: 'http://www.stumbleupon.com/submit',
            params: {
              url: this.getValue('url'),
              title: this.getValue('title')
            }
          },
          flipboard: {
            shareUrl: 'https://share.flipboard.com/bookmarklet/popout',
            params: {
              v: 2,
              title: this.getValue('title'),
              url: this.getValue('url'),
              t: Date.now()
            }
          },
          weibo: {
            shareUrl: 'http://service.weibo.com/share/share.php',
            params: {
              url: this.getValue('url'),
              title: this.getValue('title'),
              pic: this.getValue('image'),
              appkey: this.getValue('appkey'),
              ralateUid: this.getValue('ralateuid'),
              language: 'zh_cn'
            }
          },
          renren: {
            shareUrl: 'http://share.renren.com/share/buttonshare',
            params: {
              link: this.getValue('url')
            }
          },
          myspace: {
            shareUrl: 'https://myspace.com/post',
            params: {
              u: this.getValue('url'),
              t: this.getValue('title'),
              c: this.getValue('description')
            }
          },
          blogger: {
            shareUrl: 'https://www.blogger.com/blog-this.g',
            params: {
              u: this.getValue('url'),
              n: this.getValue('title'),
              t: this.getValue('description')
            }
          },
          baidu: {
            shareUrl: 'http://cang.baidu.com/do/add',
            params: {
              it: this.getValue('title'),
              iu: this.getValue('url')
            }
          },
          douban: {
            shareUrl: 'https://www.douban.com/share/service',
            params: {
              name: this.getValue('title'),
              href: this.getValue('url'),
              image: this.getValue('image')
            }
          },
          okru: {
            shareUrl: 'https://connect.ok.ru/dk',
            params: {
              'st.cmd': 'WidgetSharePreview',
              'st.shareUrl': this.getValue('url'),
              title: this.getValue('title')
            }
          },
          mailru: {
            shareUrl: 'http://connect.mail.ru/share',
            params: {
              share_url: this.getValue('url'),
              linkname: this.getValue('title'),
              linknote: this.getValue('description'),
              type: 'page'
            }
          },
          evernote: {
            shareUrl: 'http://www.evernote.com/clip.action',
            params: {
              url: this.getValue('url'),
              title: this.getValue('title')
            }
          },
          skype: {
            shareUrl: 'https://web.skype.com/share',
            params: {
              url: this.getValue('url'),
              title: this.getValue('title')
            }
          }
        },
        s = sharers[sharer];

            // custom popups sizes
      if (s) {
        s.width = this.getValue('width');
        s.height = this.getValue('height');
      }
      return s !== undefined ? this.urlSharer(s) : false;
    },
        /**
         * @event urlSharer
         * @param {Object} sharer
         */
    urlSharer: function (sharer) {
      var p = sharer.params || {},
        keys = Object.keys(p),
        i,
        str = keys.length > 0 ? '?' : '';
      for (i = 0; i < keys.length; i++) {
        if (str !== '?') {
          str += '&';
        }
        if (p[keys[i]]) {
          str += keys[i] + '=' + encodeURIComponent(p[keys[i]]);
        }
      }
      sharer.shareUrl += str;

      if (!sharer.isLink) {
        var popWidth = sharer.width || 600,
          popHeight = sharer.height || 480,
          left = window.innerWidth / 2 - popWidth / 2 + window.screenX,
          top = window.innerHeight / 2 - popHeight / 2 + window.screenY,
          popParams =
                        'scrollbars=no, width=' +
                        popWidth +
                        ', height=' +
                        popHeight +
                        ', top=' +
                        top +
                        ', left=' +
                        left,
          newWindow = window.open(sharer.shareUrl, '', popParams);

        if (window.focus) {
          newWindow.focus();
        }
      } else {
        window.location.href = sharer.shareUrl;
      }
    }
  };

    // adding sharer events on domcontentload
  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    Sharer.init();
  } else {
    document.addEventListener('DOMContentLoaded', Sharer.init);
  }

    // turbolinks compatibility
  window.addEventListener('page:load', Sharer.init);

    // exporting sharer for external usage
  window.Sharer = Sharer;
})(window, document);

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
    let links = document.querySelectorAll('.socials__link');
    window.Sharer.init();
    for (let link of links) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.Sharer.init();
      });
    }

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
