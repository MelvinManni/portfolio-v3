import React from "react";
import styled from "styled-components";
import { GridCol } from "../../assets/jss/Flexgrid";
import Section from "../../assets/jss/section";
import { StyledTitle, Text, Title } from "../../components/Typography";
import blob from "../../assets/images/whoami-vector.svg";
import { bounce } from "../../assets/jss/animations";
import vector1 from "../../assets/images/ring-three.svg";
import vector2 from "../../assets/images/ring-two.svg";
import vector3 from "../../assets/images/vector-sphere.svg";
import { Hide } from "../../assets/jss/responsive";

const Blob = styled.img`
  position: absolute;
  right: 0;
  bottom: -50px;
  z-index: 0;
`;

const Bounce = styled.div`
  animation: ${(props) => bounce({ start: props.start, stop: props.stop })} 1s infinite alternate;
  animation-delay: ${(props) => (props.delay ? props.delay : null)};
  animation-timing-function: ${(props) => (props.time ? props.time : null)};
  position: absolute;
  left: ${(props) => (props.left ? props.left + "px" : null)};
  right: ${(props) => (props.right ? props.right + "px" : null)};
  top: ${(props) => (props.top ? props.top + "px" : null)};
  bottom: ${(props) => (props.bottom ? props.bottom + "px" : null)};
`;

const VectorImg = styled.img`
  width: 70px;
`;

export default function WhoAmI() {
  return (
    <Section padding="md" bg="primary100">
      <GridCol md={10} lg={8}>
        <StyledTitle mb={4}>Who am I?</StyledTitle>
        <Title mb={40}>A bit about me</Title>
        <Text size={18} lineHeight={47}>
          I am a software developer, technical writer, blockchain enthusiast, and a passionate student of the world. With a love for gaming to round out my
          interests, I am someone who lives life to the fullest. My journey as a programmer began in 2018, and since then, I have been on an exciting roller
          coaster ride, crafting elegant and efficient code that is both functional and visually appealing. In pursuit of excellence, I strive to eliminate as
          many bugs as possible, all while being fueled by the invigorating power of coffee.
        </Text>
      </GridCol>
      <Blob src={blob} alt="blob" />
      <Hide md>
        <Bounce time="1.2s" right={180} bottom={150}>
          <VectorImg src={vector1} />
        </Bounce>
        <Bounce stop={-10} time="0.9s" right={160} bottom={0}>
          <VectorImg src={vector1} />
        </Bounce>
        <Bounce start={14} time="0.7s" right={80} bottom={125}>
          <VectorImg src={vector3} />
        </Bounce>
      </Hide>
      <Bounce right={80} bottom={5}>
        <VectorImg src={vector2} />
      </Bounce>
    </Section>
  );
}
