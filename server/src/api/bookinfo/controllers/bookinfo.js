'use strict';

/**
 * bookinfo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bookinfo.bookinfo');
