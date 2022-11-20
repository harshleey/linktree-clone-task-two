import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SubFeatures from "./pages/SubFeatures";
import { useState } from "react";
// import Contact from "./pages/Contact";




function App() {

  const [frequencyMode, setFrequencyMode] = useState(true)
    
    function toggleFrequencyMode() {
        // setFrequencyMode(prevMode => !prevMode)
        console.log(frequencyMode)
    }

  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub-features" element={<SubFeatures 
          frequencyMode={frequencyMode} 
          toggleFrequencyMode={toggleFrequencyMode}/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App

