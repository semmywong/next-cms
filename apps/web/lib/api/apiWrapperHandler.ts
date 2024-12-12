/*
 * @Author: Semmy Wong
 * @Date: 2024-03-15 19:00:18
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:46:19
 * @Description: Description
 */
import { NextRequest, NextResponse } from 'next/server';

import { errorHandler, identityMiddleware, jwtMiddleware, validateMiddleware } from '.';

export { apiWrapperHandler };

function isPublicPath(req: NextRequest) {
  // public routes that don't require authentication
  const publicPaths = ['POST:/api/auth/login', 'POST:/api/auth/logout', 'POST:/api/auth/register'];
  return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`);
}

function apiWrapperHandler(handler: any, { identity, schema, isJwt }: any = {}) {
  return async (req: NextRequest, ...args: any[]) => {
    try {
      if (!isPublicPath(req)) {
        // global middleware
        await jwtMiddleware(req, isJwt);
        await identityMiddleware(req, identity, isJwt);
        await validateMiddleware(req, schema);
      }
      // route handler
      const responseBody = await handler(req, ...args);
      return NextResponse.json(responseBody || {});
    } catch (err) {
      console.log('global error handler', err);
      // global error handler
      return errorHandler(err);
    }
  };
}
