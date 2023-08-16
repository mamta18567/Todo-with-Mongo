'use strict';

const Joi                             = require('joi');
const constants                       = require('../../../responses/responseConstants');
const validator                       = require('../../../validators/joiValidators');
const apiReferenceModule              = constants.modules.Todo;
const emptyHeaderStructure            = Joi.object().keys({});


/**
 * @param req = Request from external
 * @param res = Response
 * @param next = next of function
 */
const nameValidator =async (req, res, next) => {
  req.apiReference = {
    module: apiReferenceModule,
    api   : "nameValidator"
  };
  let schema =  Joi.object().keys ({
    firstName    : Joi.string().trim().max(6).required(),
    lastName    : Joi.string().trim().max(20).required()
  })
  console.log("Inside Validator")
  let reqBody = { ... req.body };
  let request = { ... req };
  let validFields = await validator.validateFields(req.apiReference, request, reqBody, res, schema,emptyHeaderStructure);
  if(validFields){
    next();
  }
};

exports.nameValidator                 = nameValidator;
