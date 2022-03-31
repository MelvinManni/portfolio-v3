import React from "react";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import { ButtonWrapper, Wrapper } from "../../components/Contact";
import { InputField, TextArea } from "../../components/Input";
import { StyledTitle } from "../../components/Typography";
import axios from "axios";
import { API_ROUTE } from "./../../config";
import { Link } from "react-router-dom";

export default function AddProject() {
  const [state, setState] = React.useState({
    title: "",
    link: "",
    img: "",
    github: "",
    description: "",
  });
  const [modal, setModal] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "",
    type: "",
  });
  const [loading, setLoading] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        data: { message },
      } = await axios.post(API_ROUTE + "/project", state);
      setAlert({ message, type: "success" });
    } catch (error) {
      if (error?.response) {
        let message = error?.response?.data?.message;
        setAlert({ message, type: "error" });
      } else {
        setAlert({ message: "An Error occured", type: "error" });
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
        setState({
          title: "",
          link: "",
          img: "",
          github: "",
          description: "",
        })
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Wrapper bg="black">
      <Link to="/admin/project">
        <Button reverse noIcon style={{ marginBottom: 40, paddingRight: 20 }}>
          Go Back
        </Button>
      </Link>

      <GridContainer justify="center">
        <GridCol md={10} lg={8} xl={6}>
          <StyledTitle primary mb={45}>
            Add New Project
          </StyledTitle>

          <form onSubmit={handleSubmit}>
            <InputField required type="text" name="title" value={state.title} onChange={handleChange} placeholder="Project Title" />
            <InputField required type="text" name="img" value={state.img} onChange={handleChange} placeholder="Cover Image" />
            <InputField type="text" name="link" value={state.link} onChange={handleChange} placeholder="Live Link" />
            <InputField type="text" name="github" value={state.github} onChange={handleChange} placeholder="Github Link" />
            <TextArea type="text" name="description" value={state.description} onChange={handleChange} rows={9} placeholder="Description" />
            <ButtonWrapper>
              <Button loading={loading} reverse>
                Add Project{" "}
              </Button>
            </ButtonWrapper>
          </form>
        </GridCol>
      </GridContainer>

      {/* Alert Modal */}
      <Alert open={modal} setOpen={setModal} type={alert.type} message={alert.message} />
    </Wrapper>
  );
}
