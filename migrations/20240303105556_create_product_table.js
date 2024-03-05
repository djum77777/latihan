/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('product', function (table) {
          table.increments('id').primary;
          table.string('name', 100).notNullable();
          table.integer('price').notNullable();
          table.integer('stock');
          table.integer('store_id').unsigned();
          table.foreign('store_id').references('store.id') //untuk link table store dan product
          table.timestamps(true,true); //akan mengenerate created at sm updated at
      })
    }
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('product')
};