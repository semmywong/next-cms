/*
 * @Author: Semmy Wong
 * @Date: 2024-03-26 22:22:33
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-30 17:46:12
 * @Description: Description
 */
import type { Config } from 'drizzle-kit';

const PG_SCHEMA_PATH = '../../modules/drizzle-postgresql/src/schema';

export default {
  schema: [PG_SCHEMA_PATH, './db/schema'],
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  tablesFilter: ['admin_*', 'sys_*'],
} satisfies Config;
