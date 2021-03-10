import React from "react";
import Section from "../../assets/jss/section";
import { StyledTitle, Title } from "../../components/Typography";

export default function Experience() {
  return (
    <Section padding="lg">
      <StyledTitle mb={20}>Journey so far</StyledTitle>
      <Title mb={130} size="md">
        My Experience
      </Title>
    </Section>
  );
}
