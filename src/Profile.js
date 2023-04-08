import React from "react";
import { useNavigate } from "react-router-dom";
const Profile=()=>{
    const nav=useNavigate();
    <>
     <button onClick={()=>nav("/")}>Home</button>
    </>
}
export default Profile;