const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world this is my first express code");
})

app.listen(port, ()=>{
    console.log(`Server is running on the port no ${port}`);
})