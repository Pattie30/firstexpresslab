//****************** GREETING EXPRESS APP ************************************/
 const express = require('express')

 const app = express()

//const name = ['Patricia'];

//& app.get('/', function (req, res){ 
// &    console.log(req.params);
// &    res.send   (`Hiya!`)
   
//& })

//& app.get('/greeting', function (req, res){ 
// &    res.send   (`What is up!`)
   
//& })

//& app.get('/greeting/:name', (req, res) => { 
// &    const {name} = req.params;
  
// &             res.send(`Hello ${name}! Its so great to see you!`)
    
//& })
//& app.listen(3000, function(){
// &    console.log('Listening on Port 3000')
// &} )

//*************************** TIP CALCULATOR ****************************************** */

// const total = ''
// const percentage = [total / hundred];

app.get('/', function (req, res){ 
      console.log(req.params);
      res.send   (`Hiya!`)
})



app.get('/tip', function (req, res){ 
    const {tip} = req.params
    res.send   (`Tip calculator`)
   
})

app.get('/tip/:total', function(req, res){
    const {total} = req.params;
     res.send (`Your total is: ${total}`)
})

app.get('/tip/:total/:percentage', function(req, res) {
    const {total,percentage} = req.params;
    const hundred = '100';
    //const {total} = req.params;
     const endResult = total / hundred * percentage
      res.send(`Your tip is ${endResult}`)

})



  
    
//************************ MAGIC 8 BALL **********************************************************/

const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely",
 "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again",
 "Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

 app.get('/magic', function (req, res){ 
    const {magic} = req.params
    res.send   (`MAGIC 8 BALL`)   
})
app.get('/magic/:question', function (req, res){ 
    const {magic, question} = req.params
    const randomFrase = response[Math.floor(Math.random() * response.length)]
    res.send   (`MAGIC 8 BALL RESPONSE: <h1>${randomFrase} </h1> `)   
})




























app.listen(3000, function(){
    console.log('Listening on Port 3000')
} )
