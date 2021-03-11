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
import Alert from "../Alert";

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

export default function ContactComponent({ title, header }) {
  const [state, setState] = React.useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [modal, setModal] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "",
    type: "",
  });
  const [loading, setLoading] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xwkwglde", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(state),
      });
      setLoading(false);
      setAlert({
        message: "Message succesfully sent. I will be responding within the next 24 hours :D.",
        type: "success",
      });
      setModal(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setAlert({
        message: "Opps! \n An Error occured while trying to send message, please try again.",
        type: "error",
      });
      setModal(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

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
          <form onSubmit={handleSubmit}>
            <InputField required type="text" name="Name" value={state.Name} onChange={handleChange} placeholder="Full name" />
            <InputField required type="email" name="Email" value={state.Email} onChange={handleChange} placeholder="Email" />
            <InputField name="Phone" minLength={11} maxLength={14} type="number" value={state.Phone} onChange={handleChange} placeholder="Phone Number" />
            <TextArea required type="text" name="Message" value={state.Message} onChange={handleChange} rows={9} placeholder="Message" />
            <ButtonWrapper>
              <Button loading={loading} reverse>
                Let’s Chat
              </Button>
            </ButtonWrapper>
          </form>
        </GridCol>
      </GridContainer>
      <ImgWrapper>
        <Hide md>
          <Img src={hand} alt="desk and person" />
        </Hide>
      </ImgWrapper>

      {/* Alert Modal */}
      <Alert open={modal} setOpen={setModal} type={alert.type} message={alert.message} />
    </Wrapper>
  );
}
