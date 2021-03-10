import styled from "styled-components";

const Hide = styled.div`
  width: 100%;
  height: 100%;
  @media all and (max-width: 576px) {
    display: ${(props) => (props.xs ? "none" : null)};
  }

  @media all and (max-width: 768px) {
    display: ${(props) => (props.sm ? "none" : null)};
  }

  @media all and (max-width: 992px) {
    display: ${(props) => (props.md ? "none" : null)};
  }

  @media all and (max-width: 1200px) {
    display: ${(props) => (props.lg ? "none" : null)};
  }

  @media all and (min-width: 1200px) {
    display: ${(props) => (props.xl ? "none" : null)};
  }
`;

export { Hide };
