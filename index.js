const express = require('express');
const app = express();
const port = 2000;

//Get request //This shows words in the respond in the browser.
app.get('/', (request, response) => {

     response.send({msg: "Haroo Evribadi !!"});//Basic minimum for an appplication to run
});

//list of friends
let friends = ["John", "Peter", "Fred", "Jack", "Jill"];

app.get('/',(request, response) =>{
     return response.send(friends)
})

// object list of friends
let list_of_friends = [{"id":1,"Name":"John"}, {"id":2,"Name":"Peter"},
                       {"id":3,"Name":"Fred"}, {"id":4,"Name":"Jack"},
                       { "id":5,"Name":"Jill"}];

app.get('/list_of_friends',(request, response) =>{
     return response.send(list_of_friends);
});     

//List of friends by id
let list_of_friends_by_Id = [{"id":1,"Name":"John"}, {"id":2,"Name":"Peter"},
                             {"id":3,"Name":"Fred"}, {"id":4,"Name":"Jack"},
                             { "id":5,"Name":"Jill"}];     

app.get('/list_of_friends_by_id/:Id',(request, response) =>{
     console.log("Logging request paarams",request.params)//List_of_Friends_by_id is an end point 
     return response.send("SEND NOTHING BACK");
});

let students = [{"id":1,"Name":"John"}, {"id":2,"Name":"Peter"},
                {"id":3,"Name":"Fred"}, {"id":4,"Name":"Jack"},
                { "id":5,"Name":"Jill"}];     

//Responsive UI USING FOR LOOPS                
app.get('/list_of_friends_by_id/:StudentId',(request, response) =>{
      console.log("Logging request paarams",request.params)
      console.log("Using value from the front end",request.params.StudentId)

      for(i=1; i<5; i++){
       if (request.params.StudentId==students[i].StudentId)
        console.log(students[i]);
      }
      return response.status(400).send("found nothing");
});



//Which port the app will listen from
app.listen(port, () => {
    console.log('Example app listening at http://localhost:2000');
});




