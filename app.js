const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));


//Get call to return JSON that formats natural and unix date

app.get("/timestamp/:dateVal",(req, res, next)=>{
    //gets the data from the use endPoint
    var dateVal = req.params.dateVal;
    // formatting date in natural date view
    var dateFormatting ={
        year: 'numeric',
        month:'long',
        day: 'numeric'
    };
    if(isNaN(dateVal)){
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us",dateFormatting);
        var unixDate = new Date(dateVal).getTime()/1000;
    }else{
        var naturalDate = new Date(dateVal*1000);
        var unixDate = dateVal;
        naturalDate = naturalDate.toLocaleDateString("en-us",dateFormatting);
    }
    res.json({unix:unixDate, natural: naturalDate});
});

























app.listen(3000, function () {
    console.log("Server started on port 3000");
});
