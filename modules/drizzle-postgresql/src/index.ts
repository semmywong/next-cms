/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 22:47:06
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-06 17:41:47
 * @Description: Description
 */
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool, PoolConfig } from "pg";

import schema from './schema';

export type DBType<TSchema extends Record<string, unknown> = Record<string, unknown>> = ReturnType<typeof drizzle<TSchema, Pool>>;

type ConfigType<TSchema> = PoolConfig & { schema: TSchema }
export function init<TSchema extends Record<string, unknown>>(config: ConfigType<TSchema>) {
    const { connectionString } = config;
    const pool = new Pool({ connectionString });
    const fullSchema = Object.assign({}, schema, config.schema);
    const db = drizzle<TSchema>(pool, { schema: fullSchema, casing: 'snake_case' });
    return { db, pool };
}


