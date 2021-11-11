const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

let num1 = 0, num2 = 0, num3 = 0;

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

function checkWatch() {
    if (second.innerHTML || minute.innerHTML || hour.innerHTML !== '00') {
        startBtn.disabled = true;
    }
}

let interval;

const start = startBtn.addEventListener("click", (e) => {
    interval = setInterval(() => {
        num1 = ++second.innerHTML;
        second.innerHTML = num1;
        if (num1 > 60) {
            num2 = ++minute.innerHTML;
            minute.innerHTML = num2;
            second.innerHTML = 0;

            if (num2 > 60) {
                num3 = ++hour.innerHTML;
                hour.innerHTML = num3;
                minute.innerHTML = 0;
            }
        }
    }, 1000), checkWatch();
}
)

const stop = stopBtn.addEventListener("click", (e) => {
    clearInterval(interval);
    startBtn.disabled = false;

})

const reset = resetBtn.addEventListener("click", (e) => {
    clearInterval(interval);
    second.innerHTML = '00';
    minute.innerHTML = '00';
    hour.innerHTML = '00';
    startBtn.disabled = false;
})








