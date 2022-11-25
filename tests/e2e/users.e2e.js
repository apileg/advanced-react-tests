const UsersPage = require("../pages/users.page");

describe("UsersPage", () => {
  it("load data", async () => {
    await UsersPage.loadData();
  });

  it("delete users", async () => {
    await UsersPage.loadData();
    await UsersPage.deleteUser();
  });
});
