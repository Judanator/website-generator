const Form = require("../Model/Form");

///////////////////////      POST FORM      ///////////////////////
exports.postForm = (req, res) => {
  const {
    businessName,
    businessDomain,
    phoneNumber,
    businessType,
    businessMission,
    user,
  } = req.body;

  const newForm = new Form({
    businessName,
    businessDomain,
    phoneNumber,
    businessType,
    businessMission,
    user,
  });

  newForm
    .save()
    .then(() => console.log("Form saved complete - formcontroller.js"))
    .catch((error) => console.log(error));
};

exports.getSingleForm = (req, res) => {
  Form.findById(req.params.id)
    .then((res) => console.log(res))
    .then(form => {
      res.json(form)
    })
    .catch((error) => console.log(error));
};

exports.getAllForm = (req, res) => {
  Form.find()
    .then((form) => res.json(form))
    .catch((error) => {
      console.log(error);
    });
};
