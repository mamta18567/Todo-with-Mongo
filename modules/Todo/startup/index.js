'use strict';

// const logging                 = require('../logging/logging');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const envProperties = require('../../../properties/envproperties.js');
const httpLib                 = require('../services/httpServices.js');
const database = 'TodoList';
const url = 'mongodb://0.0.0.0:27017';
// const client = new MongoClient(url)

const initializeServer = async () => {
  try {
    //initialize all db connections
    const server = await httpLib.startHttpServer(envProperties.port);
    // const conn = mongoose.createConnection();
    // const db = result.db(database);
    await mongoose.connect('mongodb://0.0.0.0:27017/Todo');
    console.log("DB connected !!!");
  } catch (error) {
    throw new Error(error);
  }
};

exports.initializeServer = initializeServer;
