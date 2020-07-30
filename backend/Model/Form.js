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
    businessStatement: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Form", formSchema)