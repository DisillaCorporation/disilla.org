const express = require('express')
const app = express()
const serveIndex = require('serve-index');
const webconfig = require("./webconfig")

app.use(express.static("public_html"))
app.use('/data', serveIndex(__dirname + '/data'));
app.get('/discord', function(req, res){
   res.redirect(301, `https://discord.io/chrono`)
   console.log(`Discord Redirect sent to ${req.ip}`)
   next()
});

app.get('/*', function(req, res){
   res.sendFile(__dirname + '/public_html/error.html');
   console.log(`Error Page sent to ${req.ip}`)
});
 
app.listen(9000, running)
function running() {
console.log(`listening on port: 80`)
}