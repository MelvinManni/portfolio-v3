import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import colors from "../../assets/jss/colors";
import btnDot from "../../assets/images/button-grid.svg";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  margin: 0 13px 13px 0;
`;

const Shadow = styled.div`
  content: "";
  position: absolute;
  height: 60px;
  width: 100%;
  background-image: url(${btnDot});
  background-position: center;
  background-size: cover;
  bottom: -20px;
  right: -15px;
  z-index: 0;
`;

const Btn = styled.button`
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

export default function DefaultButton({ children, reverse, ...rest }) {
  return (
    <Wrapper>
      <Btn reverse={reverse} {...rest}>
        {children}
        <Icon reverse={reverse}>
          <FaLongArrowAltRight color={reverse ? colors.PRIMARY : colors.BLACK} size={24} />
        </Icon>
      </Btn>
      <Shadow />
    </Wrapper>
  );
}
