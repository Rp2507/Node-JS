const Joi = require('joi')

const author ={
    body:Joi.object().keys({
        firstName: Joi.string().required().trim(),
        lastName: Joi.string().required().trim()
    })
}

module.exports = { author }