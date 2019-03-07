var sw1 = 1;
var sw2 = 1;
var sw3 = 1;
var sw4 = 1;
var sw5 = 1;
var sw6 = 1;
var sw7 = 1;
var levels = ["vl0", "vl1", "vl2", "vl3", "vl4", "vl5", "vl6", "vl7", "vl8", "vl9",
"vl10", "vl11", "vl12", "vl13", "vl14"];
var tasks=0;


function d1_function(){

  if(sw1 == 0){
    document.getElementById("d1").style.background = "white";
    sw1 = 1;
    document.getElementById("e1").style.textDecorationLine = "none";
    document.getElementById("vl0").style.background= "white";

    if(tasks!=0)
    {
      var element = levels[tasks-1];
      document.getElementById("element").style.background="white";
    }
  }


  else{
    document.getElementById("d1").style.background = "#77dbf4";
    sw1 = 0;
    document.getElementById("e1").style.textDecorationLine = "line-through";
    document.getElementById("vl0").style.background= "#77dbf4";
    tasks++;
  }

}

function d2_function(){

  if(sw2 == 0){
    document.getElementById("d2").style.background = "white";
    sw2 = 1;
    document.getElementById("e2").style.textDecorationLine = "none";
    document.getElementById("vl1").style.background= "white";
    tasks--;

  }
  else{
    document.getElementById("d2").style.background = "#77dbf4";
    sw2 = 0;
    document.getElementById("e2").style.textDecorationLine = "line-through";
    document.getElementById("vl1").style.background= "#77dbf4";
    tasks++;

  }

}

function d3_function(){

  if(sw3 == 0){
    document.getElementById("d3").style.background = "white";
    sw3 = 1;
    document.getElementById("e3").style.textDecorationLine = "none";
    document.getElementById("vl2").style.background= "white";
    tasks--;

  }
  else{
    document.getElementById("d3").style.background = "#77dbf4";
    sw3 = 0;
    document.getElementById("e3").style.textDecorationLine = "line-through";
    document.getElementById("vl2").style.background= "#77dbf4";
    tasks++;

  }

}

function d4_function(){

  if(sw4 == 0){
    document.getElementById("d4").style.background = "white";
    sw4 = 1;
    document.getElementById("e4").style.textDecorationLine = "none";
    document.getElementById("vl3").style.background= "white";
    tasks--;

  }
  else{
    document.getElementById("d4").style.background = "#77dbf4";
    sw4 = 0;
    document.getElementById("e4").style.textDecorationLine = "line-through";
    document.getElementById("vl3").style.background= "#77dbf4";
    tasks++;

  }
}
  function d5_function(){

    if(sw5 == 0){
      document.getElementById("d5").style.background = "white";
      sw5 = 1;
      document.getElementById("e5").style.textDecorationLine = "none";
      document.getElementById("vl4").style.background= "white";
      document.getElementById("vl0").style.background= "#77dbf4";
      document.getElementById("vl1").style.background= "#77dbf4";
      document.getElementById("vl2").style.background= "#77dbf4";
      document.getElementById("vl3").style.background= "#77dbf4";
      tasks--;


    }
    else{
      document.getElementById("d5").style.background = "#77dbf4";
      sw5 = 0;
      document.getElementById("e5").style.textDecorationLine = "line-through";
      document.getElementById("vl0").style.background= "grey";
      document.getElementById("vl1").style.background= "grey";
      document.getElementById("vl2").style.background= "grey";
      document.getElementById("vl3").style.background= "grey";
      document.getElementById("vl4").style.background= "grey";
      tasks++;

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
