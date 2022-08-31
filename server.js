// starting server
const express = require("express");
const app = express();

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
app.listen(8000, async () => {
  console.log("Server is running ");
});
