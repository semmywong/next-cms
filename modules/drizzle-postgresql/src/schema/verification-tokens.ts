
import { serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from '../common/pg-table';

export const verificationTokens = pgTable('verification_token', {
    id: serial().primaryKey(),
    identifier: varchar({ length: 255 }).notNull(),
    token: varchar({ length: 255 }).notNull(),
    expires: timestamp({ mode: 'date' }).notNull(),
});
