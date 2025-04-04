'use strict';

/**
 * latest-notice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-notice.latest-notice');
