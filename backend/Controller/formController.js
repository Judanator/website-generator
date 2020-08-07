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
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
}



