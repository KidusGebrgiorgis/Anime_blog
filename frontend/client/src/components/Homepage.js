import image1 from "./images/image1.gif"
import image2 from "./images/image2.gif"
import image3 from "./images/image3.gif"
import image4 from "./images/image4.gif"
import image5 from "./images/image5.gif"
import image6 from "./images/image6.gif"
import image7 from "./images/image7.gif"

import "./CSS/Homepage.css"
import NavPage from "./PageNav"

var images = [image1, image2, image3,image4,image5,image6,image7]
const BodyHomePage = ()=>{
    return(
        <div className = "body-box">
            <div className = "body-container">
                <label >Anime</label>
                <hr style = {{height:"5px"}}/>
                <a href = "#"><div className = "body-item">
                    <div style = {{position:"relative"}}>
                        <img className = "body-image" src ={images[0]} alt = "solo-leveling"/>
                        <div className= "overlay">
                            <p1 className = "overlay-padding">Upcoming</p1>
                            <p1>07/15/21</p1>
                        </div>
                    </div>
                    <div className ="body-text">
                        <h3>Solo-leveling</h3>    
                        <p2>Item1 description</p2>
                    </div>
                </div></a>
                <a href = "#"><div className = "body-item">
                <div style = {{position:"relative"}}>
                    <div style = {{position:"relative"}}>
                        <img className = "body-image" src ={images[1]} alt = "blue devil"/>
                        <div className= "overlay">
                            <p1 className = "overlay-padding">Upcoming</p1>
                            <p1>07/15/21</p1>
                        </div>
                    </div> 
                        <div className= "overlay">
                            <p1 className = "overlay-padding">Upcoming</p1>
                            <p1>07/15/21</p1>
                        </div>
                    </div>
                    <div className ="body-text" >
                        <h3>blue-devil</h3>
                        <p2>Item2 description</p2>
                    </div>
                </div></a>
                <a href = "#"><div className = "body-item">
                    <div style = {{position:"relative"}}>
                        <img className = "body-image" src ={images[2]} alt = "sword-art online"/>
                        <div className= "overlay">
                            <p1 className = "overlay-padding">Upcoming</p1>
                            <p1>07/15/21</p1>
                        </div>
                    </div>
                    <div className ="body-text">
                        <h3>Sword-art online</h3>
                        
                        <p2>sword-art online is a classic anime depicting a civilization that has entered the realm of virtual reality but tragedy occurs as they are trapped in the game. Once for fun a life and death situation insues. </p2>
                    </div>
                </div></a>
                <br/>
                <label>Manga</label>
                <hr style = {{height:"5px"}}/>
                <a href = "#"><div className = "body-item">
                    <img className = "body-image" src ={images[3]} alt = "sword-art online"/>
                    <div className ="body-text">
                        <h3>One Piece</h3>
                        <p2>item4 description </p2>
                    </div>
                </div></a>
                <a href = "#"><div className = "body-item">
                    <img className = "body-image height2" src ={images[4]} alt = "sword-art online"/>
                    <div className ="body-text">
                        <h3>JuJutsu kaisen</h3>
                        <p2>item5 description </p2>
                    </div>
                </div></a>
                <a href = "#"><div className = "body-item">
                    <img className = "body-image" src ={images[5]} alt = "sword-art online"/>
                    <div className ="body-text">
                        <h3>Naruto</h3>
                        <p2>sword-art online is a classic anime depicting a civilization that has entered the realm of virtual reality but tragedy occurs as they are trapped in the game. Once for fun a life and death situation insues. </p2>
                    </div>
                </div></a>
                <br/>
                <label>Light Novels</label>
                <hr style = {{height:"5px"}}/>
                <a href = "#"><div className = "body-item">
                    <img className = "body-image" src ={images[6]} alt = "sword-art online"/>
                    <div className ="body-text">
                        <h3>Haikyu</h3>
                        <p2>sword-art online is a classic anime depicting a civilization that has entered the realm of virtual reality but tragedy occurs as they are trapped in the game. Once for fun a life and death situation insues. </p2>
                    </div>
                </div></a>
                
            </div>
            <NavPage />
        </div>
    );
}

export default BodyHomePage;