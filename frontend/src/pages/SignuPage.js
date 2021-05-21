import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import styled from "styled-components";
import { signup } from "../services/authService";
const SignUpPage = () => {
  const title="welcome back";
  const platformButton="SIGN IN";
  const authTitle="Create Account";
  const authButton="Signup";

  return (
    <StyleSignUpPage>
      <Platform title={title} platformButton={platformButton} />
      <AuthenticationForm
        authButton={authButton}
        authTitle={authTitle}
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
