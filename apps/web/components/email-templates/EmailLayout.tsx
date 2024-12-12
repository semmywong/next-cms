/*
 * @Author: Semmy Wong
 * @Date: 2024-03-27 22:31:32
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:35:06
 * @Description: Description
 */
import { AppInfo } from '@/common/constants';
import { Body, Container, Hr, Img, Section, Tailwind, Text } from '@react-email/components';
import { ReactNode } from 'react';

interface EmailLayoutProps {
  children: ReactNode;
}

const EmailLayout = ({ children }: EmailLayoutProps) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#25c2a0',
            },
          },
        },
      }}
    >
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid bg-white border-[#f0f0f0] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Img src={AppInfo.logoUrl} width="50" height="50" alt={AppInfo.name} className="my8 mx-auto" />
          <Section>{children}</Section>
          <Section>
            <Hr className="border border-solid border-[#eaeaea] my-[20px] mx0 w-full" />
            <Text className="my0 text-center text-xs text-[#666666]">
              <span className="block">{AppInfo.name}</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  );
};

export default EmailLayout;
