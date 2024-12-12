/*
 * @Author: Semmy Wong
 * @Date: 2024-03-18 16:14:39
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:39:54
 * @Description: Description
 */
import { AppInfo } from '@/common/constants';
import { TeamInviteEmail } from '@/components/email-templates';
import { render } from '@react-email/components';
import env from '../env';
import { sendEmail } from './sendEmail';

export const sendTeamInviteEmail = async (team: any, invitation: any) => {
  if (!invitation.email) {
    return;
  }

  const subject = `You've been invited to join ${team.name} on ${AppInfo.name}`;
  const invitationLink = `${env.appUrl}/invitations/${invitation.token}`;

  const html = render(TeamInviteEmail({ invitationLink, team, subject }));

  await sendEmail({
    to: invitation.email,
    subject,
    html,
  });
};
