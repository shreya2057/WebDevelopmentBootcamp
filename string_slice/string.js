// var tweet = prompt("Enter your tweet: ");
// var tweetLength = tweet.length;
// var maxLength = 140;

// if(tweetLength>maxLength){
//      alert("Tweet size is too long")
// }

var yourTweet = prompt("Enter your tweet: ");
var tweet = yourTweet.slice(0,280);
var tweetLength = yourTweet.length;
var maxLength = 280;

if(tweetLength>maxLength){
     alert("Tweet size is too long")
}

alert("Your tweet is: " + tweet);