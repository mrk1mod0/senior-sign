var twit = require('twit');

var config = require('./config');

var T = new twit(config);

setInterval(tweetIt, 1000*20);

tweetIt();

function tweetIt() {

    var r = Math.floor(Math.random()*100);

    var tweet = {
        status: 'here is a random number ' + r + ' #hyght2type'
    }

    

        T.post('statuses/update', tweet, function(err, data, response) { 
            if (err) {
            console.log("Something went wrong")
            } else {
                console.log("It worked!")
            }
          })
        }
