var express = require('express');
var app = express();
var timestamp = require('unix-timestamp');




function getDate(date){
      
var unix = new Date(date*1000);
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
return months[unix.getMonth()] + " " + unix.getDate() + ", " + unix.getFullYear();
 
}

function getUnix(date){
    
    var newDate = date.toString();
    return Date.parse(newDate)/1000;
    
}


app.get('/:url', function(request, response){
   
   var url = request.params.url;
   //////////////
   
   var result = {};
  
  if (!getUnix(url) && isNaN(url)){
       result = { "unix": getUnix(url), "natural": getUnix(url) };
       }
       
       
  else if (!isNaN(url)) {
       
      result = { "unix": url, "natural": getDate(url)};
       
   }
  
  else {
  
   result = { "unix": getUnix(url), "natural": url.toString() };
  }
   
 
   
  
   
 response.end(JSON.stringify(result));
 
    
});

app.get("/", function(request, response){
    
    response.end("Use the parameters to convert date to unixtimestamp or from unix timestamp to date");
    
})

app.listen(8080, function(){
    console.log("listening on port 8080");
});