import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {
  const nameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signup = () => {
    axios
      .post(`http://localhost:4040/auth/register`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <StyleForm>
      <input onChange={nameChangeHandler} value={username} type="text" />
      <input onChange={passChangeHandler} type="password" value={password} />
      <button onClick={signup} type="submit">Button</button>
    </StyleForm>
  );
};
const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export default LoginForm;
