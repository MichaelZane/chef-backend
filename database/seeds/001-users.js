exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          username: "rowValue1",
          password: "23",
          email: "ruwad1211idha@gmail.com",
          phone: 1234,
          city: "houston",
          state: "texas",
          address: "216319bkjsbckjdsbckds"
        },
        {
          username: "rowValue2",
          password: "23",
          email: "ruwadi1212d21ha@gmail.com",
          phone: 12345,
          city: "houston",
          state: "texas",
          address: "216319bkjsbckjdsbckds"
        },
        {
          username: "rowValue3",
          password: "23",
          email: "ruw231231a@gmail.com",
          phone: 123213,
          city: "houston",
          state: "texas",
          address: "216319bkjsbckjdsbckds"
        }
      ]);
    });
};
