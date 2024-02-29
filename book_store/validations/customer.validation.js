const Joi = require('joi')

const customer = {
    body: Joi.object().keys({
        customerName: Joi.string().required().trim(),
        address: Joi.string().required().trim(),
        postel_code: Joi.number().required(),
        country: Joi.string().required().trim(),
        mobile: Joi.number().required(),
    })
}

module.exports = {customer}