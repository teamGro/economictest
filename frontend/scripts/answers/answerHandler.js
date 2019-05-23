import createAnswerView from './answerView';
import {getCurrentLevel, allLevels} from '../src/utils';
import Question from '../questions/questHandler';
// import {resultHandler} from '../resultPage/resultHandler';

export default class Answer {
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
        return; // resultHandler();
      }

      level++;
      let question = new Question();
      return question.init(getCurrentLevel(level));
    });
  }
}
