import express from 'express'

const app = express();
const PORT = 3001;

app.get('/', (req, res) =>
        res.send('The app is functioning on port ${PORT}'));
        
app.listen(PORT, ()=>
    console.log('listening on port', PORT));
 