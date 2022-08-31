// starting server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// first line gives you access to the express library by searching your node modules
// next create object
// adding json data to our file

const mockData = [{ name: "Manish" }, { name: "Kishan" }];

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "succesfully got users Nice",
    users: mockData,
  });
});
//In express words with colon in front of them in the url are treated as variables

app.get('/users/:id',async(req,res)=> {
    console.log(req.params.id);
    res.json({
        success: true,
        message:'got one user',
        user: req.params.id
    })
})

app.get('/login',(req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const mockUsername = "manish";
    const mockPassword = "supermanish";
    if(username===mockUsername && mockPassword===password){
        res.json({
            success:true,
            message: 'password and username matched succesfully',
            token : 'encrypted token goes here'
        })
    }else {
        res.json({
            success:false,
            message: 'password and username do not match'
        })
    }
})
app.listen(8000, async () => {
  console.log("Server is running ");
});


// sending data in request objects
// middleware 
