// establish dependencies
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//initialization
const app = express()
const PORT = process.env.port || 5000;

// DB configuration
const URI = 'mongodb+srv://judytan:websitegenerator@website-generator.qrclm.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.use(express.json({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

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