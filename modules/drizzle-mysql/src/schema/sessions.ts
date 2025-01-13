/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:02:25
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:04:08
 * @Description: Description
 */

import { serial, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { mysqlTable } from '../common/mysql-table';
import { users } from './users';

export const sessions = mysqlTable('session', {
    id: serial().primaryKey(),
    userId: serial()
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    sessionToken: varchar({ length: 255 }).notNull(),
    expires: timestamp({ mode: 'date' }).notNull(),
});