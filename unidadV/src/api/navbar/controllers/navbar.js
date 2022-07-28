'use strict';

/**
 *  navbar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::navbar.navbar', ({strapi}) => ({
  async customAction(ctx) {
    try {
      ctx.body = 'ok, custom return'
    } catch(e) {
      ctx.body = e
    }
  }
}));
