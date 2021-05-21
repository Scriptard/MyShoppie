import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import styled from "styled-components";
import {signin} from "../services/authService"
const LoginPage = () => {
  const title = "Hello, there";
  const authTitle="Login";
  const authButton="Login";

  return (
    <StyleLoginPage>
      <AuthenticationForm authTitle={authTitle} authButton={authButton} authFunction={signin}/>
      <Platform title={title} />
    </StyleLoginPage>
  );
};

const StyleLoginPage = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  width: 800px;
  border: 1px solid grey;
`;
export default LoginPage;
