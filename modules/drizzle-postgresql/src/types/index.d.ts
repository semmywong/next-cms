import { users } from "@/schema";

declare global {
    export type User = typeof users.$inferSelect;
}
export { };

