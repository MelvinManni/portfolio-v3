import React from "react";
import styled from "styled-components";
import Section from "../../assets/jss/section";
import blob from "../../assets/images/hero-vector.svg";
import blob2 from "../../assets/images/hero-vector2.svg";
import StyledTitle from "../../components/Typography/StyledTitle";
import { Text, Title } from "../../components/Typography";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import Button from "../../components/Button";
import { Hide } from "../../assets/jss/responsive";
import deskImg from "../../assets/images/desk.png";

const Wrapper = styled(Section)`
  background-image: url(${blob});
  background-repeat: no-repeat;
  background-position: right bottom;
  padding-bottom: 0;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${blob2});
    background-repeat: no-repeat;
    background-position: left bottom;
    padding-bottom: 0;
    left: 0;
    bottom: 30%;
  }

  @media all and (max-width: 993px) {
    &::before {
      display: none;
    }
  }
`;

const LeftGrid = styled(GridCol)`
  margin-bottom: 250px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 100%;
`;

const Img = styled.img`
  @media all and (min-width: 1024px) {
    width: 76%;
  }
  width: 100%;
`;

export default function Hero() {
  return (
    <Wrapper padding="lg">
      <GridContainer>
        <LeftGrid lg={6}>
          <StyledTitle mb={18}>Hello there</StyledTitle>
          <Title mb={60} size="lg">
            I’m Melvin Manni
          </Title>
          <GridCol style={{ padding: 0 }} col={12} sm={10} md={8} lg={10} xl={8}>
            <Text mb={80} color="tetiary">
              Software developer, student, lover of anime/video games and lover of JavaScript.
            </Text>
          </GridCol>

          <Button>Let’s Chat</Button>
        </LeftGrid>
        <GridCol lg={6}>
          <Hide md>
            <ImgWrapper>
              <Img src={deskImg} alt="desk and person" />
            </ImgWrapper>
          </Hide>
        </GridCol>
      </GridContainer>
    </Wrapper>
  );
}
