const knex = require('./knex.js');

function Brands() {
  return knex('brands');
}

function getAllBrands() {
  return Brands().select();
}

module.exports = {
  getAllBrands,
};
