import { integer, pgTableCreator, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

const pgTable = pgTableCreator((name) => `business_${name}`);

export const members = pgTable('member', {
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

export type Member = typeof members.$inferSelect;