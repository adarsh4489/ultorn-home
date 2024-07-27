import React from 'react'
import Navbar from './Components/Navbar'
import Generator from './Components/Generator'
import Textgenerator from './Components/Textgenerator'
import './App.css'
// import Imagegenerator from './Components/Imagegenerator'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Generator></Generator>
      <Textgenerator></Textgenerator>

      {/* <Imagegenerator></Imagegenerator> */}

    </div>
  )
}




export default App
