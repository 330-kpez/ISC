var squareColor1="white";
var squareColor2="white";
var squareColor3="white";
var squareColor4="white";
var squareColor5="white";
var squareColor6="white";

document.getElementById("colorchanger1").onclick = function()
{
    console.log('hello')
  //circleColor is global variable that saves the state of the circle
    if(squareColor1 == "white")
    {
        console.log('yes');
        squareColor1 = "#77dbf4"
        document.getElementById("textchanger1").style.textDecorationLine = "line-through";

    }
    else
    {
        squareColor1 = "white"
        document.getElementById("textchanger1").style.textDecorationLine = "none";

    }
        document.getElementById("colorchanger1").style.background=squareColor1;
 }

 document.getElementById("colorchanger2").onclick = function()
{
    console.log('hello')
  //circleColor is global variable that saves the state of the circle
  if(squareColor2 == "white")
   {
    console.log('yes');
    squareColor2 = "#77dbf4"
    document.getElementById("textchanger2").style.textDecorationLine = "line-through";

   }
   else
   {
     squareColor2 = "white"
     document.getElementById("textchanger2").style.textDecorationLine = "none";

   }
    document.getElementById("colorchanger2").style.background=squareColor2;
 }
 document.getElementById("colorchanger3").onclick = function()
{
    console.log('hello')
  //circleColor is global variable that saves the state of the circle
  if(squareColor3 == "white")
   {
    console.log('yes');
     squareColor3 = "#77dbf4"
     document.getElementById("textchanger3").style.textDecorationLine = "line-through";

   }
   else
   {
     squareColor3 = "white"
     document.getElementById("textchanger3").style.textDecorationLine = "none";

   }
    document.getElementById("colorchanger3").style.background=squareColor3;
 }
 document.getElementById("colorchanger4").onclick = function()
{
    console.log('hello')
  //circleColor is global variable that saves the state of the circle
  if(squareColor4 == "white")
   {
    console.log('yes');
     squareColor4 = "#77dbf4"
     document.getElementById("textchanger4").style.textDecorationLine = "line-through";

   }
   else
   {
     squareColor4 = "white"
     document.getElementById("textchanger4").style.textDecorationLine = "none";

   }
    document.getElementById("colorchanger4").style.background=squareColor4;
 }
 document.getElementById("colorchanger5").onclick = function()
{
    console.log('hello')
  //circleColor is global variable that saves the state of the circle
  if(squareColor5 == "white")
   {
    console.log('yes');
     squareColor5 = "#77dbf4"
     document.getElementById("textchanger5").style.textDecorationLine = "line-through";

   }
   else
   {
     squareColor5 = "white"
     document.getElementById("textchanger5").style.textDecorationLine = "none";

   }
    document.getElementById("colorchanger5").style.background=squareColor5;
 }
 document.getElementById("colorchanger6").onclick = function()
{
    console.log('hello')
  //circleColor is global variable that saves the state of the circle
  if(squareColor6 == "white")
   {
       console.log('yes');
     squareColor6 = "#77dbf4"
     document.getElementById("textchanger6").style.textDecorationLine = "line-through";

   }
   else
   {
     squareColor6 = "white"
     document.getElementById("textchanger6").style.textDecorationLine = "none";

   }
    document.getElementById("colorchanger6").style.background=squareColor6;
 }
