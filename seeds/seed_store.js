/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('store').del()
  await knex('store').insert([
    {id: 1, name: 'Toko Djumi',address:'Jakarta'},
    {id: 2, name: 'Toko Erni',address:'Aceh'},
    {id: 3, name: 'Toko Amin',address:'Medan'}
  ]);
};
