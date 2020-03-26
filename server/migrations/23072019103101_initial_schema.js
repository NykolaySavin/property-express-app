exports.up = async knex => {
  try {
    await knex.schema
      .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .raw("CREATE EXTENSION IF NOT EXISTS postgis")
      .createTable("users", table => {
        table
          .uuid("id")
          .defaultTo(knex.raw("uuid_generate_v4()"))
          .primary();
        table.string("firstName");
        table.string("lastName");
        table.string("email").notNull();
        table.string("phone");
      })
      .createTable("properties", table => {
        table
          .uuid("id")
          .defaultTo(knex.raw("uuid_generate_v4()"))
          .primary();
        table.json("address").notNull();
        table.float("livingArea");
        table.float("buildingArea");
        table.integer("yearBuilt");
        table.integer("yearAltered");
        table.integer("bathroomsTotal");
        table.integer("bedroomsTotal");
        table
          .uuid("ownerId")
          .unsigned()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .index();
      });
    return true;
  } catch (e) {
    console.dir(e);
    return e;
  }
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("properties");
};
