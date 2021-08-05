import React from "react" ;
import { Link } from "react-router-dom";
import Marvel from "../images/marvelStud_logo.png" ;

const Header = () => {
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-between"}}>

        <Link to="/">
        <img style={{height:70}} alt="logo_png" src={Marvel} />
        </Link>
              <nav style={{display:"flex",width:"300px",justifyContent:"space-around"}}>
             
                   <Link to="/">Home / personnages</Link>
       
                  <Link to="/Comics">Comics</Link>
        
                  <Link to="/Favoris">Favoris</Link>
              </nav>
        
        </div>
        </>
    )
}



export default Header ;