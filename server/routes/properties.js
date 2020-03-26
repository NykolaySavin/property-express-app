const express = require("express");
const {
  getPropertyById,
  getProperties,
  deletePropertyById,
  updatePropertyById,
  createProperty
} = require("../controllers/Property");

const router = express.Router();

//Property
router.get("/", getProperties.validator, getProperties.controller);
router.post("/", createProperty.validator, createProperty.controller);
router.get(
  "/:propertyId",
  getPropertyById.validator,
  getPropertyById.controller
);
router.put(
  "/:propertyId",
  updatePropertyById.validator,
  updatePropertyById.controller
);
router.delete(
  "/:propertyId",
  deletePropertyById.validator,
  deletePropertyById.controller
);

module.exports=router;