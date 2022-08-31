// starting server
const express = require('express');
const app = express();


// first line gives you access to the express library by searching your node modules 
// next create object
// adding json data to our file 

const mockData = [
    {name:'Manish'},
    {name:'Kishan'}
]

app.get('/',(req,res)=> {
    res.json({
        success:true,
        message: 'succesfully got users Nice',
        users: mockData
    })
})
app.listen(8000,async()=> {
    console.log("Server is running ")
})