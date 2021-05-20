import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faKey} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faGoogle,faInstagram,} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import styled from "styled-components";


const AuthenticationForm = ({authTitle, authButton, authFunction}) => {
  const nameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const authenticate=(e)=>{
    e.preventDefault();
    authFunction(username,password)
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <StyleForm>
      {/* <div className="styleform_container"> */}
      <h1>{authTitle}</h1>
      <div className="icons">
      <FontAwesomeIcon size="2x" className="ico" icon={faFacebookF}/>
      <FontAwesomeIcon size="2x" className="ico" icon={faGoogle}/>
      <FontAwesomeIcon size="2x" className="ico" icon={faInstagram}/>
      </div>
      <p>or use your email for registration</p>
      <div className="testinput">
        <FontAwesomeIcon className="test" icon={faUser}/>
      <input placeholder="Username" onChange={nameChangeHandler} value={username} type="text" >
        
      </input>
      </div>
      <div className="testinput">
      <FontAwesomeIcon className="test" icon={faKey}/>
      <input placeholder="Password" onChange={passChangeHandler} type="password" value={password} />
      </div>
      <button onClick={authenticate} type="submit">{authButton}</button>
      {/* </div> */}
    </StyleForm>
  );
};
const StyleForm = styled.div`
  /* border:2px solid green; */
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  height:100vh;
 
  border:2px solid red;
  height:500px;
  width:400px;
  /* margin:0 auto; */
  display: flex;
  flex-direction: column;
  align-items:center;

  h1{
    color:#3aaf9f;
  }
   .icons{
     /* border:2px solid red; */
     width:30%;
     display:flex;
     align-items:center;
     justify-content:space-between;
   }
   .ico{
     color:#000000;
     background:#f4f8f7;
     border-radius:50%;
   }
  .testinput{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:1.2rem;
    background-color:#f4f8f7;
  }
  .test{
    padding:-3px;
  }
  *:focus{
    outline:none;
  }
  input{
    background-color:#f4f8f7;
    border:none;
    display:block;
    height:37px;
    width:300px;

    margin-left:10px;
  }
  input::placeholder{
    color:grey;
    font-size:1em;
  }
  button{
    height:37px;
    width:150px;
    border-radius:25px;
    background-color:#3aaf9f;
   
    border:none;
    color: white;
  }
  
`;
export default AuthenticationForm;
