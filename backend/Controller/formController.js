const Form = require('../Model/Form')

///////////////////////      POST FORM      ///////////////////////
exports.postForm = (req, res) => {
    const {businessName, businessDomain, phoneNumber, businessType, businessMission, user} = req.body;

    const newForm = new Form({
        businessName, 
        businessDomain, 
        phoneNumber, 
        businessType, 
        businessMission,
        user
    })

    console.log(newForm)

    newForm.save()
    .then(() => console.log('Form saved complete - formcontroller.js'))
    .then(() => res.redirect('/website'))
    .catch(error => console.log(error))
}


exports.getSingleForm = (req, res) => {
    Forum.findById(req.params.id)
    .then(forum => {
      res.json(forum)
    })
    .catch(error => console.log(error))
  }


