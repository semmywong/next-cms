/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:01:37
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-04 15:06:12
 * @Description: Description
 */
import type { AdapterAccount } from '@auth/core/adapters';
import { integer, serial, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from '../common/pg-table';
import { users } from './users';

export const accounts = pgTable('account', {
    id: serial().primaryKey(),
    userId: integer()
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    type: varchar({ length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar({ length: 255 }).notNull(),
    providerAccountId: varchar({ length: 255 }).notNull(),
    refreshToken: varchar({ length: 255 }),
    accessToken: varchar({ length: 255 }),
    expiresAt: integer(),
    tokenType: varchar({ length: 255 }),
    scope: varchar({ length: 255 }),
    idToken: varchar({ length: 2048 }),
    sessionState: varchar({ length: 255 }),
});
