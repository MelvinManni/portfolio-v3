import React from "react";
import styled from "styled-components";
import Section from "../../assets/jss/section";
import ContactComponent from "../../components/Contact";
import { StyledTitle, Text, Title } from "../../components/Typography";
import blob from "../../assets/images/experience-blob.svg";

const Wrapper = styled(Section)`
  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 100%;
    height: 100%;
    background-image: url(${blob});
    background-repeat: no-repeat;
    background-position: right center;
    padding-bottom: 0;
  }

  @media all and (max-width: 993px) {
    &::before {
      display: none;
    }
  }
`;

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
      <Wrapper padding="lg">
        <StyledTitle>Say Hello</StyledTitle>
        <Title mb={95} size="md">
          Contact
        </Title>

        <Text color="black" weight={600} size={18} lineHeight={19} mb={35}>
          Find Me on Social Media 👋🏽
        </Text>

        <Row>
          <Socials href="https://www.github.com/MelvinManni" target="__blank" >
            <Text color="GitHub" weight={600} size={18} lineHeight={19} mb={35}>
              GitHub
            </Text>
          </Socials>
          <Socials href="https://www.twitter.com/Melvin_manni" target="__blank" >
            <Text color="Twitter" weight={600} size={18} lineHeight={19} mb={35}>
              Twitter
            </Text>
          </Socials>
          <Socials href="https://www.linkedin.com/mwlite/in/melvin-kosisochukwu-9557a9184" target="__blank" >
            <Text color="LinkedIn" weight={600} size={18} lineHeight={19} mb={35}>
              LinkedIn
            </Text>
          </Socials>
          <Socials href="https://www.facebook.com/melvin.nnamani" target="__blank" >
            <Text color="Facebook" weight={600} size={18} lineHeight={19} mb={35}>
              Facebook
            </Text>
          </Socials>
        </Row>

        <Text color="black" weight={600} size={18} lineHeight={19} mb={20}>
          Get official and shoot me a Mail
        </Text>
        <a href="mailto:melvinnnamanni@gmail.com">
          <Text color="email" weight={600} size={18} lineHeight={19}>
            melvinnnamanni@gmail.com
          </Text>
        </a>

      </Wrapper>
      <ContactComponent title="Drop a Message" header="Start a Conversation" />
    </>
  );
}
