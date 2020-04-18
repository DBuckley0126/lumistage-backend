exports.seed = (knex, Promise) =>
  knex("test_values")
    .del()
    .then(() =>
      knex("test_values").insert({
        integer: 10
      })
    )
    .then(() =>
      knex("test_values").insert({
        integer: 15
      })
    )
    .then(() =>
      knex("test_values").insert({
        integer: 100
      })
    )
