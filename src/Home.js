import React from "react";
import './homv.css'
import { useNavigate } from "react-router-dom";


const Home=()=>{
    const nav=useNavigate();
    return(
    <>
    <div class="na">
        <button><span id="v">Vasantha</span><span id="k">kumar</span></button>
        <button>Home</button>
        <button>Project</button>
        <button>About</button>
        <button>Contuct</button>
        
        
        
    </div>
    <div className="hom">
    <div class="bod"><h4>HI THERE !</h4><span id="hi">I AM </span><span>VASANTH</span><h4>FULL STACK DEVELOPER</h4><button>SEE MY WORKS</button></div>
    <span class="bod1"></span>
    </div>
    <div class="proji" id="prok">
    <div className="Proj">
    <div className="Proj1">

 </div>
    </div>
    </div>
    </>
    )
}
export default Home;