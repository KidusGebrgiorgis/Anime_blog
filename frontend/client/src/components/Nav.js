import { NavLink } from "react-router-dom"
import "./CSS/Nav.css"
function Nav (){
    return(
            <div style ={{float:"right", marginRight:"20px"}}>
                <ul>
                    <li><NavLink to = "/Login">Login</NavLink></li>
                    <li><NavLink to = "/"  >Home</NavLink></li>
                    <li> <NavLink to = "/Forum">Froum </NavLink></li>
                    <li><NavLink to = "/Contact">Contact </NavLink></li>
                </ul>
            </div>
    );
}

export default Nav;