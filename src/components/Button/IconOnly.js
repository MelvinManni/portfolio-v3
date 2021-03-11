import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import colors from "../../assets/jss/colors";
import btnDot from "../../assets/images/circle-grid.svg";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  margin: 0 13px 13px 0;
`;

const Shadow = styled.div`
  content: "";
  position: absolute;
  height: 45px;
  width: 100%;
  background-image: url(${btnDot});
  background-position: center;
  background-size: cover;
  bottom: -6px;
  right: -6px;
  z-index: 0;
`;

const Btn = styled.button`
  border-radius: ${(props) => (props.custom !== undefined ? "10px" : "50%")};
  background: ${(props) => (props.custom === undefined ? colors.PRIMARY : colors.WHITE)};
  width: 45px;
  height: 45px;
  padding: ${(props) => (props.custom ? "2px" : "10px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  border: 0;
`;

export default function IconButton({ children, custom, link, ...rest }) {
  return (
    <Wrapper>
      <Btn custom={custom} {...rest}>
        {custom === undefined ? (
          <a href={link} target="__blank">
            <FaLongArrowAltRight color={colors.BLACK} size={24} />
          </a>
        ) : (
          children
        )}
      </Btn>
      {custom === undefined && <Shadow />}
    </Wrapper>
  );
}
