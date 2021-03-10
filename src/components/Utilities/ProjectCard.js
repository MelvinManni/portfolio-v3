import React from "react";
import styled from "styled-components";
import { Text, Title } from "../Typography";

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

const CardTitle = styled(Title)`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export default function ProjectCard({ img, title, description }) {
  return (
    <Wrapper>
      <Img src={img && require(img)} />
      <CardTitle size="sm">{title}</CardTitle>
      <Text color="tetiary" lineHeight={16.96}>
        {description}
      </Text>
    </Wrapper>
  );
}
