import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import styled from "styled-components";
import { signup } from "../services/authService";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation/animation";
const SignUpPage = () => {
  const title="welcome back";
  const platformButton="SIGN IN";
  const authTitle="Create Account";
  const authButton="Signup";
  const route="/signin";

  return (
    <StyleSignUpPage variants={pageAnimation} animate='show' initial="hidden" exit="exit">
      <Platform title={title} platformButton={platformButton} route={route} />
      <AuthenticationForm
        authButton={authButton}
        authTitle={authTitle}
        authFunction={signup}
      />
    </StyleSignUpPage>
  );
};

const StyleSignUpPage = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 500px;
  border: 1px solid grey;
`;
export default SignUpPage;
