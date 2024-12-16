const express = require('express')
const app = express();
const port = 3000;

//import the routes in the application
const router = require('./routes/route')

// load the routes in the application
app.use('/api', router)

// app.get('/', (req, res) => {
//     res.send("Hello world this is my first express code");
// })

// Let's learn about requests

//get request
// app.get('/', (req, res) =>{
//     res.send("Goodnight mitron....")
// })

// app.post('/items', (req, res) =>{
//     res.send("Got a post request from the buddy")
// })

// app.put('/items/:id', (req, res) => {
//     res.send("Got a Put request");
// })
// app.delete('/items/:id', (req, res) => {
//     res.send("Got a delete request");
// })

app.listen(port, ()=>{
    console.log(`Server is running on the port no ${port}`);
})