var squareColor="white";

document.getElementById("colorchanger").onclick = function()
{
  //circleColor is global variable that saves the state of the circle
  if(squareColor == "white")
   {
     squareColor = "#77dbf4"
   }
   else
   {
     squareColor = "white"
   }
    document.getElementById("colorchanger").style.background=squareColor;
 }
