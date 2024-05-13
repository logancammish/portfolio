import '../App.css';
import logo from '../logo512.png'
import { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "Logan Cammish Portfolio"
  }, [])

  return (
    <div className="App">
      <h1 className='font-extrabold'>Logan Cammish</h1>
      <p>Portfolio</p> 
      <br/>
      <img className='flex justify-center items-center object-center object-scale-down h-56 w-56' src={logo} alt='Me'/>
      <br/>
      <hr/>
      <br/>
      <h2 className='underline'>Projects</h2>
      <ul>
        <li><a href='https://google.com'>thing1</a></li>
        <li><a href='https://google.com'>thing2</a></li>
      </ul>
      <br/>
      <h2 className='underline'>Experience</h2>
      <ul>
        <li>thing1</li>
        <li>thing2</li>
      </ul>
      <br/> 
      <hr/>
      <br/> 
      <p className='italic text-sm'>Copyright (c) 2024 Logan Cammish</p>
    </div>
  );
  
}

export default Home;
