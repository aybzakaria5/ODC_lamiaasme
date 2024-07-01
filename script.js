const submitElt = document.querySelector(".submit");
submitElt.addEventListener("click",DisplayMsg);
function DisplayMsg(){
  document.getElementById("msg").innerHTML = "welcome!";
}

