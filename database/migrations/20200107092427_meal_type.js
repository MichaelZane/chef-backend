exports.up = function(knex) {
  return knex.schema.createTable("meal_type", tbl => {
    tbl.increments();
    tbl.string("mealtype", 100).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("meal_type");
};
