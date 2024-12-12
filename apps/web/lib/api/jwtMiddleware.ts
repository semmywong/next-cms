/*
 * @Author: Semmy Wong
 * @Date: 2024-03-15 19:10:46
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:49:54
 * @Description: Description
 */
import { NextRequest } from 'next/server';
import { verifyToken } from '../auth';

async function jwtMiddleware(req: NextRequest, isJwt = false) {
  const id = await verifyToken(req, isJwt);
  req.headers.set('userId', id as string);
}

export { jwtMiddleware };
