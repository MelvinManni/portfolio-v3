import React from "react";
import styled from "styled-components";
import { BsArrowReturnLeft } from "react-icons/bs";
import colors from "../../assets/jss/colors";

const Wrapper = styled.button`
  position: fixed;
  bottom: 60px;
  right: 10px;
  background: ${colors.BLACK};
  color: ${colors.PRIMARY};
  border: 0;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  z-index: 1000;
  cursor: pointer;
`;

const Icon = styled(BsArrowReturnLeft)`
  transform: rotate(90deg);
`;

export default function BacktoTop() {
  const [show, setShow] = React.useState(false);

  React.useLayoutEffect(() => {
    window.pageYOffset > 200 ? setShow(true) : setShow(false);

    window.addEventListener("scroll", () => {
      window.pageYOffset > 200 ? setShow(true) : setShow(false);
    });
  });
  return (
    show && (
      <Wrapper
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <Icon />
      </Wrapper>
    )
  );
}
