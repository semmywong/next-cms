import { AppInfo } from '@/common/constants';
import { VerificationEmail } from '@/components/email-templates';
import { render } from '@react-email/components';
import env from '../env';
import { sendEmail } from './sendEmail';

export const sendVerificationEmail = async ({ user, verificationToken }: { user: any; verificationToken: any }) => {
  const subject = `Confirm your ${AppInfo.name} account`;
  const verificationLink = `${env.appUrl}/auth/verify-email-token?token=${encodeURIComponent(verificationToken.token)}`;

  const html = render(VerificationEmail({ subject, verificationLink }));

  await sendEmail({
    to: user.email,
    subject,
    html,
  });
};
