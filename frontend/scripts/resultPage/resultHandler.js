import { progress, getCurrentLevel } from "../src/utils";
import createResultView from "./resultView";
import Question from "../questions/questHandler";
import { Sharer } from "../src/sharer.min.js";
import anime from "../src/anime.es.js";

export default class Result {
  constructor() {
    this.data = window.testData;
  }

  getLayout() {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    container.innerHTML = createResultView(this.data.result);
    anime({
      targets: ".test__repeat",
      translateX: 500
    });
    return;
  }

  init() {
    this.getLayout();
    this.repeat();
    let links = document.querySelectorAll(".socials__link");
    window.Sharer.init();
    for (let link of links) {
      link.addEventListener("click", e => {
        e.preventDefault();
        window.Sharer.init();
      });
    }

    return;
  }

  repeat(level = 1) {
    let btnRepeat = document.querySelector(".test__repeat");
    btnRepeat.addEventListener("click", e => {
      e.preventDefault();
      progress.success = 0;
      progress.mistakes = 0;
      let question = new Question();
      return question.init(getCurrentLevel(level));
    });

    return;
  }
}
