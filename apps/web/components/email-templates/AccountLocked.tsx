/*
 * @Author: Semmy Wong
 * @Date: 2024-03-27 22:30:31
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:34:54
 * @Description: Description
 */
import { Button, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';

import { AppInfo } from '@/common/constants';
import EmailLayout from './EmailLayout';

interface AccountLockedProps {
  subject: string;
  url: string;
}

const AccountLocked = ({ subject, url }: AccountLockedProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <EmailLayout>
        <Heading as="h2">Account Locked</Heading>
        <Text>Your {AppInfo.name} account has been locked due to too many failed login attempts.</Text>
        <Text>Please click the button below to unlock your account.</Text>
        <Container className="text-center">
          <Button href={url} className="bg-brand text-white font-medium py2 px4 rounded">
            Unlock account
          </Button>
        </Container>
        <Text>Please contact us if you need any assistance with unlocking your account.</Text>
      </EmailLayout>
    </Html>
  );
};

export default AccountLocked;
