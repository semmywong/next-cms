import { users } from './sys';

declare global {
    export type User = typeof users.$inferSelect;
}

export { };

