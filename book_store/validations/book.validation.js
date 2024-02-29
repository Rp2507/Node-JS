const Joi = require('joi')

const book = {
    body: Joi.object().keys({
        title:Joi.string().required().trim(),
        price:Joi.number().required(),
        publisation_year:Joi.number().required(),
    })
}

module.exports = {book}