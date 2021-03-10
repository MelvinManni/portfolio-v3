import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colors";

const Text = styled.h4`
  font-family: "Sora";
  font-style: normal;
  position: relative;
  z-index: 1;
  font-weight: ${(props) => (props.weight ? props.weight : 600)};
  font-size: 18px;
  line-height: 106%;
  color: ${(props) => (props.primary ? colors.PRIMARY : "#848ba0")};
  padding-left: 50px;
  position: relative;
  display: flex;
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : null)};
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : null)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : null)};
  margin-left: ${(props) => (props.mr ? props.ml + "px" : null)};
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 3.5px;
    background: ${(props) => (props.primary ? colors.PRIMARY : colors.BLACK)};
    position: absolute;
    left: 0;
  }
`;

export default function StyledTitle({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
}
