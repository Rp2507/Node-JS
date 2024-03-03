const Joi = require('joi')

const toDO = {
    body: Joi.object().keys({
        taskName: Joi.string().required().trim(),
        taskDetail: Joi.string().required().trim(),
        taskStatus: Joi.boolean().required()
    })
}

module.exports = {toDO}