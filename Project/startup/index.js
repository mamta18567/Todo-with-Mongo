'use strict';

const mongoose = require('mongoose');
const httpLib                 = require('../modules/Todo/services/httpServices');
const dbProperties = require('../database/dbproperties.js');
const envProperties = require('../properties/envproperties')

const initializeServer = async () => {
  try {
    //initialize all db connections
    const server = await httpLib.startHttpServer(envProperties.port);
    await mongoose.connect(dbProperties.mongodb.master.url);
    console.log("DB connected !!!");
  } catch (error) {
    throw new Error(error);
  }
};

exports.initializeServer = initializeServer;
