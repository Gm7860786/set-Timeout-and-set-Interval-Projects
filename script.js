document.querySelector('body').style.background = 'aquamarine';

function updateClock(){
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.querySelector('.clock').textContent = 
        hours + ':' + minutes + ':' + seconds;

}

updateClock();
setInterval(updateClock, 1000);

// ----------------------------------------------

function setCount(seconds){
    let remaining = seconds;

    function tick(){
        document.querySelector('.timer').textContent = remaining;

        if(remaining === 0){
            document.querySelector('.timer').textContent = 'OTP Exired!';
            document.querySelector('.timer').classList.add('expired');
            return
        }

        remaining--;
        setTimeout(tick, 1000);
    }
    tick();
}
setCount(60);

// -----------------------------------------------------

let texts = ['Loading.', 'Loading..', 'Loading...'];
let index = 0;

function animateLoading(){
    document.querySelector('.loading').textContent = texts[index];
    index = (index + 1) % texts.length;
    setTimeout(animateLoading, 2000);
}

animateLoading();

// -----------------------------------------------------


let statusName = document.querySelector('#status');
let progressBar = document.querySelector('#bar');

setTimeout(() => {
    statusName.textContent = 'Start';
    statusName.classList.add('start');
    progressBar.style.width = '30%';
}, 1000);

setTimeout(() => {
    statusName.textContent = 'Processing';
    statusName.classList.add('processing');
    progressBar.style.width = '70%';
}, 3000);

setTimeout(() => {
    statusName.textContent = 'Completed-100%';
    statusName.classList.add('complete');
    progressBar.style.width = '100%';
}, 5000);