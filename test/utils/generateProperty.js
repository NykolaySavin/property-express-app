const faker = require("faker");

module.exports = function generateProperty() {
  const address = {
    postcode: faker.address.zipCode(),
    city: faker.address.city(),
    city_district: faker.address.state(),
    street: faker.address.streetName(),
    house_number: faker.address.streetSuffix(),
    country: faker.address.country()
  };
  const yearBuilt = faker.random.number({ min: 1900, max: 2020 });
  const yearAltered = faker.random.number({ min: 1900, max: 2020 });
  const livingArea = faker.random.number({ min: 100, max: 300 });
  const buildingArea = faker.random.number({ min: 100, max: 300 });
  const bedroomsTotal = faker.random.number({ min: 1, max: 3 });
  const bathroomsTotal = faker.random.number({ min: 1, max: 3 });

  const result = {
    address,
    yearAltered,
    yearBuilt,
    livingArea,
    buildingArea,
    bathroomsTotal,
    bedroomsTotal
  };
  return result;
};
