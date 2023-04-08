import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.js"
const Profile=()=>{
    const nav=useNavigate();
    return(
    <>
    <h1>Profile</h1>
     <button onClick={()=>nav("/")}>Home</button>
    </>
    )
}
export default Profile;