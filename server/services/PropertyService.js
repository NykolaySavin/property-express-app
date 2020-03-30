const { transaction } = require("objection");
const PropertyModel = require("../models/Property");
const UserService = require("./UserService");
const NotFoundError = require("../errors/NotFoundError");

/**
 * Get Property by Property ID
 *
 * @param {String} propertyId The ID of the Property that needs to be fetched.
 * @param {String} filter Object with query params
 * @return {PropertyModel}
 * */
async function getPropertyById(propertyId, filter) {
  const query = PropertyModel.query().findById(propertyId);
  if (filter) {
    const { eager } = filter;
    if (eager) {
      let eagerQuery = "";
      if (eager.length > 0) {
        eagerQuery = `[${eager.join(", ")}]`;
      }
      query.eager(eagerQuery);
    }
  }
  const response = await query;
  if (!response) throw new NotFoundError("There is no such item in system");
  return Promise.resolve(response);
}
exports.getPropertyById = getPropertyById;

/**
 * Get Properties
 *
 * @param {String} filter Object with query params
 * @return {Array} list of Properties
 * */
exports.getProperties = function getProperties(filter) {
  const query = PropertyModel.query();
  if (filter) {
    const { eager } = filter;
    if (eager) {
      let eagerQuery = "";
      if (eager.length > 0) {
        eagerQuery = `[${eager.join(", ")}]`;
      }
      query.eager(eagerQuery);
    }
  }
  return query;
};

/**
 * Create new Property
 *
 * @param {Object} property Object with fields that will be created in database
 * @param {Boolean} expanded Flag, that shows if use expanded creation method
 * @return {PropertyModel}
 * */
exports.createProperty = async function createProperty(property, expanded) {
  if (property.ownerId) await UserService.getUserById(property.ownerId);
  if (expanded) {
    const options = {
      relate: [],
      unrelate: []
    };
    return transaction(PropertyModel, async (TProperty, trx) => {
      return await TProperty.query(trx).upsertGraph(property, options);
    });
  }
  return PropertyModel.query()
    .insert(property)
    .returning("*");
};

/**
 * Update Property by id
 *
 * @param {String} propertyId The ID of the Property that needs to be updated.
 * @param {Object} property Object with fields that will be updated in database
 * @param {Boolean} expanded Flag, that shows if use expanded update method
 * @return {PropertyModel}
 * */
exports.updatePropertyById = async function updatePropertyById(
  propertyId,
  property,
  expanded
) {
  if (property.ownerId) await UserService.getUserById(property.ownerId);
  const q = await getPropertyById(propertyId);
  if (expanded) {
    const options = {
      relate: [],
      unrelate: []
    };
    return transaction(PropertyModel, async (TProperty, trx) => {
      return q.$query().upsertGraph({ id: propertyId, ...property }, options);
    });
  }
  return q
    .$query()
    .patch(property)
    .returning("*");
};

/**
 * Delete Property
 *
 * @param {String} propertyId The ID of the Property that needs to be deleted.
 * @return {Number} number of rows deleted
 * */
exports.deletePropertyById = function deletePropertyById(propertyId) {
  return PropertyModel.query().deleteById(propertyId);
};
