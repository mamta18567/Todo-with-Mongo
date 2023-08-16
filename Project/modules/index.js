'use strict';

require('./Todo');

app.use(process.env.PATH_ALIAS || '/', router);