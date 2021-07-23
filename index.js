var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

const app = express();
const PORT = 3001;
const dbURL = "mongodb+srv://kidusg:Password12..@chatapp.lqkh8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var http = require('http').Server(app)
var io = require('socket.io')(http)

var Message = mongoose.model("messages",{
       name: String,
       message: String,
       likes: Number
})

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

 app.get("/message",(req,res) =>{
        Message.find({},(err,message)=>{
              res.send(message)     
        })
 })
 app.post("/message", (req,res) =>{
        var message = new Message(req.body)
        
        message.save((err) =>{
              if(err) sendStatus(500)

              io.emit("message", req.body)
              res.sendStatus(200)
       })
 })

 io.on('connection', (socket) =>{
        console.log("user connected")
 })
 mongoose.connect(dbURL,{  
              useNewUrlParser: true,
              useFindAndModify: false,
              useUnifiedTopology: true,
              useCreateIndex: true },(err)=>{
        console.log("mongodb connected", err)
 })

 http.listen(PORT, ()=>
    console.log('listening on port', PORT));