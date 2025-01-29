const express  = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.send("Welcome to my npm server on a raspberry pi!");
});

app.listen(4545, function(){
	console.log("App listening on port 4545");
});
