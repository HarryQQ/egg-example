'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
  async info() {
    const { app, ctx } = this;
    const banner = await ctx.service.banner.getAll();
    const response =  {data:{...banner}, code: 200}
    ctx.body = response;
  }
}

module.exports = BannerController;
