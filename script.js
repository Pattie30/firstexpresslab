const express = require('express')

const app = express()

const name = ['Patricia'];

app.get('/', function (req, res){ 
    console.log(req.params);
    res.send   (`Hiya!`)
   
})

app.get('/greeting', function (req, res){ 
    res.send   (`What is up!`)
   
})



app.get('/greeting/:name', (req, res) => { 
    const {name} = req.params;
  // console.log(req.params);
  // console.log(req.query);

    // for (let client of name){
    //     console.log(client);
    //     if(client === name) {
             res.send(`Hello ${name}! Its so great to see you!`)
        
    
  //  res.send   ('Client Not Found!')
   
    
})




app.listen(3000, function(){
    console.log('Listening on Port 3000')
} )































