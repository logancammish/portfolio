import '../App.css';
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Home() {
  const [isActive, setIsActive] = useState(cookies.get('DM'));

  useEffect(() => {
    document.title = "Logan Cammish"
    document.body.style.backgroundColor = !isActive ? '' : '#000000';
  }, [])
  
  const handleClick = () => {
    setIsActive(current => !current);
    cookies.set('DM', !isActive, { path: '/' });
    console.log(cookies.get('DM')); 
    document.body.style.backgroundColor = isActive ? '' : '#000000';
  };

  return (
    <div style={{
      backgroundColor: isActive ? '#171717' : 'rgba(241, 238, 238, 0.791)',
      color: isActive ? 'white' : 'rgb(36, 33, 36)'
    }} className="App">
      <h2 style={{
          color: isActive ? 'white' : 'rgb(36, 33, 36)',
          fontSize: '2em'
        }}>coming soon... for now check out:</h2> 
      <a style={{fontSize:"2em"}} href="./portfolio"> - my portfolio (on this website)</a>
      <br/>
      <a style={{fontSize:"2em"}} href="https://github.com/logancammish">- my github</a>
      <br/>
      <br/>
      <br/>
      <button  style={{
          backgroundColor: isActive ? 'black' : 'white',
          color: isActive ? 'white' : '',
        }} onClick={handleClick}>dark mode toggle</button>
      <br/>
      <br/>
      <p style={{fontSize:"1em"}}>Copyright (c) Logan Cammish 2024</p>
    </div>
  );
}

export default Home;