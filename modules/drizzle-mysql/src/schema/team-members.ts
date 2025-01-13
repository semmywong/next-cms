/*
 * @Author: Semmy Wong
 * @Date: 2025-01-13 16:46:01
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:02:24
 * @Description: Description
 */
import { int, serial, timestamp } from 'drizzle-orm/mysql-core';
import { mysqlTable } from '../common/mysql-table';
import { users } from './users';

export const teamMembers = mysqlTable('team_member', {
  id: serial().primaryKey(),
  teamId: int()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  userId: int()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp({ mode: 'date' }).notNull(),
  updatedAt: timestamp({ mode: 'date' }).notNull(),
});