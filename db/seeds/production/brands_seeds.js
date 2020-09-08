exports.seed = function (knex, Promise) {
  return knex("brands")
    .del() // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries one by one in series
      return knex("brands").insert({
        name: "Apple",
        author: "Steve Jobs",
      });
    })
    .then(function () {
      return knex("brands").insert({
        name: "Coca-Cola",
        author: "Asa Griggs Candler",
      });
    })
    .then(function () {
      return knex("brands").insert({
        name: "Nintendo",
        author: "Fusajiro Yamauchi",
      });
    });
};
