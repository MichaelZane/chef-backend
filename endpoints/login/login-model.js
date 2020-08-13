const db = require("../../database/db-config.js");

// module.exports = {
//   findUser,
//   findById
// };

// function findUser(username) {
//   return db("users")
//     .where({ username })
//     .first();
// }

// function findById(id) {
//   console.log(id);
//   return db("users")
//     .where({ id: id })
//     .first();
// }
module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function add(user) {
  return db("users")
  .returning(['id', 'username', 'email' ])
  .insert(user);
}

function find() {
  return db("users").select("id", "username", "email");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
