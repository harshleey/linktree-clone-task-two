import {Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";




function App() {

  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App

