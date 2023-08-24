'use strict';

/**
 * bookinfo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bookinfo.bookinfo');
