import axios from "axios";
import React from "react";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import Section from "../../assets/jss/section";
import Alert from "../../components/Alert";
import Spinner from "../../components/Spinner";
import { StyledTitle, Title } from "../../components/Typography";
import ProjectCard from "../../components/Utilities/ProjectCard";
import { projects as projs } from "../../components/variables";
import { API_ROUTE } from "../../config";

export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "",
    type: "",
  });
  const [loading, setLoading] = React.useState(false);

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const {
        data: {
          data: { projects },
        },
      } = await axios.get(API_ROUTE + "/project/case-studies");

      setProjects(projects || []);
    } catch (error) {
      if (error?.response) {
        let message = error?.response?.data?.message;
        setAlert({ message, type: "error" });
      } else {
        setAlert({ message: "An Error occured", type: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCaseStudies();
  }, []);
  return (
    <Section padding="lg">
      <StyledTitle mb={5}>What I’ve done</StyledTitle>
      <Title mb={100}>Case Studies</Title>
      <GridContainer>
        {loading ? (
          <GridContainer style={{ width: "100%" }} justify="center">
            <Spinner width="80px" height="80px" />
          </GridContainer>
        ) : projects.length > 0 ? (
          projects.map((item, indx) => (
            <GridCol style={{ marginBottom: 20 }} key={indx.toString()} col={12} md={6} lg={4}>
              <ProjectCard img={item.img} title={item.title} github={item.github} link={item.link} description={item.description} />
            </GridCol>
          ))
        ) : (
          projs.map((item, indx) => (
            <GridCol style={{ marginBottom: 20 }} key={indx.toString()} col={12} md={6} lg={4}>
              <ProjectCard img={item.img} title={item.title} github={item.github} link={item.link} description={item.description} />
            </GridCol>
          ))
        )}
      </GridContainer>

      {/* Alert Modal */}
      <Alert open={modal} setOpen={setModal} type={alert.type} message={alert.message} />
    </Section>
  );
}
