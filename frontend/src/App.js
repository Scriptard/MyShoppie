import styled from "styled-components";
import LoginPage from "./pages/LoginPage";
import "./styles/globalstyle.css";

function App() {
  return (
    <Layout>
      <LoginPage/>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default App;
