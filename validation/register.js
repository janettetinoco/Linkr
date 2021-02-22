const Validator = require("validator");
const validText = require('./valid-text');
const validName = require('./valid-name')

module.exports = function validateRegisterInput(data) {
    let errors = {};
    

    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";
    data.industry = validText(data.industry) ? data.industry : "";
    data.name = validName(data.name) ? data.name : "";

    if (!Validator.isAlpha(data.name.split(' ').join(''))) {
        errors.name = "You must provide a full name";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
        errors.password = "Password must be between 2 to 30 characters long";
    }

    // if (!Validator.equals(data.password, data.password2)) {
    //     errors.password2 = "Passwords must match";
    // }

    // if (!Validator.isEmtpy(data.password2)) {
    //     errors.password2 = "Second Password field is required"
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}