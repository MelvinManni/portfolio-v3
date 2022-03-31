import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Text, Title } from "../Typography";
import { FaGithubSquare } from "react-icons/fa";
import colors from "../../assets/jss/colors";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  box-shadow: 0px 0px 9px 1px rgba(127, 131, 140, 0.16);
  border-radius: 8px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;

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
      <div style={{ padding: "40px 20px" }}>
        <Title mb={20} size="sm">
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
      </div>
    </Wrapper>
  );
}
