aimport React from "react";
ddedimport styled from "styled-components";
import Section from "../../assets/jss/section";
import { StyledTitle, Title } from "../../components/Typography";
import XpCard from "../../components/Utilities/XpCard";
import { experience } from "../../components/variables";
import blob from "../../assets/images/experience-blob.svg";

const Wrapper = styled(Section)`
  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 100%;
    height: 100%;
    background-image: url(${blob});
    background-repeat: no-repeat;
    background-position: right center;
    padding-bottom: 0;
    left: 0;
    bottom: 30%;
  }

  @media all and (max-width: 993px) {
    &::before {
      display: none;
    }
  }
`;

export default function Experience() {
  return (
    <Wrapper padding="lg">
      <StyledTitle mb={20}>Journey so far</StyledTitle>
      <Title mb={130} size="md">
        My Experience
      </Title>

      {experience.map((item, indx) => (
        <XpCard key={indx.toString()} company={item.company} position={item.title} description={item.description} from={item.from} to={item.to} />
      ))}
    </Wrapper>
  );
}
