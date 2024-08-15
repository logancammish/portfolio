import '../App.css';
import logo from '../logo512.png';
import { useEffect, useState } from "react";
import { durationInMonths, durationInYears } from '@progress/kendo-date-math';
import { SocialIcon } from 'react-social-icons';
import Cookies from 'universal-cookie';
import { useSpring, animated } from "@react-spring/web";
const cookies = new Cookies();

function Portfolio() {  
  const [isDarkModeActive, setDarkModeActive] = useState(cookies.get('DM') || false);

  const { nameBounceSpring } = useSpring({
    from: { nameBounceSpring: 0 }, 
    nameBounceSpring: 1,
    config: { duration: 1000 }, 
  });

  const { dmButtonSpring } = useSpring({
    from: { dmButtonSpring: 0 }, 
    dmButtonSpring: 1,
    config: { duration: 1000 }, 
  });

  useEffect(() => {
    document.title = "Logan Cammish Portfolio";
    document.body.style.backgroundColor = !isDarkModeActive ? 'rgb(249, 219, 181)' : '#000000';
  }, [isDarkModeActive])



  const handleClick = () => {
    setDarkModeActive(current => !current);
    cookies.set('DM', !isDarkModeActive, { path: '/' });
    console.log(cookies.get('DM')); 
    document.body.style.backgroundColor = isDarkModeActive ? 'rgb(249, 219, 181)' : '#000000';
  };
  
  const [isHeld, setHeld] = useState(false);

  useEffect(() => {
    if (!isHeld) {
      return;
    }
  
    const timeoutId = window.setTimeout(() => {
      console.log("Timed out")
      setHeld(false);
    }, 500);
  
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isHeld]);

  const onMouseEnter = () => {
    setHeld(true);
  };
  
  return (
    <div style={{
      backgroundColor: isDarkModeActive ? '#171717' : 'rgba(241, 238, 238, 0.791)',
      color: isDarkModeActive ? 'white' : 'rgb(36, 33, 36)'
    }}  className="App">

    <animated.h1
        style={{
          color: isDarkModeActive ? 'white' : 'rgb(36, 33, 36)',
          opacity: nameBounceSpring.to({ range: [0, 1], output: [0.3, 1] }),
          transform: nameBounceSpring
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .to((nameBounceSpring) => `scale(${nameBounceSpring})`),
        }}
      >Logan Cammish      </animated.h1>


      <div style={{
      }}  className="container">
        <animated.p
        style={{
          color: isDarkModeActive ? 'white' : 'rgb(36, 33, 36)',
          opacity: nameBounceSpring.to({ range: [0, 1], output: [0.3, 1] }),
          transform: nameBounceSpring
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .to((nameBounceSpring) => `scale(${nameBounceSpring})`),
        }}
      >{durationInYears(new Date(2007, 12, 11), new Date())} years old | Portfolio      </animated.p>

        <br/>
        <br/>
        <img style={{
        borderColor: isDarkModeActive ? 'white' : 'rgb(36, 33, 36)'
      }} src={logo} alt='Me'/>
      </div>
      <br/>

      <animated.button onMouseEnter={onMouseEnter} style={{
          borderRadius: "5%",
          backgroundColor: isDarkModeActive ? '#1c1c1c' : '#e6dfdf',
          color: isDarkModeActive ? 'white' : '',
          rotate: isHeld ? dmButtonSpring.to({ range: [0, 0.1, 0.5, 1], output: [0, 0.1, 0.5, 1] }) : 0,
        }} onClick={handleClick}>dark mode toggle</animated.button>

        <br></br>
      <hr style={{
        borderColor: isDarkModeActive ? 'white' : 'black'
      }}/>
      <div  style={{
        color: isDarkModeActive ? 'white' : ''
      }}   className='information'>
        <br/>
        <h2 style={{
          color: isDarkModeActive ? 'white' : ''
        }} className='underline'>Projects</h2>
        <ul>
          <li style={{
            color: isDarkModeActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/benchmarks'>Benchmarkers - Rust</a></li>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }}>
          <a href='https://github.com/glorpglob/OS-Demo'>Operating System Simulation - Luau</a></li>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/coffee-game'>Coffee Game - Rust</a></li>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/cli-file-reader-remake'>CLI File Reader - Rust</a></li>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }}><a href='https://github.com/logancammish/portfolio'>This website - ReactJS</a></li>
        </ul>
        <br/>
        <h2 style={{
          color: isDarkModeActive ? 'white' : ''
        }} className='underline'>Experience</h2>
        <ul>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }} >{durationInYears(new Date(2019, 1, 1), new Date())}+ years with Lua</li>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }}>{durationInYears(new Date(2022, 1, 1), new Date())}+ years with Rust</li>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }}>{durationInMonths(new Date(2024, 3, 30), new Date())}+ months with ReactJS</li>
        </ul>
        <br/>
        <h2 className='underline' style={{
          color: isDarkModeActive ? 'white' : ''
        }}>Qualifications</h2>
        <ul>
          <li style={{
          color: isDarkModeActive ? 'white' : ''
        }}>NCEA Level 1</li>
        </ul>
        <br/>
        <br/>
        
      </div>
      <hr style={{
        borderColor: isDarkModeActive ? 'white' : 'black'
      }}/>
      <br/> 

      <SocialIcon  url="https://github.com/logancammish" />
        <SocialIcon style={{
        marginLeft: "4px"
      }}
        url="https://www.facebook.com/profile.php?id=100075925360797" />
      <p className='italic text-sm'>Copyright (c) 2024 Logan Cammish</p>
      <br/>

      Send all inquires to logancammish@lcammish.xyz
    </div>
  );
  
}

export default Portfolio;