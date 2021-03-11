import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BacktoTop from "./components/Utilities/BacktoTop";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
  const history = useHistory();

  return (
    <BrowserRouter history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <BacktoTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
