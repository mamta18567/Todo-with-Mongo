'use strict';

const config = require('config');

exports.mongodb = {
    master: {
        url : config.get('databaseSettings.mongodb.master.url'),
    }
};