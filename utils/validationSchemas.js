const yup = require('yup');

const TEXT_SHEMA = yup.string();

module.exports.NEW_PHONE_SHEMA = yup.object().shape({
    brand: TEXT_SHEMA.required(),
    color: TEXT_SHEMA.required(),
    model: TEXT_SHEMA.required(),
    manufacture_year: yup.date().required(),
    RAM_size: yup.number().required(),
    has_NFC: yup.boolean().required(),
    CPU_name: TEXT_SHEMA.required()
});