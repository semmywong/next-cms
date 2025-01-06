import { integer, serial, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from '../common/pg-table';
import { users } from './users';

export const teamMembers = pgTable('team_member', {
  id: serial().primaryKey(),
  teamId: integer()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  userId: integer()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp({ mode: 'date' }).notNull(),
  updatedAt: timestamp({ mode: 'date' }).notNull(),
});