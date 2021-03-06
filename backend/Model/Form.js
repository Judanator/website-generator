const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const formSchema = new Schema({
    businessName: {
        type: String,
        required: true
    },
    businessDomain: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    businessType: {
        type: String,
        required: true
    },
    businessMission: {
        type: String,
        required: true
    },
    user: {
        type: String,
        ref: "User"
    }
})

module.exports = mongoose.model("Form", formSchema)