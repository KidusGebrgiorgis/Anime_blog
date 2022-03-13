var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cors = require('cors')

const app = express();
const PORT = 3001;
const dbURL = "mongodb+srv://kidusg:Password12..@chatapp.lqkh8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var http = require('http').Server(app)
var io = require('socket.io')(http)
var MongoClient = require("mongodb").MongoClient;

var Message = mongoose.model("messages",{
       name: String,
       message: String,     
       likes: Number 
})

app.use(cors())
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.route("/message")
       .get((req,res) =>{
              Message.find({},(err,message)=>{
                     res.status(200).json({
                            data: message
                     })     
              })
       })
       .post((req,res)=>{
              var message = new Message(req.body)

              message.save((err) =>{
              if(err) sendStatus(500)

              io.emit("message", req.body)
              res.sendStatus(200)
       })
 })

 app.use("/message/messages",express.static("message.html"))
 
 app.get("/message/:name",(req,res)=>{
        var user = String(req.params.name)
        Message.find({name:user},(err,message)=>{
               if(err) throw err
              res.send(message)      
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
 /*app.put("/message",(req,res) =>{
        var message = new Message(req.body)
        
        message.update((err) =>{
               if(err) throw err
               
               message.like = Number(parseInt(message.like) + 1)
        })

 })
 *     
 /*MongoClient.connect(dbURL,(err,db)=>{
        if(err) throw err
        var dbo = db.db("chatApp")
        dbo.collection("message").updateOne()     
 })*/

 http.listen(PORT, ()=>
    console.log('listening on port', PORT));