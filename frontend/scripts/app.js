import startPage from './startPage/startPageHandler';

class App {
  init () {
    return startPage.init();
  }
}

let app = new App();
export default app;
