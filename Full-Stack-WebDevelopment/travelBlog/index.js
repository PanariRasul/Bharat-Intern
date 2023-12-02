var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));
app.post("/contact", (request, res) => {
    var firstname = request.body.firstname;
    var lastname = request.body.lastname;
    var email = request.body.email;
    var subject = request.body.subject;
    var discription = request.body.place_desc;

    

    var data = {
        "firstname":firstname,
        "lastname":lastname,
        "email":email,
        "subject":subject,
        "discription":discription
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) throw err;
        alert("AAAAAAAAAAAAA")
    });
    return res.redirect('submit.html');

})

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');

}).listen(3000);

console.log("Listening on Port 3000");


// var form = document.getElementById("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault()
//     alert("From Submited Successfully");
// })














// const bodyParser = require("body-parser");
// var express = require("express");
// var mongoose = require("mongoose");
// const { log } = require("console");
// const { request } = require("http");



// const app = express()

// app.use(bodyParser.json())
// app.use(express.static("public"))
// app.use(bodyParser.urlencoded({
//     extended:true
// }))



// // connect database

// mongoose.connect("mongodb://0.0.0.0:27017/mydb", {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })


// var db = mongoose.connection;

// // check connection

// db.on("error", () => console.log("error in connection database"));
// db.once("open", () => console.log("connected to database"));



// // checking page
// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin":'*'
//     })

//     return res.redirect("index.html");
// }).listen(3000);




// app.post("/contact", (request,response) =>{
//     try {
//         //get data from index.html

//         var firstname = request.body.firstname;
//         var lastname = request.body.lastname;
//         var email = request.body.email;
//         var subject = request.body.subject;
//         var discription = request.body.place_desc;

//         console.log( `${firstname}, ${lastname},${email},${subject} & ${discription}`);
//     }catch(error){
//         console.log("invalid information");
//     }


//     // create a object

//     var data = {
//         "firstname":firstname,
//         "lastname":lastname,
//         "email":email,
//         "subject":subject,
//         "discription":discription
//     }


//     db.collection('users').insertOne(data, (err, collection) => {
//         if (err) throw err;
//         console.log("Record insert Successfully");
//     });


//     return res.redirect("submit.html");

    
// });














// // tQg505g9aTPeRpsP


// // mongodb+srv://rasulpanari01:<password>@cluster0.k8ceudw.mongodb.net/