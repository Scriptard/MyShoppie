import styled from "styled-components";
import logo from "../assets/img/scriptard.png";

const Platform = ({ title , platformButton}) => {
  // const sync1 = "SIGN IN";
  console.log(title);
  return (
    <Platforms>
      <img src={logo} className="logo" alt=""></img>
      <div className="contents">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto
          amet quo quidem a recusandae vel cum nulla officiis? Unde ex adipisci
          perferendis quasi at porro ratione, totam beatae voluptas?
        </p>

        <button>{platformButton}</button>
      </div>
      <div className="spacediv"></div>
    </Platforms>
  );
};
const Platforms = styled.div`
  background-color: #3aaf9f;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  min-width: 250px;
  .contents {
    text-align: center;
    color: white;
    margin: 0px 20px;
  }
  h1 {
    color: white;
  }
  p {
    opacity: 0.9;
  }
  button {
    height: 37px;
    width: 150px;
    border-radius: 25px;
    background-color: #3aaf9f;
    margin-top: 10px;
    border: none;
    color: white;
    border: 1px solid white;
    &:hover {
      background-color: white;
      border: 1px solid #3aaf9f;
      color: #3aaf9f;
      transition: all 0.5s ease;
    }
  }
  .logo {
    height: 45px;
    width: 45px;
  }
`;

export default Platform;
