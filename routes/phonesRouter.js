const {Router} = require('express');
const phonesRouter = Router();
const {phonesController} = require('./../controllers/index');

phonesRouter.get('/', phonesController.getPhones);

phonesRouter.get('/:phoneId', phonesController.getPhoneById);

phonesRouter.post('/', phonesController.createPhone);

module.exports = phonesRouter;