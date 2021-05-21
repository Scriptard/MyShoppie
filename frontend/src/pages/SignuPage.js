import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import styled from "styled-components";
import { signup } from "../services/authService";
const SignUpPage = () => {
  return (
    <StyleSignUpPage>
      <Platform title={"Welcome Back"} />
      <AuthenticationForm
        authButton={"Sign Up"}
        authTitle={"Create Account"}
        authFunction={signup}
      />
    </StyleSignUpPage>
  );
};

const StyleSignUpPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 500px;
  border: 1px solid grey;
`;
export default SignUpPage;
