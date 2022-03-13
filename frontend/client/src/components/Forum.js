import React, { useEffect, useState } from 'react'
import "./CSS/Forum.css"
function Forum(){
    const[messages, setMessages] = useState(null) 
    const[Name, setName] = useState("")
    const[mess, setMess] = useState("")

    useEffect(() =>{
    fetch("http://localhost:3001/message")
    .then(res => res.json())
    .then( (message) => setMessages(message.data))
    },[]);

    const handleSubmit= (e)=>{
        e.preventDefault();
        setName(document.getElementById("name").value)
        setMess(document.getElementById("message").value)
        var self = {
            name:Name,
            message:mess,
            likes: 0
        }
        fetch("http://localhost:3001/message",{
            method:'POST', self
        })
        .then(function(res){return res.json()})
        .then(function(body){console.log(body)})

    }
   return(
       <div >
            <div class = "message_container">
                <div class = "jumbotron">
                    <h1 class= "display-4"> Message</h1>
                    <form onSubmit = {handleSubmit}> 
                        <input class= "form-control" id ="name" placeholder="Name" on/>
                        <br/>
                        <textarea class= "form-control" id ="message" placeholder="Message"></textarea>
                        <br/>
                        <button id = "send" class ="btn btn4 btn-success" >send</button>
                    </form>
                </div>
            </div>
           <h1>Message list:</h1>
               <div className = "forum-info " style ={{width:"60%"}}>
                   {messages?
                   messages.map((mes)=>{
                       return(
                        <div className= "forum-block">
                            <div className= "forum-info wide2 forum-likes">
                                <p1>{mes.likes}</p1>
                            </div>
                            <div className = "forum-info wide">
                                <h1>{mes.name}</h1>
                                <p1>{mes.message}</p1>
                            </div>
                        </div>)})
                        : 
                   <p1>No messages</p1>}
               </div>
            <div className = "forum-info wide3 right" style = {{border:"1px solid black", marginRight:"2%"}}>
                <h1> popular Forums</h1>
            </div>
           <br/>
           <br/>
       </div>
   )

}
export default Forum;