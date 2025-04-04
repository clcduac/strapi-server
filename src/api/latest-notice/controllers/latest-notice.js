'use strict';

/**
 * latest-notice controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-notice.latest-notice');
