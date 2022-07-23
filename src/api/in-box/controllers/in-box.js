'use strict';

/**
 *  in-box controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::in-box.in-box');
