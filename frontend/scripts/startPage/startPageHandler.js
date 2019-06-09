import createStartView from "./startView";
//let anime = require("../src/anime.es.js");

import { getCurrentLevel } from "../src/utils";
import Question from "../questions/questHandler";

class StartPage {
  constructor() {
    this.data = window.testData;
  }

  getLayout() {
    let container = document.querySelector(".container");
    container.innerHTML = createStartView(this.data.startPage);

    return;
  }

  init() {
    this.getLayout();

    let btnStart = document.querySelector(".test__start");
    btnStart.addEventListener("click", e => {
      e.preventDefault();
      let question = new Question();
      return question.init(getCurrentLevel(1));
    });
  }
}

let startPage = new StartPage();
export default startPage;
