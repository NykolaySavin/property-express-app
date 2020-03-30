const faker = require("faker");

module.exports = function generateUser() {
  const phone = "+11111111111";
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const result = {
    phone,
    firstName,
    lastName,
    email
  };
  return result;
};
