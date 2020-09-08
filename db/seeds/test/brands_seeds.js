exports.seed = function (knex) {
  return knex("brands")
    .del()
    .then(() =>
      knex("brands").insert({
        name: "Apple",
        author: "Steve Jobs",
      })
    )
    .then(() =>
      knex("brands").insert({
        name: "Coca-Cola",
        author: "Asa Griggs Candler",
      })
    )
    .then(() =>
      knex("brands").insert({
        name: "Nintendo",
        author: "Fusajiro Yamauchi",
      })
    );
};
