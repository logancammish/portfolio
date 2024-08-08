import '../App.css';
import logo from '../logo512.png';
import { useEffect, useState } from "react";
import { durationInMonths, durationInYears } from '@progress/kendo-date-math';
import { SocialIcon } from 'react-social-icons';
import Cookies from 'universal-cookie';
import { useSpring, animated, config } from "@react-spring/web";
const cookies = new Cookies();

function Portfolio() {  
  const [isActive, setIsActive] = useState(cookies.get('DM'));

  const { x } = useSpring({
    from: { x: 0 }, // Starting value of the animated property
    x: 1,
    config: { duration: 1000 }, // Configuration for the animation, specifying the duration
  });

  useEffect(() => {
    document.title = "Logan Cammish Portfolio";
    document.body.style.backgroundColor = !isActive ? 'rgb(249, 219, 181)' : '#000000';
  }, [])



  const handleClick = () => {
    setIsActive(current => !current);
    cookies.set('DM', !isActive, { path: '/' });
    console.log(cookies.get('DM')); 
    document.body.style.backgroundColor = isActive ? 'rgb(249, 219, 181)' : '#000000';
  };
  
  const [isHeld, setHeld] = useState(false);


  useEffect(() => {
    if (!isHeld) {
      return;
    }
  
    const timeoutId = window.setTimeout(() => {
      console.log("Timed out")
      setHeld(false);
    }, 250);
  
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isHeld]);

  const onMouseEnter = () => {
    setHeld(true);
  };
  
  return (
    <div style={{
      backgroundColor: isActive ? '#171717' : 'rgba(241, 238, 238, 0.791)',
      color: isActive ? 'white' : 'rgb(36, 33, 36)'
    }}  className="App">

    <animated.h1
        style={{
          color: isActive ? 'white' : 'rgb(36, 33, 36)',
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .to((x) => `scale(${x})`),
        }}
      >Logan Cammish      </animated.h1>


      <div style={{
      }}  className="container">
        <animated.p
        style={{
          color: isActive ? 'white' : 'rgb(36, 33, 36)',
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .to((x) => `scale(${x})`),
        }}
      >{durationInYears(new Date(2007, 12, 11), new Date())} years old | Portfolio      </animated.p>

        <br/>
        <br/>
        <img style={{
        borderColor: isActive ? 'white' : 'rgb(36, 33, 36)'
      }} src={logo} alt='Me'/>
      </div>
      <br/>

      <animated.button onMouseEnter={onMouseEnter} style={{
          rotate: isHeld ? -1 : 0,
          config: config.wobbly,
          backgroundColor: isActive ? '#00000' : '',
          color: isActive ? 'white' : '',
        }} onClick={handleClick}>dark mode toggle</animated.button>

      <hr style={{
        borderColor: isActive ? 'white' : 'black'
      }}/>
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
      <hr style={{
        borderColor: isActive ? 'white' : 'black'
      }}/>
      <br/> 

      <SocialIcon url="https://github.com/logancammish" />
        <SocialIcon url="https://www.facebook.com/profile.php?id=100075925360797" />
      <p className='italic text-sm'>Copyright (c) 2024 Logan Cammish</p>
      <br/>

      Send all inquires to logancammish@lcammish.xyz
    </div>
  );
  
}

export default Portfolio;