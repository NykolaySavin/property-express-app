const { celebrate, Joi: BaseJoi } = require("celebrate");
const Joi = BaseJoi.extend(require("joi-phone-number")).extend(
  require("joi-date-extensions")
);
const PropertyService = require("../services/PropertyService");
const NotFoundError = require("../errors/NotFoundError");

module.exports.createProperty = {
  validator: celebrate({
    body: Joi.object()
      .required()
      .keys({
        livingArea: Joi.number()
          .min(0)
          .allow(null),
        buildingArea: Joi.number()
          .min(0)
          .allow(null),
        bathroomsTotal: Joi.number()
          .min(0)
          .allow(null),
        bedroomsTotal: Joi.number()
          .min(0)
          .allow(null),
        yearBuilt: Joi.number()
          .max(new Date().getFullYear())
          .min(0)
          .allow(null),
        yearAltered: Joi.number()
          .max(new Date().getFullYear())
          .min(0)
          .allow(null),
        address: Joi.object()
          .keys({
            street: Joi.string().required(),
            house_number: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            city_district: Joi.string(),
            postcode: Joi.string().required()
          })
          .required(),
        ownerId: Joi.string().required()
      })
  }),
  controller: function createProperty(req, res) {
    const { body } = req;
    PropertyService.createProperty(body)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        res.boom.badImplementation("Failed to create property");
      });
  }
};

module.exports.getPropertyById = {
  validator: celebrate({
    params: {
      propertyId: Joi.string().required()
    },
    query: {
      eager: Joi.array()
    }
  }),
  controller: function getPropertyById(req, res) {
    const { params, query } = req;
    const { propertyId } = params;

    PropertyService.getPropertyById(propertyId, query)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        if (error instanceof NotFoundError) {
          return res.boom.notFound(error.message);
        }
        res.boom.badImplementation("Failed to load Property");
      });
  }
};

module.exports.getProperties = {
  validator: celebrate({
    query: {
      eager: Joi.array()
    }
  }),
  controller: async function getPropertys(req, res) {
    const { query } = req;
    try {
      const response = await PropertyService.getProperties(query);
      res.json(response);
    } catch (e) {
      req.log.error(e);
      res.boom.badImplementation("Failed to get properties");
    }
  }
};

module.exports.updatePropertyById = {
  validator: celebrate({
    body: Joi.object()
      .required()
      .keys({
        id: Joi.string(),
        livingArea: Joi.number()
          .min(0)
          .allow(null),
        buildingArea: Joi.number()
          .min(0)
          .allow(null),
        bathroomsTotal: Joi.number()
          .min(0)
          .allow(null),
        bedroomsTotal: Joi.number()
          .min(0)
          .allow(null),
        yearBuilt: Joi.number()
          .max(new Date().getFullYear())
          .min(0)
          .allow(null),
        yearAltered: Joi.number()
          .max(new Date().getFullYear())
          .min(0)
          .allow(null),
        address: Joi.object().keys({
          street: Joi.string().required(),
          house_number: Joi.string().required(),
          city: Joi.string().required(),
          country: Joi.string().required(),
          city_district: Joi.string(),
          postcode: Joi.string().required()
        }),
        ownerId: Joi.string()
      }),
    params: {
      propertyId: Joi.string().required()
    }
  }),
  controller: function updatePropertyById(req, res) {
    const { propertyId } = req.params;
    const { body } = req;
    PropertyService.updatePropertyById(propertyId, body)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        if (error instanceof NotFoundError) {
          return res.boom.notFound(error.message);
        }
        res.boom.badImplementation("Failed to update property");
      });
  }
};

module.exports.deletePropertyById = {
  validator: celebrate({
    params: {
      propertyId: Joi.string().required()
    }
  }),
  controller: function deletePropertyById(req, res) {
    const { propertyId } = req.params;
    PropertyService.deletePropertyById(propertyId)
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        req.log.error(error);
        res.boom.badImplementation("Failed to delete property");
      });
  }
};
