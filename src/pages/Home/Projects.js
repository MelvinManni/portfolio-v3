import React from "react";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import Section from "../../assets/jss/section";
import { StyledTitle, Title } from "../../components/Typography";
import ProjectCard from "../../components/Utilities/ProjectCard";
import { projects } from "../../components/variables";

export default function Projects() {
  return (
    <Section padding="lg">
      <StyledTitle mb={5}>What I’ve done</StyledTitle>
      <Title mb={100}>Case Studies</Title>
      <GridContainer justify="space-between">
        {projects.map((item, indx) => (
          <GridCol key={indx.toString()} col={12} md={6} lg={5}>
            <ProjectCard img={item.img} title={item.title} github={item.github} link={item.link} description={item.description} />
          </GridCol>
        ))}
      </GridContainer>
    </Section>
  );
}
