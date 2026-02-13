const express=require('express');
const router=express.Router();
const customers=require('../models/customer_models');

router.post('/', function(request, response){
    customers.add(request.body, function(err, result){
            if(err){
                response.send(err);
            }
            else{
                response.json(result);
            }
    });
});

module.express=router;