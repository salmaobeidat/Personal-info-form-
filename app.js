document.addEventListener('DOMContentLoaded',function()
{

const formID=document.getElementById("formId");
formID.addEventListener("submit",(event)=>{
    event.preventDefault();
    DisplayData();
})

//getting input from the form

function DisplayData(){
let firstName= document.getElementById("firstname").value;
let lastName= document.getElementById("lastname").value;
//full name 
let fullName=firstName+" "+lastName;
let email = document.getElementById("email").value;
let phoneNumber= document.getElementById("phonenumber").value;
let Birthdate = document.getElementById("Birthdate").value;
let gender= document.getElementById("gender").value;
let address = document.getElementById("address").value;

//creating cards container
let cardsContainer= document.getElementById("CardsContainer");
let card =document.createElement("newCard");
card.innerHTML=` <div class="card col-4 m-2" style="width: 18rem;">
<img src="images/personal.png" class="card-img-top" alt="personal image">
<div class="card-body my-2 text-start">
    <h5 class="mb-2"><b>Username:</b> ${fullName}</h5>
    <h5 class="mb-2"><b>Email:</b> ${email}</h5>
    <h5 class="mb-2"><b>Phone Number:</b> ${phoneNumber}</h5>
    <h5 class="mb-2"><b>Birth date:</b> ${Birthdate}</h5>
    <h5 class="mb-2"><b>Gender:</b> ${gender}</h5>
    <h5 class="mb-2"><b>Address:</b> ${address}</h5>
</div>
</div>`;
cardsContainer.appendChild(card);
}

//reset button
function Reset()
{
    formID.reset();
}

});//DOMContentLoaded Event closing 