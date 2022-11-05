import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";




function App() {

  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  )
}

export default App

