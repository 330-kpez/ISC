var sw1 = 1;
var sw2 = 1;
var sw3 = 1;
var sw4 = 1;
var sw5 = 1;
var sw6 = 1;
var sw7 = 1;


function dropdown_function(){
  document.getElementById("dropdown_content").classList.toggle("show");
}

function onehr_function(){
  document.getElementById("dropdown_content").classList.toggle("show");
  document.getElementById("dropdown").placeholder = "1 hour";
}
function twohr_function(){
  document.getElementById("dropdown_content").classList.toggle("show");
  document.getElementById("dropdown").placeholder = "2 hours";
}
function threehr_function(){
  document.getElementById("dropdown_content").classList.toggle("show");
  document.getElementById("dropdown").placeholder = "3 hours";
}
function thirtym_function(){
  document.getElementById("dropdown_content").classList.toggle("show");
  document.getElementById("dropdown").placeholder = "30 minutes";
}


function d1_function(){

  if(sw1 == 0){
    document.getElementById("d1").style.background = "white";
    sw1 = 1;
  }
  else{
    document.getElementById("d1").style.background = "#77dbf4";
    sw1 = 0;

  }

}

function d2_function(){

  if(sw2 == 0){
    document.getElementById("d2").style.background = "white";
    sw2 = 1;
  }
  else{
    document.getElementById("d2").style.background = "#77dbf4";
    sw2 = 0;

  }

}

function d3_function(){

  if(sw3 == 0){
    document.getElementById("d3").style.background = "white";
    sw3 = 1;
  }
  else{
    document.getElementById("d3").style.background = "#77dbf4";
    sw3 = 0;

  }

}

function d4_function(){

  if(sw4 == 0){
    document.getElementById("d4").style.background = "white";
    sw4 = 1;
  }
  else{
    document.getElementById("d4").style.background = "#77dbf4";
    sw4 = 0;

  }
}
  function d5_function(){

    if(sw5 == 0){
      document.getElementById("d5").style.background = "white";
      sw5 = 1;
    }
    else{
      document.getElementById("d5").style.background = "#77dbf4";
      sw5 = 0;

    }

  }

  function d6_function(){

    if(sw6 == 0){
      document.getElementById("d6").style.background = "white";
      sw6 = 1;
    }
    else{
      document.getElementById("d6").style.background = "#77dbf4";
      sw6 = 0;

    }

  }

  function d7_function(){

    if(sw7 == 0){
      document.getElementById("d7").style.background = "white";
      sw7 = 1;
    }
    else{
      document.getElementById("d7").style.background = "#77dbf4";
      sw7 = 0;

    }

  }

  function dd1_function(){

    if(sw1 != 0 && sw2 != 0 && sw3 != 0){
      document.getElementById("dd1").style.background = "#77dbf4";
      sw1 = 0;
    }
    else{
      document.getElementById("dd1").style.background = "white";
      sw1 = 1;

    }

  }

  function dd2_function(){

    if(sw1 != 0 && sw2 != 0 && sw3 != 0){
      document.getElementById("dd2").style.background = "#77dbf4";
      sw2 = 0;
    }
    else{
      document.getElementById("dd2").style.background = "white";
      sw2 = 1;

    }

  }

  function dd3_function(){

    if(sw1 != 0 && sw2 != 0 && sw3 != 0){
      document.getElementById("dd3").style.background = "#77dbf4";
      sw3 = 0;
    }
    else{
      document.getElementById("dd3").style.background = "white";
      sw3 = 1;

    }

  }






  function complete_function(){
    var op = 1;
    document.getElementById("eventsid").style.visibility = "hidden";
    document.getElementById("scheduleid").style.visibility = "hidden";
    document.getElementById("continuebttn").style.visibility = "hidden";
    document.getElementById("compid").style.visibility = "visible";
    document.getElementById("compid").style.opacity = op;
    var i = setInterval(function(){
      op = op - .07;
      if(op < .1){
        window.location = 'home.html'
      };
      document.getElementById("compid").style.opacity = op;

    }, 200);
  }
