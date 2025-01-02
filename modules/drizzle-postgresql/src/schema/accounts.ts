import { pgTable } from '@/common/pg-table';
import type { AdapterAccount } from '@auth/core/adapters';
import { integer, serial, varchar } from 'drizzle-orm/pg-core';
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
