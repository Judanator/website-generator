const User = require("../Model/User");
const bcrypt = require("bcryptjs");

///////////////////////      POST USER      ///////////////////////
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

///////////////////////      POST LOGIN      ///////////////////////
exports.postLogin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email})
  .then(user => {
    if(!user) {
      return res.redirect('/signup')
    } else {
      console.log('User Authenticated')
    }

    bcrypt
    .compare(password, user.password)
    .then(doMatch => {
      if(doMatch) {
        console.log('password match - userController.js')
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(() => {
          console.log('session saved');
          res.redirect('/')
        })
      }
    })
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
}

///////////////////////      POST LOGOUT      ///////////////////////

exports.postLogout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
  .catch(error => console.log(error))
}

///////////////////////      GET SESSIONS      ///////////////////////
exports.getSession = (req, res) => {
  res.send(req.session)
}

//res.send vs res.json