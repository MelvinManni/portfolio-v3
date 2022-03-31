import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colors";
import { Text } from "../Typography";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Wrapper = styled.footer`
  padding: 50px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  border-top: 0.4px solid #eee;
  @media all and (max-width: 534px) {
    padding: 60px 25px;
    flex-direction: column;
  } ;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 534px) {
    margin-top: 10px;
  }
`;

const Icon = styled.a`
  font-size: 23px;
  color: ${colors.TETIARY};
  :nth-child(even) {
    margin: 0 25px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Text align="center" size={16} lineHeight={20} color="tetiary">
        Made with Love and Cruise
      </Text>

      <IconWrapper>
        <Icon href="https://www.twitter.com/Melvin_manni" target="__blank">
          <AiOutlineTwitter />
        </Icon>
        <Icon href="https://www.github.com/MelvinManni" target="__blank">
          <AiOutlineGithub />
        </Icon>
        <Icon href="https://www.linkedin.com/mwlite/in/melvin-kosisochukwu-9557a9184" target="__blank">
          <FaLinkedinIn />
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
}
