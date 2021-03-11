import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colors";
import { Text, Title } from "../Typography";

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(111, 255, 233, 0.3);
  z-index: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 45px;
  &::before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${colors.TETIARY};
    position: absolute;
  }
  &::after {
    content: "";
    width: 30px;
    height: 3px;
    background: ${colors.TETIARY};
    position: absolute;
    right: -35px;
  }

  @media all and (max-width: 960px) {
    width: 40px;
    height: 40px;
    margin-right: 35px;
    &::before {
      width: 20px;
      height: 20px;
    }
    &::after {
      width: 25px;
      right: -30px;
    }
  }

  @media all and (max-width: 570px) {
    width: 30px;
    height: 30px;
    margin-right: 30px;
    &::before {
      width: 15px;
      height: 15px;
    }
    &::after {
      width: 20px;
      height: 2px;
      right: -25px;
    }
  }

  @media all and (max-width: 340px) {
    margin-right: 10px;
    &::after {
      width: 2px;

      height: 100%;
      bottom: -100%;
      right: unset;
    }
  } ;
`;

const CardTitle = styled(Title)`
  margin-top: 10px;
  margin-bottom: 5px;

  @media all and (max-width: 570px) {
    margin-top: 3px;
  }
`;

const Subtitle = styled(Text)`
  margin-bottom: 18px;
`;

const Description = styled(Text)`
  margin-bottom: 40px;
`;

export default function XpCard({ company, position, description, from, to }) {
  return (
    <Wrapper>
      <Circle />
      <div style={{ flex: 1 }}>
        <CardTitle size="xs">{company}</CardTitle>
        <Subtitle color="xp" size={18} lineHeight={16.68}>
          {position}
        </Subtitle>

        <Description color="xp" size={14} lineHeight={18}>
          {description}
        </Description>

        <Text color="xp" size={13} lineHeight={16}>
          {from}-{to === undefined || to === "" ? "Present" : to}
        </Text>
      </div>
    </Wrapper>
  );
}
