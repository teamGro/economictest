import createQuestionView from './questView';
import {getCurrentLevel, progress} from '../src/utils';
import Answer from '../answers/answerHandler';

export default class Question {
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

