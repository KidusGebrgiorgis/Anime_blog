import { useEffect, useRef, useState } from "react"
import { Tween } from "react-gsap";

function NewsRelease(){
    const cloneRef = useRef(null)
    const mainRef =  useRef(null)

    const [width, setwidth] = useState(100);
    useEffect(()=>{
        setwidth(window.innerWidth)
        const clone = cloneRef.current
        mainRef.current.appendChild(clone)
    },[width,cloneRef,mainRef]);
    
    return(
        <div style = {{backgroundColor: "black", color:"white", overflow:"hidden", width:"80%", margin:"0 auto", marginTop:"2%", marginBottom:"2%"}}>
            <div style = {{position:"relative", padding:"1%"}}>
                <div style ={{position:"absolute"}}>
                    <Tween to ={{x: `${width}px`}} duration = {10} ease = "none" repeat = "-1">
                        <div ref = {mainRef} >
                            <h1 ref = {cloneRef}>
                                new Anime Comming
                            </h1>
                        </div>
                    </Tween>
                </div>
                <div> 
                    <Tween to ={{x: `${width}px`}} duration = {8} ease = "none" repeat = "-1">
                    <div ref = {mainRef}>
                            <h1 ref = {cloneRef}>
                                New releases:
                            </h1>
                        </div>
                    </Tween>
                </div>
            </div>
        </div>
    )
}

export default NewsRelease;