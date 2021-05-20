import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import bg from "../assets/svgs/bg.svg";
import styled from "styled-components";
import {signin} from "../services/authService"
const LoginPage = () => {
  const title = "hellow there";
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
  height: 100vh;
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
`;
export default LoginPage;
