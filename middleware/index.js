const { NEW_PHONE_SHEMA } = require('./../utils/validationSchemas');

module.exports.validationErrorHandler = async (req, res, next) => {
    const {body} = req;

    try {
        if(await NEW_PHONE_SHEMA.isValid(body)) {
            return next();
        } 
    } catch (error) {
        next(error);        
    }
};