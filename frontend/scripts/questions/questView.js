import {allLevels} from '../src/utils';

export default function createQuestionView (obj, level) {
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
