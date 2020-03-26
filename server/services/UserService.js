const { transaction } = require("objection");
const UserModel = require("../models/User");
const NotFoundError = require("../errors/NotFoundError");

/**
 * Get User by User ID
 *
 * @param {String} UserId The ID of the User that needs to be fetched.
 * @param {String} filter Object with query params
 * @return {UserModel}
 * */
async function getUserById(userId, filter) {
  const query = UserModel.query().findById(userId);
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
exports.getUserById = getUserById;

/**
 * Get users
 *
 * @param {String} filter Object with query params
 * @return {Array} list of users
 * */
exports.getUsers = function getUsers(filter) {
  const query = UserModel.query();
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
 * Create new User
 *
 * @param {Object} user Object with fields that will be created in database
 * @param {Boolean} expanded Flag, that shows if use expanded creation method
 * @return {UserModel}
 * */
exports.createUser = async function createUser(user, expanded) {
  if (expanded) {
    const options = {
      relate: [],
      unrelate: []
    };
    return transaction(UserModel, async (TUser, trx) => {
      return await TUser.query(trx).upsertGraph(user, options);
    });
  }
  return UserModel.query()
    .insert(user)
    .returning("*");
};

/**
 * Update User by id
 *
 * @param {String} userId The ID of the User that needs to be updated.
 * @param {Object} user Object with fields that will be updated in database
 * @param {Boolean} expanded Flag, that shows if use expanded update method
 * @return {UserModel}
 * */
exports.updateUserById = async function updateUserById(
  userId,
  user,
  expanded
) {
  const q = await getUserById(userId);
  if (expanded) {
    const options = {
      relate: [],
      unrelate: []
    };
    return transaction(UserModel, async (TUser, trx) => {
      return q.$query().upsertGraph({ id: userId, ...user }, options);
    });
  }
  return q
    .$query()
    .patch(user)
    .returning("*");
};

/**
 * Delete user
 *
 * @param {String} userId The ID of the User that needs to be deleted.
 * @return {Number} number of rows deleted
 * */
exports.deleteUserById = function deleteUserById(userId) {
  return UserModel.query().deleteById(userId);
};
