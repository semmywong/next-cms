/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 22:47:06
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-13 17:40:20
 * @Description: Description
 */
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import schema from './schema';

export type DBType<TSchema extends Record<string, unknown> = Record<string, unknown>> = ReturnType<typeof drizzle<TSchema, mysql.Pool>>;

type ConfigType<TSchema> = { connectionString: string; schema: TSchema }
export async function init<TSchema extends Record<string, unknown>>(config: ConfigType<TSchema>) {
    const { connectionString } = config;
    const pool = await mysql.createPool(connectionString);
    const fullSchema = Object.assign({}, schema, config.schema);
    const db = drizzle<TSchema, mysql.Pool>(pool, { schema: fullSchema, casing: 'snake_case', mode: 'default' });
    return { db, pool };
}


