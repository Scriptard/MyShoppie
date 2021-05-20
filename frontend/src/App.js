import styled from "styled-components";
// import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignuPage";
import "./styles/globalstyle.css";

function App() {
  return (
    <Layout>
      <SignUpPage/>
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
