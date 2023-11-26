var [seconds, minutes, hours] = [0, 0, 0];
var displaytime = $("#time_display").get(0);
var timer = null;

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    var h = hours < 10 ? "0" + hours : hours;
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;

    displaytime.innerHTML = h + ":" + m + ":" + s;
}

document.querySelector("#start").addEventListener("click", function() {
    watchStart();
});

document.querySelector("#stop").addEventListener("click", function() {
    watchStop();
});

document.querySelector("#reset").addEventListener("click", function() {
    watchReset();
});

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
}