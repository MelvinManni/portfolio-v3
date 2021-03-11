import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Text, Title } from "../Typography";
import { FaGithubSquare } from "react-icons/fa";
import colors from "../../assets/jss/colors";

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 50px;
`;

export default function ProjectCard({ img, title, description, github, link }) {
  return (
    <Wrapper>
      <Img src={img ? img : ""} />
      <Title mt={50} mb={20} size="sm">
        {title}
      </Title>
      <Text color="tetiary" lineHeight={16.96}>
        {description}
      </Text>

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
    </Wrapper>
  );
}
