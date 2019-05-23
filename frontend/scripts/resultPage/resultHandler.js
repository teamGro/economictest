import { progress, getCurrentLevel } from '../src/utils';
import createResultView from './resultView';
import Question from '../questions/questHandler';
import {Sharer} from '../src/sharer';

export default class Result {
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
