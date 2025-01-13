/*
 * @Author: Semmy Wong
 * @Date: 2025-01-04 18:39:19
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:27:25
 * @Description: Description
 */
import { init } from '@next-cms/module-drizzle-postgresql';
import schema from '@next-cms/module-drizzle-postgresql/schema';
import * as businessSchema from './schema';

export { accounts, sessions, teamMembers, teams, users, verificationTokens } from '@next-cms/module-drizzle-postgresql/schema';
export type Schema = typeof schema & typeof businessSchema;
export const { db, pool } = init<Schema>({ connectionString: process.env.DATABASE_URL, schema: { ...schema, ...businessSchema } });

export default db;
