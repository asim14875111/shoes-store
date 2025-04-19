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




// const openBtn = document.getElementById("openModal")
//    const closeBtn = document.getElementById( "closeModal")
// const modal = document.getElementById("modal");
//  openBtn.addEventListener("click", () =>{
//    modal.classList.add("open");

//    if(modal.classList.add("open")){

//    }
//  })

//  closeBtn.addEventListener("click", ()=>{
//    modal.classList.remove("open");
//  })


function savedata(){
    const inpvalue = document.getElementById('email-inp').value
    const inp2value = document.getElementById('first-name-inp').value
    localStorage.setItem("Email" , inpvalue)
}