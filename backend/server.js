// establish dependencies
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require("express-session");
const SessionDB = require("connect-mongodb-session")(session);
const cors = require('cors')

// my dependencies
const User = require('./Model/User')

//routes
const formRoutes = require('./Routes/form')
const userRoutes = require('./Routes/user')

//initialization
const app = express()
const PORT = process.env.port || 5000;

// db configuration
const URI = 'mongodb+srv://judytan:websitegenerator@website-generator.qrclm.mongodb.net/websitegen?retryWrites=true&w=majority'

// session configuration
const userSession = new SessionDB({
  uri: URI,
  collection: 'sessions'
})

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// middleware for session
app.use(session({
  secret: 'website',
  resave: false,
  saveUninitialized: true,
  store: userSession,
  cookie: {secure: false, httpOnly: false}
}))
 
app.use((req, res, next) => {
  if(!req.session.user) {
    return next()
  }

  User.findById(req.session.user._id)
  .then((user) => {
    console.log('server.js - req.session')
    req.user = user;
    next()
  })
  .catch((error) => console.log(error));
})

// use routes
app.use(formRoutes)
app.use(userRoutes)

// connect database
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
.then(() => {
    app.listen(PORT, () => console.log(`server is running on port ${PORT} + DB connected`))
})