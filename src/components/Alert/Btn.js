import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import colors from "../../assets/jss/colors";


const BtnStyle = styled.button`
  background: ${(props) => (props.reverse ? colors.PRIMARY : colors.BLACK)};
  border-radius: 10px;
  padding-right: 0;
  padding-left: 20px;
  border: 0;
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.reverse ? colors.BLACK : colors.WHITE)};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  z-index: 1;
`;

const Icon = styled.div`
  border-radius: 10px;
  background: ${(props) => (props.reverse ? colors.BLACK : colors.PRIMARY)};
  margin-left: 15px;
  height: 100%;
  width: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: -1px;
`;

export default function Btn({ children, loading, reverse, ...rest }) {
  return (
      <BtnStyle reverse={reverse} {...rest}>
        {children}
        <Icon reverse={reverse}>
          <AiFillCloseCircle color={reverse ? colors.PRIMARY : colors.BLACK} size={24} />
        </Icon>
      </BtnStyle>
  );
}
