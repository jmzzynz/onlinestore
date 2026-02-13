const express=require('express');
const app=express();
const PORT=3000;

app.get('/', function(request, response){
   response.send("Verkkokauppa API");
    
});


app.listen(PORT, function(){
    console.log("Pavelin kuuntelee porttia: "+ PORT);
});
module.exports=app;