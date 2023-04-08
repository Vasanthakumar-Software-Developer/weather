import React from "react";
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const nav=useNavigate();
    return(
    <>
     <h1>Home</h1>
     {alert("Home")}
     <button onClick={()=>nav("/Profile")}>Profile</button>
    </>
    )
}
export default Home;