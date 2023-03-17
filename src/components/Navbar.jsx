import React from "react";
import { useGlobalContext } from "./contextApi";
import openicon from "../images/icons8-hamburger-32.png"
 
 const Navbar = () => {
    const {openSidebar, openSubmenu} = useGlobalContext();
    
    const displaySubmenu = (e) => {  
        const page = e.target.textContent
         const tempBtn = e.target.getBoundingClientRect();
         const center =(tempBtn.left + tempBtn.right)/2;
         const bottom = tempBtn.bottom - 3;
        openSubmenu(page, {center, bottom});
    };


    return (   
        <nav className="nav" >
            {/* onMouseOver={handleSubmenu} */}
            <div className="nav-center"> 
                <div className="nav-header">
                <h3 className="stripeName">Payzer</h3>
                    <button className="toggle-btn" onClick={openSidebar}>
                        <img src={openicon} alt='=>' height="40px" width='40px'/>
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                         <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
                    </li>
                </ul>
                <button className="btn signin-btn stripeName2">Sign in</button>
            </div>
        </nav>
    );
};
export default Navbar;