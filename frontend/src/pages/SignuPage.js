import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import bg from "../assets/svgs/bg.svg";
import styled from "styled-components";
const SignUpPage = () => {
  return (
    <StyleSignUpPage>
      <Platform />
      <AuthenticationForm />
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
