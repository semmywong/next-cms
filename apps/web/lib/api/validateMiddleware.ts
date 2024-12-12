/*
 * @Author: Semmy Wong
 * @Date: 2024-03-15 19:13:18
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:50:39
 * @Description: Description
 */
import { NextRequest } from 'next/server';

export async function validateMiddleware(req: NextRequest, schema: any) {
  if (!schema) return;

  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  const body = await req.json();
  const { error, value } = schema.validate(body, options);

  if (error) {
    throw `Validation error: ${error.details.map((x: any) => x.message).join(', ')}`;
  }

  // update req.json() to return sanitized req body
  req.json = () => value;
}
