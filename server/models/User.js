const Model = require("./BaseModel");

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "users";
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: "object",
      required: ["email"],

      properties: {
        id: { type: "string" },
        firstName: { type: ["string", "null"], minLength: 1, maxLength: 255 },
        lastName: { type: ["string", "null"], minLength: 1, maxLength: 255 },
        email: { type: "string", format: "email" },
        phone: { type: ["string", "null"] }
      }
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    const Property = require("./Property");
    return {
      properties: {
        relation: Model.HasManyRelation,
        modelClass: Property,
        join: {
          from: "users.id",
          to: "properties.ownerId"
        }
      }
    };
  }
}

module.exports = User;
