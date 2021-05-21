import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import bg from "../assets/svgs/bg.svg";
import styled from "styled-components";
const SignUpPage = () => {
  const title="welcome back";
  const platformButton="SIGN IN";
  const authTitle="Create Account";
  const authButton="Signup";

  return (
    <StyleSignUpPage>
      <Platform title={title} platformButton={platformButton}/>
      <AuthenticationForm authTitle={authTitle} authButton={authButton}/>
    </StyleSignUpPage>
  );
};

const StyleSignUpPage = styled.div`
  height: 100vh;
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
`;
export default SignUpPage;
