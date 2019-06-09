import createQuestionView from "./questView";
import { getCurrentLevel, progress } from "../src/utils";
import Answer from "../answers/answerHandler";
import anime from "../src/anime.es.js";

export default class Question {
  constructor() {
    this.data = window.testData;
    this.isUserAnswerRight = false;
  }

  getLayout(level = 1) {
    let container = document.querySelector(".container");
    container.innerHTML = createQuestionView(this.data[level], level);
    anime({
      targets: [".test__question", ".test__list"],
      translateX: 1000,
      easing: "easeInOutExpo"
    });
    return;
  }

  init(level) {
    this.getLayout(level);

    let list = document.querySelector(".test__list");
    list.addEventListener("click", e => {
      let target = e.target;
      if (target.tagName != "A") return;

      let answer;
      if (
        target.textContent === this.data[getCurrentLevel(level)].answers.right
      ) {
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
