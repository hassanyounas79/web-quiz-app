var timerNode = document.getElementById("time")
var time = 15;
var timer = setInterval(() => {
    if (time == 0) {
        clearInterval(timer);
        timerNode.innerText = time;
    }
    else {
        timerNode.innerText = time;
        time--;
        console.log(time);
    }

}, 1000);