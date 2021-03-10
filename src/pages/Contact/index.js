import React from "react";
import styled from "styled-components";
import Section from "../../assets/jss/section";
import ContactComponent from "../../components/Contact";
import { StyledTitle, Text, Title } from "../../components/Typography";

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 65px;
`;

const Socials = styled.a`
  margin-right: 30px;
  :nth-last-child() {
    margin-right: 0;
  }
`;

export default function Contact() {
  return (
    <>
      <Section padding="lg">
        <StyledTitle>Say Hello</StyledTitle>
        <Title mb={95} size="md">
          Contact
        </Title>

        <Text color="black" weight={600} size={18} lineHeight={19} mb={35}>
          Find Me on Social Media 👋🏽
        </Text>

        <Row>
          <Socials>
            <Text color="GitHub" weight={600} size={18} lineHeight={19} mb={35}>
              GitHub
            </Text>
          </Socials>
          <Socials>
            <Text color="Twitter" weight={600} size={18} lineHeight={19} mb={35}>
              Twitter
            </Text>
          </Socials>
          <Socials>
            <Text color="LinkedIn" weight={600} size={18} lineHeight={19} mb={35}>
              LinkedIn
            </Text>
          </Socials>
          <Socials>
            <Text color="Facebook" weight={600} size={18} lineHeight={19} mb={35}>
              Facebook
            </Text>
          </Socials>
        </Row>

        <Text color="black" weight={600} size={18} lineHeight={19} mb={20}>
          Get official and shoot me a Mail
        </Text>
        <a href="mailto:melvinmanni@gmail.com">
          <Text color="email" weight={600} size={18} lineHeight={19}>
            melvinmanni@gmail.com
          </Text>
        </a>
      </Section>

      <ContactComponent title="Drop a Message" header="Start a Conversation" />
    </>
  );
}
