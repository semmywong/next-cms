/*
 * @Author: Semmy Wong
 * @Date: 2024-03-18 16:14:39
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:38:43
 * @Description: Description
 */
import { AppInfo } from '@/common/constants';
import { ResetPasswordEmail } from '@/components/email-templates';
import { render } from '@react-email/render';
import env from '../env';
import { sendEmail } from './sendEmail';

export const sendPasswordResetEmail = async (user: any, token: string) => {
  const subject = `Reset your ${AppInfo.name} password`;
  const url = `${env.appUrl}/auth/reset-password/${token}`;

  const html = render(ResetPasswordEmail({ url, subject, email: user.email }));

  await sendEmail({
    to: user.email,
    subject,
    html,
  });
};
