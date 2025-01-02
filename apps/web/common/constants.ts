/*
 * @Author: Semmy Wong
 * @Date: 2024-03-27 22:34:09
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-27 22:21:10
 * @Description: Description
 */
import pkg from '../package.json' with { type: 'json' };

export const AppInfo = {
  version: pkg.version,
  name: 'BoxyHQ',
  logoUrl: 'https://boxyhq.com/img/logo.png',
  url: 'http://localhost:4002',
};
