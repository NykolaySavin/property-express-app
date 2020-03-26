const { celebrate, Joi: BaseJoi } = require("celebrate");
const Joi = BaseJoi.extend(require("joi-phone-number")).extend(
  require("joi-date-extensions")
);
const UserService = require("../services/UserService");
const NotFoundError = require("../errors/NotFoundError");

module.exports.createUser = {
  validator: celebrate({
    body: Joi.object()
      .required()
      .keys({
        firstName: Joi.string().allow(null),
        lastName: Joi.string().allow(null),
        phone: Joi.string()
          .phoneNumber({ format: "e164" })
          .allow(null),
        email: Joi.string().required()
      })
  }),
  controller: function createUser(req, res) {
    const { body } = req;
    UserService.createUser(body)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        res.boom.badImplementation("Failed to create user");
      });
  }
};

module.exports.getUserById = {
  validator: celebrate({
    params: {
      userId: Joi.string().required()
    },
    query: {
      eager: Joi.array()
    }
  }),
  controller: function getUserById(req, res) {
    const { params, query } = req;
    const { userId } = params;

    UserService.getUserById(userId, query)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        if (error instanceof NotFoundError) {
          return res.boom.notFound(error.message);
        }
        res.boom.badImplementation("Failed to load user");
      });
  }
};

module.exports.getUsers = {
  validator: celebrate({
    query: {
      eager: Joi.array()
    }
  }),
  controller: async function getUsers(req, res) {
    console.dir(1)
    const { query } = req;
    try {
      const response = await UserService.getUsers(query);
      res.json(response);
    } catch (e) {
      req.log.error(e);
      res.boom.badImplementation("Failed to get users");
    }
  }
};

module.exports.updateUserById = {
  validator: celebrate({
    body: Joi.object()
      .required()
      .keys({
        id: Joi.string(),
        firstName: Joi.string().allow(null),
        lastName: Joi.string().allow(null),
        phone: Joi.string()
          .phoneNumber({ format: "e164" })
          .allow(null),
        email: Joi.string().required()
      }),
    params: {
      userId: Joi.string().required()
    }
  }),
  controller: function updateUserById(req, res) {
    const { userId } = req.params;
    const { body } = req;
    UserService.updateUserById(userId, body)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        if (error instanceof NotFoundError) {
          return res.boom.notFound(error.message);
        }
        res.boom.badImplementation("Failed to update user");
      });
  }
};

module.exports.deleteUserById = {
  validator: celebrate({
    params: {
      userId: Joi.string().required()
    }
  }),
  controller: function deleteUserById(req, res) {
    const { userId } = req.params;
    UserService.deleteUserById(userId)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        res.boom.badImplementation("Failed to delete user");
      });
  }
};
