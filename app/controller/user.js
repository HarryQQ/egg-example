'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { app, ctx } = this;
    const user = await app.mysql.get('user')
    console.log('user', user)
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    const response =  {data:{...userInfo}, code: 200}
    ctx.body = response;
  }
}

module.exports = UserController;
