const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const AuthRouter = require("./Routes/Authenticate");

const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);


require("./connectDb");

// on server port will be provided by infrastructure provider(production mode) and when developement
// (development mode) then 8000 port will be used.
const PORT = process.env.PORT || 8000;


// connecting the session storage with mongodb.
const store = new MongoDBStore({
    uri : process.env.MONGODB_CONNECTION_URL ,
    collection:"mySession" ,
    connectionOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000
      }
});
store.on("error" , function(error) {
    console.log(error);
});

// without these options for core , headers and cookies wont be reaching frontend.
app.use(cors({
    origin : "http://localhost:3000" , 
    credentials : true
}));


// adding middleware which will assing a session object with 
// each and every request.
app.use(session({
    secret : process.env.SECRET , 
    cookie : {
        secure : false , 
        maxAge : 1000 * 60 * 60 * 24 // 24 hours
    },
    store : store ,
    resave: false,// => if this is true then for every request a new session will be created even if its same user 
    saveUninitialized: false
}));




app.use(express.json());



app.use(AuthRouter);


app.listen(PORT , ()=>{
    console.log("server is running ...");
});
















// only for serving then react app from express.
// app.use(express.static("build"));
// app.use('/static', express.static(path.join(__dirname, "build")));
// app.get('*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, 'build')});
// });