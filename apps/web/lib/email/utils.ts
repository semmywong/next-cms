/*
 * @Author: Semmy Wong
 * @Date: 2024-03-18 16:14:39
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:40:57
 * @Description: Description
 */
import env from '../env';
import blockedDomains from './freeEmailService.json';

const isBusinessEmail = (email: string) => {
  if (email.indexOf('@') > 0 && email.indexOf('@') < email.length - 3) {
    const emailDomain = email.split('@')[1];

    return !(blockedDomains as any)[emailDomain!];
  }
};

export const isEmailAllowed = (email: string) => {
  if (!env.disableNonBusinessEmailSignup) {
    return true;
  }

  return isBusinessEmail(email);
};

export function extractEmailDomain(email: string) {
  return email.split('@')[1];
}
