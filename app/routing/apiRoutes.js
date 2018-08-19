//required data files/packages
var friends = require("../data/friends");

//exports this module to the server, close at the bottom of the file. 
module.exports = function(app) {

//routes to send and receive data to the server. 
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    var newFriendScores = req.body.scores.map(function(score){
        return parseInt(score);
      });
  
      var scoresArray = [];
      // var friendCount = 0;
      var bestMatch = 0;
      
      // grab body and replace scores part of the body with the ones parsed
      var newFriend = req.body
      newFriend.scores = newFriendScores
  
      //runs through all current friends in s
      for(var i=0; i<friends.length; i++){
        var scoresDiff = 0;
        //run through scores to compare friends
        for(var j=0; j<newFriendScores.length; j++){
          scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
        }
  
        //push results into scoresArray
        scoresArray.push(scoresDiff);
      }
  
      //after all friends are compared, find best match
      for(var i=0; i<scoresArray.length; i++){
        if(scoresArray[i] <= scoresArray[bestMatch]){
          bestMatch = i;
        }
      }
  
      //return bestMatch data
      var bff = friends[bestMatch];
      res.json(bff);
  
      //pushes new submission into the friendss array
      friends.push(newFriend);

});

}