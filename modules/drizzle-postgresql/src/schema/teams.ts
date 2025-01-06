/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:04:21
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-02 21:05:57
 * @Description: Description
 */
import { serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from '../common/pg-table';

export const teams = pgTable('team', {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    createdAt: timestamp({ mode: 'date' }).notNull(),
    updatedAt: timestamp({ mode: 'date' }).notNull(),
});