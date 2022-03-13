import "./CSS/Footer.css"
const Footer = () =>{
    return(
        <div className = "footer-box">
            <div className = "footer-container">
                <div className = "footer">
                    <div className = "footer-column">
                        <h1>Animes</h1>
                        <ul>
                            <li>Upcoming</li>
                            <li>updated</li>
                            <li>Favorites</li>
                            <li>Genres</li>
                        </ul>
                    </div>
                    <div className = "footer-column">
                        <h1>Social</h1>
                        <ul>
                            <li>Instagram</li>
                            <li>TikTok</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div className = "footer-column">
                        <h1>Contact Info</h1>
                        <ul>
                            <li>Email: KidusGebrg@gmail.com</li>
                            <li>PhoneNumber: 240-898-5315</li>
                        </ul>
                    </div>
                    <div className = "footer-column search right2">
                        <h1>Website Search</h1>
                        <ul>
                            <form className = "Header-search">
                                <input className = "footer-searchbar"placeholder = "Search"/>
                                <button className = "btn btn-outline-success">Search</button>
                            </form>
                        </ul>
                    </div>
                    <div className = "footer-copyright"> Copyright© 2021 Anime Beast. All rights reserved. </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;