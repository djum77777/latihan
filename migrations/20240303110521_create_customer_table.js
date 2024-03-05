/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('customer', function (table) {
          table.increments('id').primary;
          table.string('name', 100).notNullable();
          table.string('email',100).notNullable();
          table.timestamps(); //akan mengenerate created at sm updated at
      })
    }
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('customer')
};
