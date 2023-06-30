import { Redirect } from "react-router-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import styledComponents from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BacktoTop from "./components/Utilities/BacktoTop";
import Admin from "./pages/Admin";
import AddProject from "./pages/Admin/AddProject";
import EditProject from "./pages/Admin/EditProject";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

const Main = styledComponents.main`
  max-width: 2400px;
  margin: 0 auto;

`;

function App() {
  const history = useHistory();

  return (
    <>
      <BrowserRouter history={history}>
        <Navbar />
        <div>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Articles} />
              {/* <Route exact path="/experience" component={Experience} /> */}
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/admin/project" component={Admin} />
              <Route exact path="/admin/project/add" component={AddProject} />
              <Route exact path="/admin/project/edit/:id" component={EditProject} />
              <Redirect path="/admin" to="/admin/project" />
            </Switch>
          </Main>
        </div>
        <BacktoTop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
