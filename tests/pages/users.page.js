const Page = require("./page");
// TODO: to start loki test, you need to install brew cask install google-chrome-canary
class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    return browser.react$$("User"); // User - components name /userForTest/User.jsx ; get users array
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error("Can't load users data");
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.usersItems.length;

      if (!usersCount) {
        throw new Error("Can't find users");
      }
      await this.usersItems[0].$("#user-delete").click();
      const usersCountAfterDelete = await this.usersItems.length;

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error("Can't delete, or was deleted more than once");
      }
    } catch (error) {
      throw new Error("Can't delete users data " + error.message);
    }
  }

  open() {
    return super.open("users-e2e-test");
  }
}

module.exports = new UsersPage();
