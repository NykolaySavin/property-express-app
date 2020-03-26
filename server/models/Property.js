const uuid = require("uuid/v1");
const Model = require("./BaseModel");

class Property extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "properties";
  }

  async $beforeInsert(opt, queryContext) {
    await super.$beforeInsert(opt, queryContext);
  }

  async $beforeUpdate(opt, queryContext) {
    await super.$beforeUpdate(opt, queryContext);
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: "object",
      required: ["address", "ownerId"],
      properties: {
        id: { type: "string", format: "uuid" },
        ownerId: { type: "string" },
        address: {
          type: "object",
          required: ["street", "country", "city", "house_number"],
          properties: {
            house_number: { type: "string" },
            street: { type: "string" },
            city_district: { type: "string" },
            city: { type: "string" },
            country: { type: "string" },
            postcode: { type: "string" }
          }
        },
        livingArea: {
          type: ["number", "null"],
          minimum: 0
        },
        buildingArea: {
          type: ["number", "null"],
          minimum: 0
        },
        bathroomsTotal: {
          type: ["number", "null"],
          minimum: 0
        },
        bedroomsTotal: {
          type: ["number", "null"],
          minimum: 0
        },
        yearBuilt: {
          type: ["number", "null"],
          maximum: new Date().getFullYear()
        },
        yearAltered: {
          type: ["number", "null"],
          maximum: new Date().getFullYear()
        }
      }
    };
  }

  static get relationMappings() {
    const User = require("./User");
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "properties.ownerId",
          to: "users.id"
        }
      }
    };
  }
}

module.exports = Property;
