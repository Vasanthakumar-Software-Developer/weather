import React from "react";
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const nav=useNavigate();
    <>
     <button onClick={()=>nav("/Profile")}>Profile</button>
    </>
}
export default Home;