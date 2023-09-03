import React, { useEffect } from 'react'
import './App.css';
import Portfolio from './Portfolio/Portfolio'

const App = () => {
  useEffect(()=>{
    alert("I can do better if provided a design of layout");
  },[])
  return (
    <div>
      <Portfolio/>
    </div>
  )
}

export default App