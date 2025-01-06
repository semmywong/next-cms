/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:02:25
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-02 21:03:08
 * @Description: Description
 */

import { integer, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from '../common/pg-table';
import { users } from './users';

export const sessions = pgTable('session', {
    id: serial().primaryKey(),
    userId: integer()
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    sessionToken: varchar({ length: 255 }).notNull(),
    expires: timestamp({ mode: 'date' }).notNull(),
});