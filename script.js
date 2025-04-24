targettime = 600;
let timeleft = targettime;

const countdowninterval = setInterval(() => {
   const minutes = Math.floor(timeleft / 60)
   const seconds = timeleft % 60;
   timeleft--;
   document.getElementById("timer").innerHTML = (`${minutes}:${seconds} `)

   if (timeleft <= -1) {
      clearInterval(countdowninterval);
      alert("time's up!")
   };
}, 1000)


const openBtn = document.querySelectorAll("#openModal")
const closeBtn = document.querySelectorAll("#closeModal")
const modal = document.getElementById("modal");

openBtn.forEach(openModal => {

   openModal.addEventListener("click", () => {
      modal.classList.add("open");

      const element = document.getElementById("modal")
      element.style.marginTop = "120px"
      element.style.marginBottom = "150px"
      if (modal.classList.add("open")) {

      }
   })
})
closeBtn.forEach(closeModal => {
   closeModal.addEventListener("click", () => {
      const element = document.getElementById("modal")

      element.style.marginTop = "0px"
      element.style.marginBottom = "0px"
      modal.classList.remove("open");
   })

})


function savedata() {

   // Email input

   const inpvalue = document.getElementById('email-inp').value

   localStorage.setItem("Email", inpvalue)

   // Shipping Address

   const countries = document.getElementById("country").value
   const fname = document.getElementById("first-name-inp").value
   const lname = document.getElementById("last-name-inp").value
   const address = document.getElementById("address").value
   const city = document.getElementById("city").value
   const postalcode = document.getElementById("postalcode").value

   const data = {
      Country: countries,
      firstname: fname,
      Lastname: lname,
      address: address,
      City: city,
      Postalcode: postalcode,
   };
   localStorage.setItem('Shipping Address', JSON.stringify(data));
   localStorage.setItem('First name', JSON.stringify(fname));


   // Payment method
   const cardnum = document.getElementById("card-num").value
   const cardname = document.getElementById("card-name").value
   const mmyy = document.getElementById("mm-yy").value
   const cvv = document.getElementById("cvv").value


   const carddata = {
      Cardnumber: cardnum,
      Nameoncard: cardname,
      Monthyear: mmyy,
      Cvv: cvv,
   }
   localStorage.setItem('Payment method', JSON.stringify(carddata))


   //  Different shipping address

   const diffcountry = document.getElementById("diff-country").value
   const difffname = document.getElementById("diff-fname").value
   const difflastname = document.getElementById("diff-lname").value
   const diffinp = document.getElementById("2nd-inp").value
   const diffcity = document.getElementById("diff-city").value
   const diffcode = document.getElementById("diff-code").value

   const Differentbillingaddress = {
      Country: diffcountry,
      Firstname: difffname,
      Lastname: difflastname,
      Address: diffinp,
      City: diffcity,
      PostalCode: diffcode,
   }

   localStorage.setItem("different billing address", JSON.stringify(Differentbillingaddress))


   // Not allowing user to add empty entry
   const box = document.getElementById("mybox");

   var email = document.forms["myform"]["inp"].value;

   if (email == '' || email == null) {
      alert("kindly fill the form!")
      return false
   } else {
      // box.style.display = 'block'
      // window.location.href = "page2.html"


   }

   // Reseting inputs after completing the order

   const dataform = document.getElementById('dataform')


   const inpelement = document.getElementById("terms-of-services")


   if (!inpelement.checked) {
      // preventDefault();
      alert("Agree to the Terms of Service!")
   } else {
      box.style.display = 'block'
      dataform.reset()
      window.location.href = "page2.html"
   }
}

function togglechckbox() {
   var checkbox = document.getElementById('freeshippinginp')
   checkbox.checked = !checkbox.checked

}

function checkthisbox() {
   var checkbox = document.getElementById('closeModal')
   checkbox.checked = !checkbox.checked

}


function closediv() {
   const box = document.getElementById('mybox')
   box.style.display = 'none'
}


function storeValue(value) {
   localStorage.setItem("Shipping", value)

}


function saveValue(value) {
   localStorage.setItem("Billing address", value)

}


function allowalphabetsonly(inputField) {
   inputField.value = inputField.value.replace(/[^a-zA-Z]/g, '')
}


function allowslash(inputElement) {
   inputElement.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9/]/g, '');
   })
}

const inputfield = document.getElementById('mm-yy');
if (inputfield) {
   allowslash(inputfield)

}


function togglecheckbox() {
   var checkbox = document.getElementById('dhlpriceinp')
   checkbox.checked = !checkbox.checked

}


function checkthebox() {
   var checkbox = document.getElementById('openModal')
   checkbox.checked = !checkbox.checked

}


const counterdisplay = document.getElementById('counter');

let count = 1;
let count2 = 120.90;
let count3 = 120.90;
let count4 = 120.90;
function addone(){
   count++;
   count2; 
   count3; 
   count4; 
document.getElementById('counter').textContent = count;
 document.getElementById('120$').textContent = Math.trunc(count2 += 120.90);

 document.getElementById('subtotal').textContent = 
 Math.trunc(count3 += 120.90);


// document.getElementById('subtotal').textContent = count2 += 120.90;
document.getElementById('total').textContent = Math.trunc(count4 += 120.90);

}


