/*
 * @Author: Semmy Wong
 * @Date: 2025-01-02 21:00:16
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-02 22:46:17
 * @Description: Description
 */
import { pgTableCreator } from 'drizzle-orm/pg-core';

export const pgTable = pgTableCreator((name) => `sys_${name}`);
