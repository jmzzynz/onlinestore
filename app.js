const express=require('express');
const app=express();
const PORT=3000;
const producstRouter=require('./routes/product');
const customersRouter=require('./routes/customers');

app.use(express.json());

app.get('/', function(request, response){
   response.send("Verkkokauppa API");
    
});

app.use('/products', productsRouter);
app.use('/customers', customersRouter);

app.listen(PORT, function(){
    console.log("Pavelin kuuntelee porttia: "+ PORT);
});
module.exports=app;