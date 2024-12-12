/*
 * @Author: Semmy Wong
 * @Date: 2024-03-15 19:16:09
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:08:35
 * @Description: Description
 */
import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { passwordPolicies } from './common';
import env from './env';
import { ApiError } from './errors';

export const verifyToken = async (req: Request, isJwt: boolean) => {
  try {
    const token = req.headers.get('authorization') ?? '';
    const decoded = jwt.verify(token, process.env.AUTH_SECRET as string);
    const id = decoded;
    return new Promise((resolve) => resolve(id));
  } catch (error) {
    if (isJwt) {
      throw error;
    }
  }
};

export const createAccessToken = (payload: string) => {
  return jwt.sign(payload, process.env.AUTH_SECRET as string, {
    expiresIn: '1d',
  });
};

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

function getAuthProviders() {
  return env.authProviders?.split(',') || [];
}

export function isAuthProviderEnabled(provider: AuthProviderType) {
  return getAuthProviders().includes(provider);
}

export function authProviderEnabled() {
  return {
    github: isAuthProviderEnabled('github'),
    google: isAuthProviderEnabled('google'),
    email: isAuthProviderEnabled('email'),
    saml: isAuthProviderEnabled('saml'),
    credentials: isAuthProviderEnabled('credentials'),
  };
}

export const validatePasswordPolicy = (password: string) => {
  const { minLength } = passwordPolicies;

  if (password.length < minLength) {
    throw new ApiError(422, `Password must have at least ${minLength} characters.`);
  }

  // TODO: Add more password policies
};
