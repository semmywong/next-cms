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
        await pool.end();
    }
}

main().catch(err => {
    console.error('Migration failed', err);
    process.exit(1);
});