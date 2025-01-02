/*
 * @Author: Semmy Wong
 * @Date: 2024-03-15 19:09:46
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-02 23:08:58
 * @Description: Description
 */
import { db } from '@next-cms/module-drizzle-postgresql';
import { schema, users } from '@next-cms/module-drizzle-postgresql/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

async function identityMiddleware(req: NextRequest, identity = 'user', isJwt = false) {
  if (identity === 'user' && isJwt === false) return;

  const userId = req.headers.get('userId') as unknown as number;
  const user = await db<typeof schema>().query.users.findFirst({ where: eq(users.id, userId) });

  // if (identity === 'admin' && user.role !== 'admin') {
  //   throw '无权操作';
  // }

  // if (identity === 'root' && !user.root) {
  //   throw '无权操作，仅超级管理可操作';
  // }
}

export { identityMiddleware };

