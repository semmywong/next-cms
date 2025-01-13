/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:01:37
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:04:24
 * @Description: Description
 */
import type { AdapterAccount } from '@auth/core/adapters';
import { int, serial, varchar } from 'drizzle-orm/mysql-core';
import { mysqlTable } from '../common/mysql-table';
import { users } from './users';

export const accounts = mysqlTable('account', {
    id: serial().primaryKey(),
    userId: serial()
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    type: varchar({ length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar({ length: 255 }).notNull(),
    providerAccountId: varchar({ length: 255 }).notNull(),
    refreshToken: varchar({ length: 255 }),
    accessToken: varchar({ length: 255 }),
    expiresAt: int(),
    tokenType: varchar({ length: 255 }),
    scope: varchar({ length: 255 }),
    idToken: varchar({ length: 2048 }),
    sessionState: varchar({ length: 255 }),
});
