var isstatus=document.querySelector("h5")
var add=document.querySelector("#Add")
var removefriend=document.querySelector("#remove")
add.addEventListener("click",function(){
    isstatus.innerHTML = "Friend"
    isstatus.style.color="green"
})

removefriend.addEventListener("click",function(){
    isstatus.innerHTML = "Stranger"
    isstatus.style.color= "red"
})