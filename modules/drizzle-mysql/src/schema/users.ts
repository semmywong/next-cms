/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 20:59:30
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:05:30
 * @Description: Description
 */

import { int, serial, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { mysqlTable } from '../common/mysql-table';

export const users = mysqlTable('user', {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }),
    password: varchar({ length: 255 }),
    email: varchar({ length: 255 }).notNull(),
    emailVerified: timestamp({ mode: 'date' }).defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
    invalidLoginAttempts: int().default(0).notNull(),
    lockedAt: timestamp({ mode: 'date' }),
    image: varchar({ length: 255 }),
});
