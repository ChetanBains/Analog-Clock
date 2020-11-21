const clock_sec = document.getElementById('sec');
const clock_min = document.getElementById('min');
const clock_hour = document.getElementById('hour');
setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;

    clock_sec.style.transform = "rotate(" + (sec * 360) + "deg)";
    clock_min.style.transform = "rotate(" + (min * 360) + "deg)";
    clock_hour.style.transform = "rotate(" + (hour * 360) + "deg)";


}
updateClock();