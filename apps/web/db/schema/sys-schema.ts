/*
 * @Author: Semmy Wong
 * @Date: 2024-03-27 15:13:38
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-11 17:24:59
 * @Description: Description
 */
import type { AdapterAccount } from '@auth/core/adapters';
import { integer, pgTableCreator, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

const pgTable = pgTableCreator((name) => `sys_${name}`);

export const users = pgTable('user', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }),
  password: varchar({ length: 255 }),
  email: varchar({ length: 255 }).notNull(),
  emailVerified: timestamp({ mode: 'date' }).defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  image: varchar({ length: 255 }),
});

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

export const sessions = pgTable('session', {
  id: serial().primaryKey(),
  userId: integer()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  sessionToken: varchar({ length: 255 }).notNull(),
  expires: timestamp({ mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable('verification_token', {
  id: serial().primaryKey(),
  identifier: varchar({ length: 255 }).notNull(),
  token: varchar({ length: 255 }).notNull(),
  expires: timestamp({ mode: 'date' }).notNull(),
});

export const teams = pgTable('team', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  createdAt: timestamp({ mode: 'date' }).notNull(),
  updatedAt: timestamp({ mode: 'date' }).notNull(),
});

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
