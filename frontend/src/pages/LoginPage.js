import Platform from "../components/Platform";
import AuthenticationForm from "../components/Form";
import styled from "styled-components";
import {signin} from "../services/authService"
import { motion } from "framer-motion";
import { pageAnimation } from "../animation/animation";
import {Link, Route} from "react-router-dom";
const LoginPage = () => {
  const title = "Hello, There";
  const authTitle="Login";
  const authButton="Login";
  const platformButton="SIGN UP";
  const route="/";
  
  return (
    <StyleLoginPage variants={pageAnimation} animate='show' initial="hidden" exit="exit">
      <AuthenticationForm authTitle={authTitle} authButton={authButton} authFunction={signin}/>
      <Platform title={title} platformButton={platformButton} route={route}/>
    </StyleLoginPage>
  );
};
//styleloginpage is now made motion.div itself.
const StyleLoginPage = styled(motion.div)`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  width: 800px;
  border: 1px solid grey;
`;
export default LoginPage;
