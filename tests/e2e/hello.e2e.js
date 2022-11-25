const HelloPage = require("../pages/hello.page");

describe("My hello world application", () => {
  it("test", async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput("hello");
    await expect(HelloPage.helloTitle).toBeExisting();
    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it("should not toggle", async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput("random incorrect value");
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
