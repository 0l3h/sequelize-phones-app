const {Phone} = require('../models');

module.exports.getPhones = async (req, res, next) => {
    try {
        const foundPhones = await Phone.findAll({
            raw: true,
        }) 

        res.status(200).send(foundPhones);
    } catch (error) {
        next(error);
    }
};

module.exports.getPhoneById = async (req, res, next) => {
    const {params: {phoneId}} = req;
    try {
        const [foundPhone] = await Phone.findAll({
            raw:true,
            where: {
                id: phoneId,
            },
        });

        if(foundPhone) {
            res.status(200).send(foundPhone);
        } else {
            res.status(404).send('Phone is not found');
        }

    } catch (error) {
        next(error);
    }
}

module.exports.createPhone = async (req, res, next) => {
    const {body} = req;
    try {
        const createdPhone = await Phone.create(body);
        res.status(200).send(createdPhone);
    } catch (error) {
        next(error);
    }
}