const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const mins = document.querySelector('.minutes')
const second = document.querySelector('.seconds')
let newYear = new Date('january 1, 2023 ')


setInterval(()=>{
    const currentTime = new Date();
    const seconds = (newYear - currentTime) / 1000;

    let timerDays = Math.floor( seconds/(24*3600))
    let timerHours = Math.floor( (seconds/3600) % 24)
    let timerMins = Math.floor( (seconds / 60) % 60)
    let timerSeconds = Math.floor( seconds % 60)

    days.innerHTML = timerDays;
    hours.innerHTML = timerHours;
    mins.innerHTML = timerMins;
    second.innerHTML = timerSeconds;
},1000)

