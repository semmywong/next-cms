
import { pgTable } from '@/common/pg-table';
import { serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const verificationTokens = pgTable('verification_token', {
    id: serial().primaryKey(),
    identifier: varchar({ length: 255 }).notNull(),
    token: varchar({ length: 255 }).notNull(),
    expires: timestamp({ mode: 'date' }).notNull(),
});
