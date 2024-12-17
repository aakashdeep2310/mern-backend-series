const express = require('express');
const app = express();

const port = 3000;

/// loading middleware into the app
app.use(express.json());


//adding self defined middleware into the app
const loggingMiddleware = function(req, res, next) {
    console.log("Logging krra hun")
    next();
} 
app.use(loggingMiddleware)


const authMiddleware = function(req, res, next){
    console.log("Auth krr rha hu")
    next();
}
app.use(authMiddleware)


const validationMiddleware = function(req, res, next){
    console.log("Guys ye validation middleware hai")
    next();
}
app.use(validationMiddleware)

//this is route handler
app.get('/', (req, res) => {
    console.log("Hello mai route handler hoon")
    console.log(req.body); 
    res.send("Hello mitron Getting a get request")
})

app.listen(port, () =>{
    console.log("Hey Guys Server is running fine")
})