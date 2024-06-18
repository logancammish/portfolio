import '../App.css';
import logo from '../logo512.png';
import { useEffect, useState } from "react";
import { durationInMonths, durationInYears } from '@progress/kendo-date-math';
import { SocialIcon } from 'react-social-icons';

function Portfolio() {
  useEffect(() => {
    document.title = "Logan Cammish Portfolio"
  }, [])

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
    bodyBackground();
  };

  const bodyBackground = () => { 
    document.body.style.backgroundColor = isActive ? '' : '#000000';
  };

  return (
    <div style={{
      backgroundColor: isActive ? '#171717' : '',
      color: isActive ? 'white' : ''
    }}  className="App">

      <div style={{
        color: isActive ? 'white' : ''
      }}  className="container">
        <h1 style={{
          color: isActive ? 'white' : ''
        }}>Logan Cammish</h1>
        <p>{durationInYears(new Date(2007, 12, 11), new Date())} years old | Portfolio</p>
        <br/>
        <br/>
        <img src={logo} alt='Me'/>
      </div>
      <br/>

      <button  style={{
          backgroundColor: isActive ? '#00000' : '',
          color: isActive ? 'white' : '',
        }} onClick={handleClick}>dark mode toggle</button>

      <hr/>
      <div  style={{
        color: isActive ? 'white' : ''
      }}   className='information'>
        <br/>
        <h2 style={{
          color: isActive ? 'white' : ''
        }} className='underline'>Projects</h2>
        <ul>
          <li style={{
            color: isActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/benchmarks'>Benchmarkers - Rust</a></li>
          <li style={{
          color: isActive ? 'white' : ''
        }}>
          <a href='https://github.com/glorpglob/OS-Demo'>Operating System Simulation - Luau</a></li>
          <li style={{
          color: isActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/coffee-game'>Coffee Game - Rust</a></li>
          <li style={{
          color: isActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/cli-file-reader-remake'>CLI File Reader - Rust</a></li>
          <li style={{
          color: isActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/portfolio'>This website - ReactJS</a></li>
        </ul>
        <br/>
        <h2 style={{
          color: isActive ? 'white' : ''
        }} className='underline'>Experience</h2>
        <ul>
          <li style={{
          color: isActive ? 'white' : ''
        }} >{durationInYears(new Date(2019, 1, 1), new Date())}+ years with Lua</li>
          <li style={{
          color: isActive ? 'white' : ''
        }}>{durationInYears(new Date(2022, 1, 1), new Date())}+ years with Rust</li>
          <li style={{
          color: isActive ? 'white' : ''
        }}>{durationInMonths(new Date(2024, 3, 30), new Date())}+ months with ReactJS</li>
        </ul>
        <br/>
        <h2 className='underline' style={{
          color: isActive ? 'white' : ''
        }}>Qualifications</h2>
        <ul>
          <li style={{
          color: isActive ? 'white' : ''
        }}>NCEA Level 1</li>
        </ul>
        <br/>
        <br/>
        
      </div>
      <hr/>
      <br/> 

      <SocialIcon url="https://github.com/logancammish" />
        <SocialIcon url="https://www.facebook.com/profile.php?id=100075925360797" />
      <p className='italic text-sm'>Copyright (c) 2024 Logan Cammish</p>
      <br/>
    </div>
  );
  
}

export default Portfolio;