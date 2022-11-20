import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SubFeatures from "./pages/SubFeatures";
import { useState } from "react";
// import Contact from "./pages/Contact";




function App() {


  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub-features" element={<SubFeatures 
          />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App

