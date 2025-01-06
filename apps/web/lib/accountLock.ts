/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 22:47:06
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-01-04 20:20:07
 * @Description: Description
 */
import { render } from '@react-email/components';

import { AppInfo } from '@/common/constants';
import AccountLocked from '@/components/email-templates/AccountLocked';
import { db } from '@/db';
import { users, verificationTokens } from '@/db';
import { eq } from 'drizzle-orm';
import { sendEmail } from './email/sendEmail';
import env from './env';
import { generateToken } from './server-common';
import { type User } from '@next-cms/module-drizzle-postgresql/schema';

const UNLOCK_ACCOUNT_TOKEN_EXPIRATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export const incrementLoginAttempts = async (user: User) => {
  const [updatedUser] = await db.update(users).set({
    invalidLoginAttempts: 1,
  }).where(eq(users.id, user.id)).returning();

  if (exceededLoginAttemptsThreshold(updatedUser)) {
    await db.update(users).set({
      lockedAt: new Date(),
    }).where(eq(users.id, user.id));

    await sendLockoutEmail(user);
  }

  return updatedUser;
};

export const clearLoginAttempts = async (user: User) => {
  await db.update(users).set({
    invalidLoginAttempts: 0,
    lockedAt: null,
  }).where(eq(users.id, user.id));
};

export const unlockAccount = async (user: User) => {
  await db.update(users).set({
    invalidLoginAttempts: 0,
    lockedAt: null,
  }).where(eq(users.id, user.id));
};

export const sendLockoutEmail = async (user: User, resending = false) => {
  const [verificationToken] = await db.insert(verificationTokens).values({
    identifier: user.email,
    expires: new Date(Date.now() + UNLOCK_ACCOUNT_TOKEN_EXPIRATION),
    token: generateToken()
  }).returning();

  const subject = resending ? `Unlock your ${AppInfo.name} account` : `Your ${AppInfo.name} account has been locked`;

  const token = encodeURIComponent(verificationToken.token);
  const url = `${AppInfo.url}/auth/unlock-account?token=${token}`;

  const html = await render(AccountLocked({ subject, url }));

  await sendEmail({
    to: user.email,
    subject,
    html,
  });
};

export const exceededLoginAttemptsThreshold = (user: User) => {
  return user.invalidLoginAttempts >= env.maxLoginAttempts;
};

export const isAccountLocked = (user: User) => {
  return !!user.lockedAt && exceededLoginAttemptsThreshold(user);
};
