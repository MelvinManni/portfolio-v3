import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colors";

const textSizeHeightHandler = (key = "", field, media, val) => {
  const returnField = {
    size: 38,
    lineHeight: 48,
  };
  switch (key.toLowerCase()) {
    case "bg":
      returnField.size = 55;
      returnField.lineHeight = 70;
      break;
    case "md":
      returnField.size = 36;
      returnField.lineHeight = 45.9;
      break;
    case "sm":
      returnField.size = 28;
      returnField.lineHeight = 29.68;
      break;

    case "xs":
      returnField.size = 22;
      returnField.lineHeight = 28;
      break;
    default:
      break;
  }
  return media === true ? returnField[field] * val : returnField[field];
};

const Text = styled.h2`
  font-family: "Audiowide";
  font-style: normal;
  font-weight: normal;
  position: relative;
  z-index: 1;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-size: ${(props) => textSizeHeightHandler(props.size, "size") + "px"};
  line-height: ${(props) => textSizeHeightHandler(props.size, "lineHeight") + "px"};
  color: ${(props) => (props.color ? colors[props.color.toUpperCase()] : colors.BLACK)};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : null)};
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : null)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : null)};
  margin-left: ${(props) => (props.mr ? props.ml + "px" : null)};
  @media all and (max-width: 960px) {
    font-size: ${(props) => textSizeHeightHandler(props.size, "size", true, 0.85) + "px"};
    line-height: ${(props) => textSizeHeightHandler(props.size, "lineHeight", true, 0.85) + "px"};
  }

  @media all and (max-width: 460px) {
    font-size: ${(props) => textSizeHeightHandler(props.size, "size", true, 0.75) + "px"};
    line-height: ${(props) => textSizeHeightHandler(props.size, "lineHeight", true, 0.75) + "px"};
  }
`;

export default function Title({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
}
