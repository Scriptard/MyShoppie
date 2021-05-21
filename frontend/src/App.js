import styled from "styled-components";
import LoginPage from "./pages/LoginPage";
import "./styles/globalstyle.css";
import SignUpPage from "./pages/SignuPage";
import { Switch, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
function App() {
  const location = useLocation();

  return (
  <AnimatePresence>
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
        <Layout>
          <SignUpPage />
        </Layout>
      </Route>

      <Route path="/signin">
        <Layout>
          <LoginPage />
        </Layout>
      </Route>
    </Switch>
  </AnimatePresence>
  );
}
const Layout = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default App;
