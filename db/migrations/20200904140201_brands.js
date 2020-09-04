exports.up = function (knex, Promise) {
  return knex.schema.createTable("brands", function (table) {
    table.increments();
    table.string("name").notNullable().unique();
    table.string("author").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("brands");
};
