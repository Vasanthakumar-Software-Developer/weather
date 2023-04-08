import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
function App() {
  return (
    <>
    <BrowserRouter basename="/react">
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/Admin"  element={<Admin />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/" element={<Reg />} /> */}
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
