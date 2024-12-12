/*
 * @Author: Semmy Wong
 * @Date: 2024-03-26 22:42:35
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-11 16:08:29
 * @Description: Description
 */
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from '@/db/schema';

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema, casing: 'snake_case' });
