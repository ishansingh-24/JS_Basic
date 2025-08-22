var main = document.querySelector("#main")
var crs = document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x+"px"
    crs.style.top= dets.y+"px"
    
})