var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 16) {
    greeting = "Good evening earthling!";
} else if (hourNow > 10) {
    greeting = "Good afternoon earthling!";
} else if (hourNow > 0) {
    greeting = "Good morning earthling!";
} else {
    greeting = "Welcome earthling!";
}

var elGreet = document.getElementById('greet');
elGreet.textContent = greeting;