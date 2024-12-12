/*
 * @Author: Semmy Wong
 * @Date: 2024-03-26 22:22:33
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-10 23:00:21
 * @Description: Description
 */
import type { Config } from 'drizzle-kit';
export default {
  schema: './db/schema/*-schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  tablesFilter: ['admin_*', 'sys_*'],
} satisfies Config;
