'use strict';

const moment                          = require('moment');


const fileSwitches  = {
  Todo : true
};

const modules = {
  startup     : {
    initialize  : true
  },
  todo     : {
    getList   : true,
    createList : true,
    updateList : true,
    deleteTodo : true
  }
};


const log = (apiReference, log) => {
  if (
    apiReference
    && apiReference.module
    && apiReference.api
    && fileSwitches
    && fileSwitches[apiReference.module] == true
    && modules
    && modules[apiReference.module]
    && modules[apiReference.module][apiReference.api] == true) {

    try {
      log = JSON.stringify(log);
    } catch (exception) {
      console.error(">>> Exception <<<", exception)
    }
    
    console.log("-->" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss.SSS') + " :----: " +
      apiReference.module + " :=: " + apiReference.api + " :=: " + log);
  }
};

const logError = (apiReference, log) => {
  if (apiReference
    && apiReference.module
    && apiReference.api) {

    try {
      log = JSON.stringify(log);
    }
    catch (exception) {
    }
    console.error("-->" + moment(new Date()).format('YYYY-MM-DD HH:mm:ss.SSS') + " :----: " +
      apiReference.module + " :=: " + apiReference.api + " :=: " + log);
  }
};


exports.log      = log;
exports.logError = logError;
