'use strict';

const mongodblib                      = require('./mongodblib');
const dbProperties                  = require('./dbproperties.js');

async function initialize(apiReference) {
  global.mongodbCon = await mongodblib.initialize(apiReference, dbProperties.mysql.master);
}

exports.initialize                  = initialize;