import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colors";

const Input = styled.textarea`
  background: #9e9e9e;
  border: 0px;
  width: 100%;
  padding: 20px 25px;
  font-family: "Sora";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.WHITE};
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : "20px")};
`;

export default function TextArea({ ...rest }) {
  return <Input {...rest} />;
}
