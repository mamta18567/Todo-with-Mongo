"use strict";
const mongoose = require('mongoose');
const envProperties = require('../../../properties/envproperties.js');
const httpLib                 = require('../modules/Todo/services/httpServices.js');

const initialize = async (apiReference, config) => {
    try {
        //initialize all db connections
        const server = await httpLib.startHttpServer(envProperties.port);
        await mongoose.connect();
        console.log("DB connected !!!");
      } catch (error) {
        throw new Error(error);
      }
};

exports.initialize                  = initialize;
