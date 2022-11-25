const Page = require("./page");

class HelloPage extends Page {
  get toggleBtn() {
    return $("#toggle"); // take by id
  }
  get inputSearch() {
    return $("#search"); // take by id
  }
  get helloTitle() {
    return $("#hello"); // take by id
  }

  async toggleTitleWithInput(text) {
    await this.inputSearch.setValue(text);
    await this.toggleBtn.click();
  }

  open() {
    return super.open("hello");
  }
}

module.exports = new HelloPage();
