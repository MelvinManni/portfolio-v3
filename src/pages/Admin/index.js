import React from "react";
import { GridCol, GridContainer } from "../../assets/jss/Flexgrid";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import { Wrapper } from "../../components/Contact";
import { StyledTitle } from "../../components/Typography";
import axios from "axios";
import { API_ROUTE } from "./../../config";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DataTable from "react-data-table-component";
import styledComponents from "styled-components";
import { formatDateShort } from "../../utils";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

const IconBtn = styledComponents.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 18px
`;

const Card = styledComponents.div`
  padding: 20px;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  background: #fff
`;

export default function AddProject() {
  const [projects, setProjects] = React.useState([]);
  const history = useHistory();

  const [modal, setModal] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "",
    type: "",
  });
  const [loading, setLoading] = React.useState(false);

  const getAllProjects = async () => {
    setLoading(true);
    try {
      const {
        data: {
          data: { projects },
        },
      } = await axios.get(API_ROUTE + "/project");
      setProjects(projects || []);
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
      }, 1000);
    }
  };
  const deleteProject = async (id) => {
    try {
      await axios.delete(API_ROUTE + "/project/" + id);
      await getAllProjects()
    } catch (error) {
      if (error?.response) {
        let message = error?.response?.data?.message;
        setAlert({ message, type: "error" });
      } else {
        setAlert({ message: "An Error occured", type: "error" });
      }
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id?.substring(0, 4) + "..." + row._id?.substring(row._id?.length - 3),
    },
    {
      name: "Date",
      selector: (row) => formatDateShort(row.createdAt),
    },

    {
      name: "Title",
      selector: (row) => row.title?.substring(0, 30) + (row.title?.length > 30 ? "..." : ""),
    },

    {
      name: "Link",
      cell: (row) => (
        <a rel="noreferrer" href={row.link} target="_blank">
          {row.link?.substring(0, 30) + (row.link?.length > 30 ? "..." : "")}
        </a>
      ),
    },
    {
      name: "Github",
      cell: (row) => (
        <a rel="noreferrer" href={row.github} target="_blank">
          {row.github?.substring(0, 30) + (row.github?.length > 30 ? "..." : "")}
        </a>
      ),
    },

    {
      name: "Cover",
      cell: (row) => (
        <a rel="noreferrer" href={row.img} target="_blank">
          {row.img?.substring(0, 30) + (row.img?.length > 30 ? "..." : "")}
        </a>
      ),
    },
    {
      name: "Action",
      right: true,
      cell: (row) => (
        <GridContainer justify="flex-end" align="center">
          <Link to={"/admin/project/edit/" + row._id}>
            <IconBtn style={{ marginRight: 14 }}>
              <FaEdit fill="#269ce3" />
            </IconBtn>
          </Link>
          <IconBtn onClick={() => deleteProject(row._id)}>
            <FaTrashAlt fill="#df4759" />
          </IconBtn>
        </GridContainer>
      ),
    },
  ];

  React.useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <Wrapper padding="lg">
      <GridContainer justify="space-between">
        <StyledTitle primary mb={45}>
          Projects
        </StyledTitle>
        <Button onClick={() => history.push("/admin/project/add")}>Add Project</Button>
      </GridContainer>
      <GridContainer justify="center">
        <GridCol md={12}>
          <Card>
            {loading ? (
              <GridContainer justify="center">
                <Spinner width="50px" height="50px" />
              </GridContainer>
            ) : (
              <DataTable responsive pagination columns={columns} data={projects}></DataTable>
            )}
          </Card>
        </GridCol>
      </GridContainer>
      {/* Alert Modal */}
      <Alert open={modal} setOpen={setModal} type={alert.type} message={alert.message} />
    </Wrapper>
  );
}
