/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 22:47:06
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-12 20:43:34
 * @Description: Description
 */
import { WelcomeEmail } from '@/components/email-templates';
import { render } from '@react-email/components';
import { sendEmail } from './sendEmail';

export const sendWelcomeEmail = async (name: string, email: string, team: string) => {
  const subject = 'Welcome to BoxyHQ';
  const html = await render(WelcomeEmail({ name, team, subject }));

  await sendEmail({
    to: email,
    subject,
    html,
  });
};
