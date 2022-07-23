'use strict';

/**
 * in-box router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::in-box.in-box');
