/*
 * @Author: Semmy Wong
 * @Date: 2024-03-27 22:31:32
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:37:41
 * @Description: Description
 */
import { AppInfo } from '@/common/constants';
import env from '@/lib/env';
import { Button, Container, Head, Html, Preview, Text } from '@react-email/components';
import EmailLayout from './EmailLayout';

interface WelcomeEmailProps {
  name: string;
  team: string;
  subject: string;
}

const WelcomeEmail = ({ name, subject, team }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <EmailLayout>
        <Text>Hi {name},</Text>
        <Text>
          You have been successfully signed up to {AppInfo.name} on team <b>{team}</b>.
        </Text>
        <Text>Click the link below to login now:</Text>
        <Container className="text-center">
          <Button href={`${env.appUrl}/auth/login`} className="bg-brand text-white font-medium py2 px4 rounded">
            Login to your account
          </Button>
        </Container>
      </EmailLayout>
    </Html>
  );
};

export default WelcomeEmail;
