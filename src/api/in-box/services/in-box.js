'use strict';

/**
 * in-box service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::in-box.in-box');
