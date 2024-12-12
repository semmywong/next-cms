import { AppInfo } from '@/common/constants';
import { Button, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';
import EmailLayout from './EmailLayout';

interface VerificationEmailProps {
  subject: string;
  verificationLink: string;
}

const VerificationEmail = ({ subject, verificationLink }: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <EmailLayout>
        <Heading as="h2">Confirm your account</Heading>
        <Text>
          Thank you for signing up for {AppInfo.name}. To confirm your account, please click the button below.
        </Text>
        <Container className="text-center">
          <Button href={verificationLink} className="bg-brand text-white font-medium py2 px4 rounded">
            Confirm account
          </Button>
        </Container>
        <Text>If you did not create an account, no further action is required.</Text>
      </EmailLayout>
    </Html>
  );
};

export default VerificationEmail;
