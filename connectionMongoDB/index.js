const express = require('express')
const app = express();

const PORT = 3000;

app.get('/', (req, res)=>{
    console.log("Hey i am inside home page route handler")
    res.send("Hello ji, welcome to CodeWithAakash")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on the port : ${PORT}`)
})