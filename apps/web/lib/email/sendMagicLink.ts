/*
 * @Author: Semmy Wong
 * @Date: 2024-03-18 16:14:39
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:38:12
 * @Description: Description
 */
import { AppInfo } from '@/common/constants';
import MagicLink from '@/components/email-templates/MagicLink';
import { render } from '@react-email/render';
import { sendEmail } from './sendEmail';

export const sendMagicLink = async (email: string, url: string) => {
  const subject = `Sign in to ${AppInfo.name}`;

  const html = render(MagicLink({ url, subject }));

  await sendEmail({
    to: email,
    subject,
    html,
  });
};