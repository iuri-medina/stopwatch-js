const timer = document.getElementById('timer');
let hour = 0, minute = 0, second = 0;
let interval;

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
startBtn.disabled = false;

const start = startBtn.addEventListener("click", (e) => {
    interval = setInterval(() => {
        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);
        
        second = ++second;
        if (second > 60) {
            minute = ++minute;
            second = 0;
        };

        if (minute > 60) {
            hour = ++hour;
            minute = 0;
            second = 0;
        };

        if (second < 10 || second == 0) {
            second = "0" + second;
        };

        if (minute < 10 || minute == 0) {
            minute = "0" + minute;
        };

        if (hour < 10 || hour == 0) {
            hour = "0" + hour;
        };

        timer.innerHTML = hour + ":" + minute + ":" + second;

    }, 10), startBtn.disabled = true;

}
)

const stop = stopBtn.addEventListener("click", (e) => {
    clearInterval(interval);
    startBtn.disabled = false;
})

const reset = resetBtn.addEventListener("click", (e) => {
    clearInterval(interval);
    timer.innerHTML = "00:00:00";
    second = 0;
    minute = 0;
    hour = 0;
    startBtn.disabled = false;
})