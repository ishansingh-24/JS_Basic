var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  console.log("Hello");

  // show + scale up
  love.style.transform = "translate(-50%, -50%) scale(1.3)";
  love.style.opacity = "1";

  // bounce back
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(1)";
  }, 200);

  // fade out
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
    love.style.opacity = "0";
  }, 800);
});
