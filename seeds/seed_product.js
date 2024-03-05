/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    {id: 1, name: 'chiki', price:5000,stock:10,store_id:1},
    {id: 2, name: 'chitato', price:12000,stock:15,store_id:2},
    {id: 3, name: 'astor', price:18000,stock:5,store_id:1},
    {id: 4, name: 'cheetos', price:9000,stock:30,store_id:3},
    {id: 5, name: 'beng-beng', price:2500,stock:50,store_id:3},
    {id: 6, name: 'mentos', price:7000,stock:11,store_id:1},
  ]);
};
