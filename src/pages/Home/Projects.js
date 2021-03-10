import React from "react";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import Section from "../../assets/jss/section";
import { StyledTitle, Title } from "../../components/Typography";
import ProjectCard from "../../components/Utilities/ProjectCard";

export default function Projects() {
  return (
    <Section padding="lg">
      <StyledTitle mb={5}>What I’ve done</StyledTitle>
      <Title mb={100}>Case Studies</Title>
      <GridContainer>
        <GridCol col={12} md={6}>
          <ProjectCard />
        </GridCol>
        <GridCol col={12} md={6}></GridCol>
      </GridContainer>
    </Section>
  );
}
