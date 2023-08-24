'use strict';

/**
 * bookinfo router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bookinfo.bookinfo');
