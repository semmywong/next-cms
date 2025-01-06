/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 20:59:30
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-04 15:06:03
 * @Description: Description
 */

import { pgTable } from '../common/pg-table';
import { integer, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }),
    password: varchar({ length: 255 }),
    email: varchar({ length: 255 }).notNull(),
    emailVerified: timestamp({ mode: 'date' }).defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
    invalidLoginAttempts: integer().default(0).notNull(),
    lockedAt: timestamp({ mode: 'date' }),
    image: varchar({ length: 255 }),
});
