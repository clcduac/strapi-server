'use strict';

/**
 * latest-notice router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-notice.latest-notice');
