import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Text, Title } from "../Typography";
import { FaGithubSquare } from "react-icons/fa";
import colors from "../../assets/jss/colors";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 9px 1px rgba(127, 131, 140, 0.16);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0px 0px 9px 1px rgba(127, 131, 140, 0.3);
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
  border-bottom: 0.5px solid ${colors.TETIARY};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ContentWrapper = styled.div`
  padding: 40px 20px 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretch;
  > div {
    margin-top: auto;
  }
`;

export default function ProjectCard({ img, title, description, github, link }) {
  return (
    <Wrapper>
      <Img src={img ? img : ""} />
      <ContentWrapper style={{ padding: "40px 20px 10px" }}>
        <Title mb={20} size="sm">
          {title}
        </Title>
        <Text color="tetiary" lineHeight={16.96}>
          {description}
        </Text>

        <div>
        {(github || link) && (
          <Flex>
            {github && (
              <Button iconOnly custom>
                <a href={github} target="__blank">
                  <FaGithubSquare color={colors.BLACK} size={"100%"} />
                </a>
              </Button>
            )}
            {link && <Button iconOnly link={link} />}
          </Flex>
        )}
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}
