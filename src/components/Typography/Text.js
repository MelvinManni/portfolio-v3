import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colors";

const TextStyle = styled.h2`
  font-family: "Sora";
  font-style: ${(props)=> props.fontStyle || "normal"};
  position: relative;
  z-index: 1;
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight + "px" : "20.16px")};
  color: ${(props) => (props.color ? colors[props.color.toUpperCase()] : colors.TETIARY)};
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : null)};
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : null)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : null)};
  margin-left: ${(props) => (props.mr ? props.ml + "px" : null)};
  @media all and (max-width: 960px) {
    font-size: ${(props) => (props.size ? props.size * 0.9 + "px" : "14.4px")};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight * 0.9 + "px" : "18.16px")};
  }

`;

export default function Text({ children, ...rest }) {
  return <TextStyle {...rest}>{children}</TextStyle>;
}
