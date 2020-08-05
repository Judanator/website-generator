const User = require("../Model/User");
const bcrypt = require("bcryptjs");

// POST USER
exports.postNewUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        console.log("User already exist");
        return res.redirect("/signup");
      }

      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
          });
          return newUser.save();
        })
        .then(() => {
          console.log("new user created");
          res.redirect("/");
        });
    })
    .catch((error) => console.log(error));
};

// POST LOGIN

