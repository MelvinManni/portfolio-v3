import React from "react";
import styled from "styled-components";
import Section from "../../assets/jss/section";
import { StyledTitle, Title } from "../../components/Typography";
import XpCard from "../../components/Utilities/XpCard";
import { experience } from "../../components/variables";
import blob from "../../assets/images/experience-blob.svg";
import { GridCol } from "../../assets/jss/Flexgrid";
import { LinkPreview } from "@dhaiwat10/react-link-preview";


export default function Experience() {
  const articleUrl = ["https://www.smashingmagazine.com/2021/10/optimizing-nextjs-applications-nx/"];
  return (
    <Section padding="lg">
      <StyledTitle mb={20}>Technical Contents</StyledTitle>
      <Title mb={80} size="md">
        My Articles
      </Title>

      <GridCol md={12} lg={10} xl={8}>
        <LinkPreview url={articleUrl[0]} />
      </GridCol>
    </Section>
  );
}
