var friends = require('../data/friends');

module.exports = function(app) {
    // A GET route with the url `/api/friends`.
    // This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.send(friends);       
    })

    // A POST routes `/api/friends`. This will be used to handle incoming survey results.
    // This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;
        // newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();
        // fs.appendFile('./data/friends.js', JSON.stringify(newfriend, null, 2) , 'utf-8');
        console.log(newfriend);

        // The closest match will be the user with the least amount of difference.
        var index = 0;
        var bestMatch = 100;
        // characters.push(newcharacter);
        for (var i=0; i < friends.length; i++) {
            var totalDifference = 0;                            
            for (var j=0; j < friends[i].scores.length; j++ ) {
                var value = Math.abs(friends[i].scores[j] - newfriend.scores[j]);
                totalDifference += value;
            }
            if (totalDifference < bestMatch) {
                index = i;
                bestMatch = totalDifference;
            }
        }
      
        res.json(friends[index]);
    });
}

