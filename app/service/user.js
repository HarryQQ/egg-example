'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(id) {
    const user = await this.app.mysql.get('user');
    return user;
  }
}


module.exports = UserService;
