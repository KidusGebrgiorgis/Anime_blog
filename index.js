var express = require('express')
var bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

var http = require('http').Server(app)
var io = require('socket.io')(http)

var messages = [
        {name:"Kidus", message: "Yerr", like: 0},
        {name:"Tom", message:"Whats good my boy", like: 1}
]

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

 app.get("/message",(req,res) =>{
        res.send(messages)
 })
 app.post("/message", (req,res) =>{
        messages.push(req.body)
        io.emit("message", req.body)
        res.sendStatus(200)
 })

 io.on('connection', (socket) =>{
        console.log("user connected")
 })
 http.listen(PORT, ()=>
    console.log('listening on port', PORT));