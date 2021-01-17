const express=require('express')
const app=express()
const path =require('path')
const { nextTick } = require('process')

// let greet=['say','to','everybody','hello']
// app.set('view engine','ejs')
// app.get('/',(req,res)=>{
//     res.render('pages/index'  ,{test:greet.join(' ')})
//   console.dir(req.cookies)
// })

// app.get('/user/:id',(req,res)=>{
//     res.send(`user :${req.params.id}`)
//     console.log(req.params)
// })
// app.get('/:username',(req,res)=>{
//   res.status(200)
//   res.set('Content-type','text/html;charset=utf-8')
//   res.send('<html><body>'+'<h1>Hello '+req.params.username+'</h1>'+'<body><html>')
// })
// app.get('*',(req,res)=>{
//   res.send("Hello world!!!")
  
// // })
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage')
// }).post('/', function (req, res) {
//   res.send('POST request to the homepage');
// }).all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...');
//   next(); // pass control to the next handler
// }).use(function(req, res, next){
//     res.status(404).send('Page introuvable !');
// });
// app.get(/.*fly$/, function (req, res) {
//   res.send('/.*fly$/');
// })
// const myLogger = function (req, res, next) {
//   console.log("A new request received at " + Date.now());
//    next();
// }

// app.use(myLogger);

// app.get('/',[myLogger], function (req, res) {
//   res.send('Hello World!')
// })
// app.set('views','./views')
// app.set('view engine','pug')
// app.get('/firsttemplate',(req,res)=>{
//   res.render('first_view')
// })

// app.get('/dynamic',(req,res)=>{
//   res.render('dynamic',{name:"mohamed",
// url:"http://gomycode.com"})
// })
app.use(express.static(path.join(__dirname,'/public')))
function logger(req,res,next){
    const date=new Date()
   if(date.getDay()===0||date.getDay()===6||date.getHours()<9||date.getHours()>16) {
       res.sendFile(__dirname+'/public/Closed.html')
   } else
    next()
}
app.use(logger)
// app.use(express.static(__dirname+'/public/style.css'))
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/Home.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/Contact.html'))
})
app.listen(5000)