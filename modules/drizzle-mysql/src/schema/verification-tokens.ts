/*
 * @Author: Semmy Wong
 * @Date: 2025-01-13 16:46:01
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:05:49
 * @Description: Description
 */

import { serial, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { mysqlTable } from '../common/mysql-table';

export const verificationTokens = mysqlTable('verification_token', {
    id: serial().primaryKey(),
    identifier: varchar({ length: 255 }).notNull(),
    token: varchar({ length: 255 }).notNull(),
    expires: timestamp({ mode: 'date' }).notNull(),
});
