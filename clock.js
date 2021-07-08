setInterval(showTime,1000);// takes time as 1 s and execute the function for every second.

function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = 'AM';
    
    // Set the clock in 12 hr format
    // If hours is equal to 0 at midnight, we set to 12, and if greater than 12, we will
    //subtract it from 12.
    if (hours == '0')
    {
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
        period = 'PM';
    }

    // when the hrs is less than 10, we are concantenate with 0, otherwise leave it hrs.
    hours = hours <10 ? `0${hours}` : hours;
    minutes = minutes <10 ? `0${minutes}` : minutes;
    seconds = seconds <10 ? `0${seconds}` : seconds;
    
    // displayin to UI
    const time = `${hours} : ${minutes} : ${seconds}  ${period} `;
    document.getElementById('clock').innerHTML = time;
}
showTime();