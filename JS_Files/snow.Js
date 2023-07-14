window.onload = function() 
{
    createSnowflakes();
};
  
function createSnowflakes() 
{
var snowfall = document.getElementById("snowfall");
var numSnowflakes = 100; // Adjust the number of snowflakes here

for (var i = 0; i < numSnowflakes; i++) {
    var snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowfall.appendChild(snowflake);

    var size = Math.random() * 10 + 5; // Adjust the size range of snowflakes here
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    snowflake.style.left = x + "px";
    snowflake.style.top = y + "px";

    var animationDuration = Math.random() * 10 + 10; // Adjust the animation duration here
    snowflake.style.animationDuration = animationDuration + "s";
}
}
