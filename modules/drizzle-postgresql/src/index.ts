/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 22:47:06
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-02 22:55:36
 * @Description: Description
 */
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool, PoolConfig } from "pg";

import schema from '@/schema';

export type DBType<TSchema extends Record<string, unknown> = Record<string, unknown>> = ReturnType<typeof drizzle<TSchema, Pool>>;

let poolInstance: Pool | null = null;
let dbInstance: DBType<any> | null = null;

export const dbConfig = {
    connectionString: process.env.DATABASE_URL,
    schema,
} satisfies PoolConfig & { schema: Record<string, unknown> };

export function init<TSchema>(config: PoolConfig & { schema: TSchema }) {
    dbConfig.connectionString = config.connectionString ?? dbConfig.connectionString;
    Object.assign(dbConfig.schema, config.schema);
    //reset dbInstance
    poolInstance?.end();
    poolInstance = null;
    dbInstance = null;
}

export const pool = new Proxy({} as Pool, {
    get() {
        if (!poolInstance) {
            const { connectionString } = dbConfig;
            poolInstance = new Pool({ connectionString });
        }
        return poolInstance;
    }
});

export const db = <TSchema extends Record<string, unknown>>(): DBType<TSchema> => {
    return new Proxy({} as DBType<TSchema>, {
        get(_, prop, receiver) {
            if (!poolInstance) {
                const { connectionString } = dbConfig;
                poolInstance = new Pool({ connectionString });
            }
            if (!dbInstance) {
                const { schema } = dbConfig;
                dbInstance = drizzle(poolInstance, { schema, casing: 'snake_case' });
            }
            return Reflect.get(dbInstance, prop, receiver);
        }
    })
};

export default db;