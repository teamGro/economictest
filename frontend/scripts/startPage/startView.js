export default function createStartView (obj) {
  console.log(obj);
  return `
    <div class="test">

      <div class="test__wrapper">
        <span class="test__describe">${obj.describe}</span>
        <h1 class="test__title">${obj.title}</h1>
        <p class="test__subtitle">${obj.subtitle}</p>
      </div>

      <div class="test__cash">
        <img src='img/cash.png' alt='американские доллары'>
      </div>
      <div class="test__face">
        <img src='img/face.png' alt='профиль известного предпринимателя'>
      </div>
      <div class="test__newspapper">
        <img src='img/newspapper.png' alt='газета'>
      </div>

      <div>
        <button class="test__start btn">${obj.btnTitle}</button>
      </div>

    </div>
  `;
}
