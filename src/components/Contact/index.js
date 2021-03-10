import React from "react";
import styled from "styled-components";
import Section from "../../assets/jss/section";
import blob from "../../assets/images/contact-vector.svg";
import StyledTitle from "../Typography/StyledTitle";
import { Text, Title } from "../Typography";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import Button from "../Button";
import { Hide } from "../../assets/jss/responsive";
import hand from "../../assets/images/hand.svg";
import { InputField, TextArea } from "../Input";

const Wrapper = styled(Section)`
  background-image: url(${blob});
  background-repeat: no-repeat;
  background-position: right center;
`;

const ImgWrapper = styled.div`
  position: absolute;
  right: -200px;
  top: 10%;
`;

const Img = styled.img`
  width: 75%;
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
`;

export default function ContactComponent({title, header}) {
  return (
    <Wrapper bg="black">
      <GridContainer>
        <GridCol md={10} lg={8} xl={6}>
          <StyledTitle primary mb={5}>
            {header}
          </StyledTitle>
          <Title color="white" mb={18} size="lg">
            {title}
          </Title>
          <Text mb={80} color="grey">
            Leave a message! I will reply within the day
          </Text>
          <form>
            <InputField placeholder="Full name" />
            <InputField placeholder="Email" />
            <InputField placeholder="Phone Number" />
            <TextArea rows={9} placeholder="Message" />
            <ButtonWrapper>
              <Button reverse>Let’s Chat</Button>
            </ButtonWrapper>
          </form>
        </GridCol>
      </GridContainer>
      <ImgWrapper>
        <Hide md>
          <Img src={hand} alt="desk and person" />
        </Hide>
      </ImgWrapper>
    </Wrapper>
  );
}
