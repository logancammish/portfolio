import '../App.css';
import logo from '../logo512.png'
import { useEffect } from "react"
import ReactDOM from "react-dom"
import { durationInYears } from '@progress/kendo-date-math';
import { SocialIcon } from 'react-social-icons'

function Home() {
  useEffect(() => {
    document.title = "Logan Cammish Portfolio"
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>Logan Cammish</h1>
        <p>{durationInYears(new Date(2007, 12, 11), new Date())} years old | Portfolio</p>
        <br/>
        <br/>
        <img src={logo} alt='Me'/>
      </div>
      <br/>
      <hr/>
      <div className='information'>
        <br/>
        <h2 className='underline'>Projects</h2>
        <ul>
          <li><a href='https://github.com/logancammish/benchmarks'>Benchmarkers - Rust</a></li>
          <li><a href='https://github.com/logancammish/cli-file-reader-remake'>CLI File Reader - Rust</a></li>
          <li><a href='https://github.com/logancammish/portfolio'>This website - ReactJS</a></li>
        </ul>
        <br/>
        <h2 className='underline'>Experience</h2>
        <ul>
          <li>{durationInYears(new Date(2019, 1, 1), new Date())}+ years with Lua</li>
          <li>{durationInYears(new Date(2022, 1, 1), new Date())}+ years with Rust</li>
        </ul>
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

export default Home;
