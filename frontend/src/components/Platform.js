const { default: styled } = require("styled-components");

const Platform = ({title, platformButton}) => {
  // const sync1 = "SIGN UP";
  console.log(title);
  return (
    <Platforms>
      <div className="logo">this is logo</div>
      <div className="contents">
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto
        amet quo quidem a recusandae vel cum nulla officiis? Unde ex adipisci
        perferendis quasi at porro ratione, totam beatae voluptas?
      </p>

      <button>{platformButton}</button>
      </div>
      <div className="spacediv">

      </div>
    </Platforms>
  );
};
const Platforms = styled.div`
  border: 2px solid red;
  background-color:#3aaf9f;
  height:500px;
  width:300px;
  display:flex;
  flex-direction:column;
  /* align-items:center; */
  justify-content:space-between;

  .contents{
      text-align:center;
      color:white;
  }
  .logo{
      /* text-align:none; */
  }
  h1{
      color:white;
  }
  p{
      opacity:0.9;
  }
  button{
    height:37px;
    width:150px;
    border-radius:25px;
    background-color:#3aaf9f;
    margin-top:10px;
    border:none;
    color: white;
    border:1px solid white;
  }
`;

export default Platform;