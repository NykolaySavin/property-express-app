const generateProperty = require("../utils/generateProperty");

describe("property tests", async () => {
  let page;
  let links;
  before(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
    await page.setViewport({ width: 1920, height: 1040 });
    const link = "a.nav-link";
    links = await page.$$(link);
    await links[1].click();
  });

  after(async function() {
    await page.close();
  });
  it("should list properties", async () => {
    const propertyListSelector = "#property-list";
    await page.waitForSelector(propertyListSelector, {
      visible: true,
      timeout: 0
    });
    await page.waitFor(3000);
  });
  it("should create property", async () => {
    const propertyListSelector = "#property-list";
    const createLinkSelector = "#property-create-link";
    const formStreetSelector = "#formStreet";
    const formHouseNumberSelector = "#formHouseNumber";
    const formPostcodeSelector = "#formPostcode";
    const formCityDistrictSelector = "#formCityDistrict";
    const formCitySelector = "#formCity";
    const formCountrySelector = "#formCountry";
    const formYearBuiltSelector = "#formYearBuilt";
    const formYearAlteredSelector = "#formYearAltered";
    const formBathroomsTotalSelector = "#formBathroomsTotal";
    const formBedroomsTotalSelector = "#formBedroomsTotal";
    const formLivingAreaSelector = "#formLivingArea";
    const formBuildingAreaSelector = "#formBuildingArea";
    const submitButtonSelector = "#property-submit";

    const property = generateProperty();

    const linkCreate = await page.$(createLinkSelector);
    await linkCreate.click();

    const linkStreet = await page.$(formStreetSelector);
    const linkHouseNumber = await page.$(formHouseNumberSelector);
    const linkPostcode = await page.$(formPostcodeSelector);
    const linkCityDistrict = await page.$(formCityDistrictSelector);
    const linkCity = await page.$(formCitySelector);
    const linkCountry = await page.$(formCountrySelector);
    const linkYearBuilt = await page.$(formYearBuiltSelector);
    const linkYearAltered = await page.$(formYearAlteredSelector);
    const linkBathroomsTotal = await page.$(formBathroomsTotalSelector);
    const linkBedroomsTotal = await page.$(formBedroomsTotalSelector);
    const linkLivingArea = await page.$(formLivingAreaSelector);
    const linkBuildingArea = await page.$(formBuildingAreaSelector);
    const linkSubmit = await page.$(submitButtonSelector);

    await linkStreet.click({ clickCount: 3 });
    await linkStreet.type(property.address.street);
    await linkHouseNumber.click({ clickCount: 3 });
    await linkHouseNumber.type(property.address.house_number);
    await linkPostcode.click({ clickCount: 3 });
    await linkPostcode.type(property.address.postcode);
    await linkCityDistrict.click({ clickCount: 3 });
    await linkCityDistrict.type(property.address.city_district);
    await linkCity.click({ clickCount: 3 });
    await linkCity.type(property.address.city);
    await linkCountry.click({ clickCount: 3 });
    await linkCountry.type(property.address.country);
    /* await linkYearAltered.click({ clickCount: 3 });
    await linkYearAltered.type(property.yearAltered);
    await linkYearBuilt.click({ clickCount: 3 });
    await linkYearBuilt.type(property.yearBuilt);
    await linkBathroomsTotal.click({ clickCount: 3 });
    await linkBathroomsTotal.type(property.bathroomsTotal);
    await linkBedroomsTotal.click({ clickCount: 3 });
    await linkBedroomsTotal.type(property.bedroomsTotal);
    await linkLivingArea.click({ clickCount: 3 });
    await linkLivingArea.type(property.livingArea);
    await linkBuildingArea.click({ clickCount: 3 });
    await linkBuildingArea.type(property.buildingArea);*/

    linkSubmit.click();

    await page.waitForSelector(propertyListSelector, {
      visible: true,
      timeout: 0
    });
    await page.waitFor(3000);
  });

  it("should edit property", async () => {
    const propertyListSelector = "#property-list";
    const editLinkSelector = "#property-edit-link";
    const formStreetSelector = "#formStreet";
    const formHouseNumberSelector = "#formHouseNumber";
    const formPostcodeSelector = "#formPostcode";
    const formCityDistrictSelector = "#formCityDistrict";
    const formCitySelector = "#formCity";
    const formCountrySelector = "#formCountry";
    const formYearBuiltSelector = "#formYearBuilt";
    const formYearAlteredSelector = "#formYearAltered";
    const formBathroomsTotalSelector = "#formBathroomsTotal";
    const formBedroomsTotalSelector = "#formBedroomsTotal";
    const formLivingAreaSelector = "#formLivingArea";
    const formBuildingAreaSelector = "#formBuildingArea";
    const submitButtonSelector = "#property-submit";

    const property = generateProperty();

    const linkEdit = await page.$(editLinkSelector);
    await linkEdit.click();

    const linkStreet = await page.$(formStreetSelector);
    const linkHouseNumber = await page.$(formHouseNumberSelector);
    const linkPostcode = await page.$(formPostcodeSelector);
    const linkCityDistrict = await page.$(formCityDistrictSelector);
    const linkCity = await page.$(formCitySelector);
    const linkCountry = await page.$(formCountrySelector);
    const linkYearBuilt = await page.$(formYearBuiltSelector);
    const linkYearAltered = await page.$(formYearAlteredSelector);
    const linkBathroomsTotal = await page.$(formBathroomsTotalSelector);
    const linkBedroomsTotal = await page.$(formBedroomsTotalSelector);
    const linkLivingArea = await page.$(formLivingAreaSelector);
    const linkBuildingArea = await page.$(formBuildingAreaSelector);
    const linkSubmit = await page.$(submitButtonSelector);

    await linkStreet.click({ clickCount: 3 });
    await linkStreet.type(property.address.street);
    await linkHouseNumber.click({ clickCount: 3 });
    await linkHouseNumber.type(property.address.house_number);
    await linkPostcode.click({ clickCount: 3 });
    await linkPostcode.type(property.address.postcode);
    await linkCityDistrict.click({ clickCount: 3 });
    await linkCityDistrict.type(property.address.city_district);
    await linkCity.click({ clickCount: 3 });
    await linkCity.type(property.address.city);
    await linkCountry.click({ clickCount: 3 });
    await linkCountry.type(property.address.country);
    /*
    await linkYearAltered.click({ clickCount: 3 });
    await linkYearAltered.type(property.yearAltered);
    await linkYearBuilt.click({ clickCount: 3 });
    await linkYearBuilt.type(property.yearBuilt);
    await linkBathroomsTotal.click({ clickCount: 3 });
    await linkBathroomsTotal.type(property.bathroomsTotal);
    await linkBedroomsTotal.click({ clickCount: 3 });
    await linkBedroomsTotal.type(property.bedroomsTotal);
    await linkLivingArea.click({ clickCount: 3 });
    await linkLivingArea.type(property.livingArea);
    await linkBuildingArea.click({ clickCount: 3 });
    await linkBuildingArea.type(property.buildingArea);*/

    linkSubmit.click();

    await page.waitForSelector(propertyListSelector, {
      visible: true,
      timeout: 0
    });
    await page.waitFor(3000);
  });
});
