const targetTime = 600;
let timeLeft = targetTime;
let intervalid;

function updateTimer(){

    const minutes = Math.floor(timeLeft/ 60)
    
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerHTML = ` ${minutes}:${seconds.toString().padStart(2,'0')}
    `;

    timeLeft--;


}

intervalid = setInterval(updateTimer,1000)



