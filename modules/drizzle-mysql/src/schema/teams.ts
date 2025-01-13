/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:04:21
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:05:03
 * @Description: Description
 */
import { serial, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { mysqlTable } from '../common/mysql-table';

export const teams = mysqlTable('team', {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    createdAt: timestamp({ mode: 'date' }).notNull(),
    updatedAt: timestamp({ mode: 'date' }).notNull(),
});