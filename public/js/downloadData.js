function getData (url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status != 200) {
    alert('Данные не загрузились, обновите страницу');
  } else {
    try {
      window.testData = JSON.parse(xhr.responseText);
    } catch (e) {
      alert('Некорректный формат данных, обновите страницу');
    }
  }
  return false;
}

getData('/getData');
