const generateUser = require("../utils/generateUser");

describe("user tests", async () => {
  let page;
  let links;
  before(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
    await page.setViewport({ width: 1920, height: 1040 });
    const link = "a.nav-link";
    links = await page.$$(link);
    await links[0].click();
  });

  after(async function() {
    await page.close();
  });
  it("should list users", async () => {
    const userListSelector = "#user-list";
    await page.waitForSelector(userListSelector, { visible: true, timeout: 0 });
    await page.waitFor(3000);
  });
  it("should create user", async () => {
    const userListSelector = "#user-list";
    const createLinkSelector = "#user-create-link";
    const formFirstNameSelector = "#formFirstName";
    const formLastNameSelector = "#formLastName";
    const formEmailSelector = "#formEmail";
    const formPhoneSelector = "#formPhone";
    const submitButtonSelector = "#user-submit";

    const user = generateUser();

    const linkCreate = await page.$(createLinkSelector);
    await linkCreate.click();

    const linkFirstName = await page.$(formFirstNameSelector);
    const linkLastName = await page.$(formLastNameSelector);
    const linkEmail = await page.$(formEmailSelector);
    const linkPhone = await page.$(formPhoneSelector);
    const linkSubmit = await page.$(submitButtonSelector);

    await linkEmail.click({ clickCount: 3 });
    await linkEmail.type(user.email);
    await linkFirstName.click({ clickCount: 3 });
    await linkFirstName.type(user.firstName);
    await linkLastName.click({ clickCount: 3 });
    await linkLastName.type(user.lastName);
    await linkPhone.click({ clickCount: 3 });
    await linkPhone.type(user.phone);
    linkSubmit.click();

    await page.waitForSelector(userListSelector, { visible: true, timeout: 0 });
    await page.waitFor(3000);
  });

  it("should edit user", async () => {
    const userListSelector = "#user-list";
    const editLinkSelector = "#user-edit-link";
    const formFirstNameSelector = "#formFirstName";
    const formLastNameSelector = "#formLastName";
    const formEmailSelector = "#formEmail";
    const formPhoneSelector = "#formPhone";
    const submitButtonSelector = "#user-submit";

    const user = generateUser();

    const linkEdit = await page.$(editLinkSelector);
    await linkEdit.click();

    const linkFirstName = await page.$(formFirstNameSelector);
    const linkLastName = await page.$(formLastNameSelector);
    const linkEmail = await page.$(formEmailSelector);
    const linkPhone = await page.$(formPhoneSelector);
    const linkSubmit = await page.$(submitButtonSelector);

    await linkEmail.click({ clickCount: 3 });
    await linkEmail.type(user.email);
    await linkFirstName.click({ clickCount: 3 });
    await linkFirstName.type(user.firstName);
    await linkLastName.click({ clickCount: 3 });
    await linkLastName.type(user.lastName);
    await linkPhone.click({ clickCount: 3 });
    await linkPhone.type(user.phone);
    linkSubmit.click();

    await page.waitForSelector(userListSelector, { visible: true, timeout: 0 });
    await page.waitFor(3000);
  });
});
