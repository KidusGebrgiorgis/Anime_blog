import "./CSS/Header.css"
import Nav from "./Nav.js"

function Header(){
   // const logo = require("./AnimeBeast.png");
    return(
        <div className ="header-box media-center" >
            <div className ="header-container ">
                <div className ="header-items">
                    <h1 className = "title">Anime Beast</h1>
                </div>
                <div className ="header-items right mobile2">
                    <form className = "Header-search">
                        <input className = "header-searchbar"placeholder = "Search"/>
                        <button className = "btn btn3 btn-outline-success">Search</button>
                    </form>
                </div>
                <div className ="header-items right mobile2">
                <Nav />
                </div>
            </div>
        </div>
    );
}

export default Header;