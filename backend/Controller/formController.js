const Form = require('../Model/Form')

// POST FORM
exports.postForm = (req, res) => {
    const {businessName, businessDomain, phoneNumber, businessType, businessMission} = req.body;

    const newForm = new Form({
        businessName, 
        businessDomain, 
        phoneNumber, 
        businessType, 
        businessMission
    })

    newForm.save()
    .then(() => console.log('Form saved complete - formcontroller.js'))
}

