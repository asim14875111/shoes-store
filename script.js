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
   const countries = document.getElementById("country").value
   const fname = document.getElementById("first-name-inp").value
   const lname = document.getElementById("last-name-inp").value
   const address = document.getElementById("address").value
   const city = document.getElementById("city").value
   const postalcode = document.getElementById("postalcode").value
   const cardnum = document.getElementById("card-num").value
   const cardname = document.getElementById("card-name").value
   const mmyy = document.getElementById("mm-yy").value
   const cvv = document.getElementById("cvv").value
    localStorage.setItem("Email" , inpvalue)
    localStorage.setItem("Country",countries)
    localStorage.setItem("First name",fname)
    localStorage.setItem("Last name",lname)
    localStorage.setItem(" Address",address)
    localStorage.setItem("City",city)
    localStorage.setItem("Postal code",postalcode)
    localStorage.setItem("Card Number",cardnum)
    localStorage.setItem("Card Name",cardname)
    localStorage.setItem("Month, year",mmyy) 
    localStorage.setItem("Cvv",cvv) 

}