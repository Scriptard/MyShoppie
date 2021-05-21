import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const AuthenticationForm = ({ authTitle, authButton, authFunction }) => {
  const nameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const authenticate = (e) => {
    e.preventDefault();
    authFunction(username, password);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyleForm>
      <h1>{authTitle}</h1>
      <div className="icons">
        <FontAwesomeIcon
          size="1x"
          style={{ color: "blue" }}
          className="icon"
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          style={{ color: "red" }}
          size="1x"
          className="icon"
          icon={faGoogle}
        />
        <FontAwesomeIcon
          size="1x"
          style={{ color: "#e12121" }}
          className="icon"
          icon={faInstagram}
        />
      </div>
      <p></p>
      <div className="testinput">
        <FontAwesomeIcon className="test" icon={faUser} />
        <input
          placeholder="Username"
          onChange={nameChangeHandler}
          value={username}
          type="text"
        ></input>
      </div>
      <div className="testinput">
        <FontAwesomeIcon className="test" icon={faKey} />
        <input
          placeholder="Password"
          onChange={passChangeHandler}
          type="password"
          value={password}
        />
      </div>
      <button onClick={authenticate} type="submit">
        {authButton}
      </button>
    </StyleForm>
  );
};
const StyleForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2.3;
  height: 500px;
  min-width: 350px;
  h1 {
    color: #3aaf9f;
  }
  .icons {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    color: #000000;
    background: #f4f8f7;
    width: 18px;
    border-radius: 50%;
    border: 1px solid gray;
    padding: 10px;
    &:hover {
      background-color: #3aaf9f;
      color: white;
      transition: all 0.4s ease;
    }
  }
  .testinput {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    background-color: #f4f8f7;
    padding-left: 10px;
  }
  .test {
    padding: -3px;
  }
  *:focus {
    outline: none;
  }
  input {
    background-color: #f4f8f7;
    border: none;
    display: block;
    height: 37px;
    width: 300px;
    margin-left: 10px;
    padding-left: 10px;
  }
  input::placeholder {
    color: grey;
    font-size: 1em;
  }
  button {
    height: 37px;
    width: 150px;
    border-radius: 25px;
    background-color: #3aaf9f;
    border: none;
    color: white;
    &:hover {
      background-color: white;
      border: 1px solid #3aaf9f;
      color: #3aaf9f;
      transition: all 0.5s ease;
    }
  }
`;
export default AuthenticationForm;
