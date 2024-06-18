import '../App.css';
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Logan Cammish"
  }, [])

  return (
    <div>
      <h2>coming soon... for now check out:</h2> 
      <a style={{fontSize:"2em"}} href="./portfolio"> - my portfolio (on this website)</a>
      <br/>
      <a style={{fontSize:"2em"}} href="https://github.com/logancammish">- my github</a>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p style={{fontSize:"1em"}}>Copyright (c) Logan Cammish 2024</p>
    </div>
  );
}

export default Home;