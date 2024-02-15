alert("You have 20 clicks to find the treasure! Suggestion: Right corner - Change View - Full Page");
//Random function
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
//distance
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
var getDistanceHint = function (distance) {
    if (distance < 25) {
        return "BOILING HOT!";
    } else if (distance < 45) {
        return "Really hot";
    } else if (distance < 70) {
        return "Hot";
    } else if (distance < 100) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Really cold";
    } else {
        return "Freezing!";
    }
};
// variables
var width = 400;
var height = 400;
var clicks = 0;
var clickLimit = 19;
//random target
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
//click handler
$("#map").click(function (event) {
    clicks++;
    if (clicks > clickLimit) {
        alert("GAME OVER");
        location.reload();
    }
    //distance
    var distance = getDistance(event, target);
    //
    var distanceHint = getDistanceHint(distance);
    //	
    $("#distance").text(distanceHint);
    //
    $("#clicks-remaining").text(clickLimit - clicks);
    //
    if (distance < 10) {
        location.reload();
        alert("Found the treasure in " + clicks + " clicks!");
    }
});