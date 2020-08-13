const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./login-model.js");

// LogIn EndPoint
router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    Users.findUser(username)
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
              token,
              user: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                city: user.city,
                state: user.state,
                phone: user.phone,
                email: user.email,
                address: user.address,
                zipcode: user.zipcode
              }
            });
          } else {
            res.status(400).json({
              message: "username or password is incorrect!"
            });
          }
        } else {
          res.status(400).json({
            message: "username or password is incorrect!"
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "error getting the user"
        });
      });
  } else {
    res.status(404).json({
      message: "Please Provide username and password !"
    });
  }
});

function generateToken(user) {
  const payload = {
    username: user.username
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;

// logs in a user
// router.post("/", (req, res) => {
//   let { username, password } = req.body;

//   Users.findBy({ username })
//     .first()
//     .then(user => {
//       if (user && bc.compareSync(password, user.password)) {
//         const token = generateToken(user);
//         const user_id = user.id;
//         const email = user.email;
//         res
//           .status(200)
//           .json({ message: `Welcome ${user.username}!`, token, user_id, email });
//       } else {
//         res.status(401).json({ message: "Invalid Credentials" });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json(error);
//     });
// });

// // Gets all users
// router.get("/", (req, res) => {
//   Users.find()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Failed to get all users" });
//     });
// });

// // Gets user by id
// router.get("/:id", (req, res) => {
//   Users.findById(req.params.id)
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: "failed to get user" });
//     });
// });

// // Removes a user by id
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   Users.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: "Could not find user with given id" });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Failed to delete the user" });
//     });
// });

// // Generates JWT
// function generateToken(user) {
//   const payload = {
//     username: user.username,
//     id: user.id
//   };
//   const options = {
//     expiresIn: "1d"
//   };
//   return jwt.sign(payload, process.env.JWT_SECRET || "letsQuest", options);
// }
// module.exports = router;
