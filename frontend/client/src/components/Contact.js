import "./CSS/Contact.css"
import image from "./images/background-image.jpg"
const Contact = () =>{
    return(
        <div className = "contact-container">
            <div className = "about-container">
                <div className = "about-info left">
                    <div className = "about">
                        <hr style ={{width:"20%", backgroundColor:"white"}}/>
                        <h1>Anime Beast</h1>
                        <p1>The author created the website to spread his love for anime and connect with other anime enthusiasts. 
                            The website was created to freely talk about your facorite anime topics and find new and intresting anime, manga , and light Novels</p1>
                        <br/>
                        <button className = "btn btn3 btn-outline-success right2" style ={{marginBottom:"3%"}}>Visit Instagram</button>
                        <br/>
                    </div>
                </div>
                <div className = "about-info">
                    <img className = "conImage" src = {image} alt="Contact"/>
                </div>
            </div>
            <br />
            <div className = "contact-information">
            <hr style ={{width:"10%", backgroundColor:"black", marginLeft:"15%"}}/>
            <h1 style = {{textAlign:"left", width:"80%", margin:"0 auto", marginLeft:"15%", fontSize:"50px"}}>Your Anime Needs</h1>
            <br/>
                <div className = "contact-column">
                    <h1>Jobs</h1>
                    <p1>Hiring Bloggers who show real love and passion for anime, manga, and light Novels</p1>
                </div>
                <div className = "contact-column">
                    <h1>Socials</h1>
                    <p1>Instagram</p1><br/>
                    <p1>TikTok</p1><br/>
                    <p1>Twitter</p1><br/>
                    <p1>Facebook</p1><br/>
                </div>
                <div className = "contact-column">
                    <h1>column1</h1>
                </div>
            </div>
            <div className = "contact-more">
                <div className= "con-more">
                    <h1>Find Out More About How We Work<span className = "mobile"><button className = "btn btn3 btn-outline-success">More Info</button></span></h1>
                </div>
                <div className= "con-more right2 mobile2">
                    <button className = "btn btn3 btn-outline-success">More Info</button>
                </div>
            </div>
            <br/>
        </div>
    )
}
export default Contact;