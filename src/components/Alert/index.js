import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colors";
import { Text, Title } from "../Typography";
import { AiOutlineCheck } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import Btn from "./Btn";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 40px;
  left:0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  bottom: 0;
  height: 100vh;
  z-index: 5000;
  transition: 0.34s ease all;
  animation: 0.67s fadeIn ease 1 forwards;
`;

const Card = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.WHITE};
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-width: 55%;
  max-width: 200px;
  text-align: center;
`;

export default function Alert({ type, message, open, setOpen }) {
  return (
    open && (
      <Wrapper>
        <Card>
          <Title align="center" mb={30} size="sm" color={type.toString().toLowerCase() === "success" ? "success" : "error"}>
            {type.toString().toLowerCase() === "success" ? "Success" : "Error"}
            {type.toString().toLowerCase() === "success" ? <AiOutlineCheck /> : <BiErrorCircle />}{" "}
          </Title>

          <Text align="center" mb={100}>
            {message}
          </Text>

          <Btn onClick={()=>setOpen((prev) => !prev)}>Close</Btn>
        </Card>
      </Wrapper>
    )
  );
}
