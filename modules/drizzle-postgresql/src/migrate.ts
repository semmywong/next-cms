/*
 * @Author: Semmy Wong
 * @Date: 2024-12-11 16:11:34
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-30 22:10:37
 * @Description: Description
 */
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import path from 'node:path';
import { db, pool } from './';

async function main() {
    try {
        await migrate(db, {
            migrationsFolder: path.join(process.cwd(), '/db/migrations'),
        });
        console.log('Migrations complete');
    } finally {
        await pool?.end();
    }
}

main().catch(err => {
    console.error('Migration failed', err);
    process.exit(1);
});