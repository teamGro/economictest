//import anime from "../src/anime";

export default function createAnswerView(obj, userAnswer) {
  let text = "";
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
        <p class="test__answer">${userAnswer}</p>
        <p class="test__text"><b>${text}</b> ${obj.answers.commonText}</p>
        <button class="test__next">
          ${
            obj.btnTitle
          } <span class="test__arrow"><i class="fas fa-arrow-right"></i></span>
        </button
      </div>
  `;
}
