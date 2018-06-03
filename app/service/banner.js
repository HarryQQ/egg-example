'use strict';

const Service = require('egg').Service;

class BannerService extends Service {
  async getAll() {
    const banner = await this.app.mysql.select('banner');
    return banner;
  }
}


module.exports = BannerService;
