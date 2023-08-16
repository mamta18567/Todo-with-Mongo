"use strict";
const mongoose = require('mongoose');
const envProperties = require('../../../properties/envproperties.js');
const httpLib                 = require('../modules/Todo/services/httpServices.js');
const logging = require('../logging/logging.js');
const dateUtility = require('../utility/dateUtility.js')

const initialize = async (apiReference, config) => {
    try {
        //initialize all db connections
        logging.log(apiReference, "STARTING MONGODB CONNECTION @ " + dateUtility.getFormattedDate(new Date(), dateUtility.formats.timeWithMilliSeconds));
        const server = await httpLib.startHttpServer(envProperties.port);
        await mongoose.connect();
        console.log("DB connected !!!");
      } catch (error) {
        throw new Error(error);
        logging.logError(apiReference, {EVENT : "MONGODB_CONN_ERROR",  ERROR : error});
      }
};

exports.initialize                  = initialize;
