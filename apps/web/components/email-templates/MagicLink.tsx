/*
 * @Author: Semmy Wong
 * @Date: 2024-03-27 22:31:32
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:35:45
 * @Description: Description
 */
import { AppInfo } from '@/common/constants';
import { Button, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';
import EmailLayout from './EmailLayout';

interface MagicLinkProps {
  subject: string;
  url: string;
}

const MagicLink = ({ subject, url }: MagicLinkProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <EmailLayout>
        <Heading as="h2">Log in to {AppInfo.name}</Heading>
        <Text>
          Click the button below to log in to your {AppInfo.name} account. This button will expire in 60 minutes.
        </Text>
        <Container className="text-center">
          <Button href={url} className="bg-brand text-white font-medium py2 px4 rounded">
            Log in to {AppInfo.name}
          </Button>
        </Container>
        <Text>If you did not request this email, you can safely ignore it.</Text>
      </EmailLayout>
    </Html>
  );
};

export default MagicLink;
