var express = require('express')
var bodyParser = require('body-parser')

const app = express();
const PORT = 3001;

var messages = [
        {name:"Kidus", message: "Yerr"},
        {name:"Tom", message:"Whats good my boy"}
]

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

 app.get("/message",(req,res) =>{
        res.send(messages)
 })
 app.post("/message", (req,res) =>{
        messages.push(req.body)
        res.sendStatus(200)
 })
 app.listen(PORT, ()=>
    console.log('listening on port', PORT));