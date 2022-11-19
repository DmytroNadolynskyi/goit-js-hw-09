const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.disabled = true;
let intervalTime ;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;

    intervalTime = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
});

buttonStop.addEventListener('click', () => {
    clearInterval(intervalTime);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
});