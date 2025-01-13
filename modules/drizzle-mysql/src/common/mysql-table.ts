/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:00:16
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 16:58:07
 * @Description: Description
 */
import { mysqlTableCreator } from 'drizzle-orm/mysql-core';

export const mysqlTable = mysqlTableCreator((name) => `sys_${name}`);
