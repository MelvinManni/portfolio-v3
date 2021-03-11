import React from "react";
import Section from "../../assets/jss/section";
import { StyledTitle, Title } from "../../components/Typography";
import XpCard from "../../components/Utilities/XpCard";
import { experience } from "../../components/variables";

export default function Experience() {
  return (
    <Section padding="lg">
      <StyledTitle mb={20}>Journey so far</StyledTitle>
      <Title mb={130} size="md">
        My Experience
      </Title>

      {experience.map((item, indx) => (
        <XpCard key={indx.toString()} company={item.company} position={item.title} description={item.description} from={item.from} to={item.to} />
      ))}
    </Section>
  );
}
