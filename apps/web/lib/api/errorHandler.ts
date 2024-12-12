/*
 * @Author: Semmy Wong
 * @Date: 2024-03-15 19:09:10
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:44:31
 * @Description: Description
 */
import { NextResponse } from 'next/server';
import { responseJSON } from './responseJSON';

function errorHandler(err: string | any) {
  if (typeof err === 'string') {
    // custom application error
    const is404 = err.toLowerCase().endsWith('not found');
    const status = is404 ? 404 : 400;
    return NextResponse.json(
      responseJSON({
        message: err,
        code: status,
      }),
      { status },
    );
  }

  if (err.name === 'JsonWebTokenError') {
    // jwt error - delete cookie to auto logout
    return NextResponse.json(
      responseJSON({
        message: 'Unauthorized',
        code: 401,
      }),
      { status: 401 },
    );
  }

  if (err.name === 'UserExistsError') {
    return NextResponse.json(
      responseJSON({
        message: err.message,
        code: 422,
      }),
      { status: 422 },
    );
  }

  // default to 500 server error
  console.error(err);
  return NextResponse.json(
    responseJSON({
      message: err.message,
      code: 500,
    }),
    { status: 500 },
  );
}

export { errorHandler };
