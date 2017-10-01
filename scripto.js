$(document).ready(function(){
  // Setting variables
  var today = new Date();
  var message;



  // Greeting user depending on the hour
  if (today.getHours() > 0 && today.getHours() < 12){
      message = "Good morning, user.";
  } else if (today.getHours() >= 12 && today.getHours() < 17) {
    message = "Good afternoon, user.";
  } else if (today.getHours() >= 17){
    message = "Good evening, user."
  };
  message += "</br>";



  // Telling what date is today
  var calendar = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July",
                  8: "August", 9: "September", 10:"October", 11:"November", 12:"December"};
  message += "Today is ";
  if (today.getDay() < 10) {
    message += "0";
  };
  message += today.getDay()+1 + " " + calendar[today.getMonth()+1] + ", " + today.getFullYear() + ".</br>";
  addWelcome(message);



  // Checking the current BTC->EUR
  var btc_url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  $.getJSON(btc_url, function(data){
      console.log(data);
      message = "BTC to EUR: " + data["bpi"]["EUR"]["rate"] + "</br>";
      addWelcome(message);
  });
});



// Getting a random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Appending the <p> element with the message
function addWelcome(msg){
  $("#welcome-message").append(msg);
}
