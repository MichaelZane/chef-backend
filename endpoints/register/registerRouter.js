const express = require("express");
const router = express.Router();
const Users = require("./register-model.js");

router.post("/", (req, res) => {
  if (
    req.body.username &&
    req.body.email &&
    req.body.password &&
    req.body.firstname &&
    req.body.lastname
  ) {
    Users.findUser(req.body)
      .then(user => {
        if (!user) {
          Users.addUSer(req.body)
            .then(ids => {
              res.status(200).json({
                message: "register Completed"
              });
            })
            .catch(error =>
              res.status(500).json({
                message: "error adding new user"
              })
            );
        } else {
          res.status(400).json({
            message: "user is already exist"
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "error adding new user"
        });
      });
  } else {
    res.status(404).json({
      message: "please fill out all the requirement"
    });
  }
});

module.exports = router;
// router.post("/register", async(req, res) => {
//   let { firstname, lastname, username, email, password } = req.body;

//   try {

//   const hash = bc.hashSync(password, 10);
//   password = hash;

//   const saved = await Users.add({
//     firstname,
//     lastname,
//     username,
//     email,
//     password
//   })
  
//       res.status(201).json(saved);

//   }  catch(error) {
      
//       res.status(500).json(error);

//   }
    
// });
// module.exports = router;
