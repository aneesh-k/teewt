const joi = require('@hapi/joi')

const dataValidate = data => {
    const pattern = joi.object({
        firstname: joi.string().min(6).required(),
        lastname: joi.string().min(6).required(),
        emailId: joi.string().required().email().min(6),
        password: joi.string().required().min(6)
    })

    const {error} = pattern.validate(data)
    return error;
}

module.exports.dataValidate = dataValidate