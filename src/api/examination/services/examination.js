'use strict';

/**
 * examination service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::examination.examination');
