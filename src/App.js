
import './App.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
function App() {
  return (
    <>
  
  
     <Router  basename='react'>
      <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Profile />} />
         {/* <Route path="/Admin"  element={<Admin />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/" element={<Reg />} /> */}
      </Routes>
    </Router> 
  
    </>
  );
}

export default App;
