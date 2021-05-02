'use strict';

const express=require('express');
const errorHandler=require('./handlers/500');
const notFoundHandler=require('./handlers/404');

const app=express();


//add routes 
app.get('/',(request,response)=>{
  response.status(200).send('i am work');
});
app.get('/info',(req,res)=>{
  res.status(200).json({
    name:'areen',
    age:25,
  });
});
app.get('/badRequet',(req,res)=>{
  throw new Error('manual error');
});

//handler Middlewares
app.use('*',notFoundHandler);
app.use(errorHandler);

function start(PORT){
  app.listen(PORT,()=>{
    console.log(`App is Runnning on ${PORT}`);
  });
}

module.exports={
  app:app,
  start:start,
};