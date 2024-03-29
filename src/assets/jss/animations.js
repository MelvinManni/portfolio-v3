const { keyframes } = require("styled-components");

export const bounce = ({ start, stop }) => keyframes`
from {
   transform: translateY(${start === undefined ? "0px" : start + "px"});
 }
 to {
   transform: translateY(${stop === undefined ? "-15px" : stop + "px"});
 }
`;

export const slideDown = () => keyframes`
    from {
      height: 0;
    }
  
    to {
      height: 240px;
    }

`;

export const slideUp = () => keyframes`
    from {
      height: 240px;
    }

    to {
      height: 0;
    }
`;
