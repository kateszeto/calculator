var ops = [];
var numbers=[];
var flag = false;
var cop = null;

function pushNumber(text,newtext){
  if(text==="Digit Limit Met"){
    text = "0";
  }
  if(text!=="0"){
    if(flag===false){
      newtext = text+newtext;
    }
  }else{
    flag = true;
  }
  
  if(newtext.length>12){
   $("#display").text("Digit Limit Met");
    flag = true;   
    numbers = [];
    ops = [];
    cop = null;
    return;
  }
  if(flag){
    numbers.push(newtext);
    flag = false;
  }else{
    var tmp = numbers.pop();
    console.log("tmp:"+tmp);
    numbers.push(newtext);
  }
  $("#display").text(newtext);
  if(cop!==null){
    $(cop).css({"border-width":"1px","border-color":"#808080"});
    cop = null;
  }
  console.log("numbers:");
  console.log(numbers);
}

function pushOp(op,id){
  if(cop!==id){
    $(cop).css({"border-width":"1px","border-color":"#808080"});  
  }
  cop = id;
  $(cop).css({"border-width":"2px","border-color":"#4C4C4C"});
 
  if(numbers.length>0){
  if(flag===false){
    ops.push(op);
    flag = true;
  }else{
    var tmp2 = ops.pop();
    ops.push(op);
  }
  console.log("ops:");
  console.log(ops);
  }
}

function calculate(){
 if(ops.length+1===numbers.length){
 ops.reverse();
 numbers.reverse();
 
 ops.forEach(function(element){
   var cnum1 = parseFloat(numbers.pop());
   var cnum2 = parseFloat(numbers.pop());
   var result;
   switch(element){
     case "*":
       result = cnum1 * cnum2;
       break;
     case "/":
       result = cnum1 / cnum2;
       break;
     case "+":
       result = cnum1 + cnum2;
       break;
     case "-":
       result = cnum1 - cnum2;
       break;    
                 }
   numbers.push(result.toString());
 });
  var output = numbers.pop();
  ops = [];
  if(output.indexOf(".")!==-1){
    output = parseFloat(output).toFixed(2);
    output = output.toString();
    if(output.substring(output.length-1)==="0")
      output = output.substring(0,output.length-1);
  }
  if(output.length>12){
    $("#display").text("Digit Limit Met");
  }else{
    $("#display").text(output);
  }
  console.log("result:"+output);
  flag = true;
  cop = null;
 }
}

/// Add event listeners
$("#seven").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"7");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#eight").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"8");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#nine").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"9");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#four").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"4");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#five").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"5");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#six").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"6");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#one").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"1");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#two").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"2");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#three").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"3");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#zero").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  pushNumber(text,"0");
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$("#mul").mousedown(function(){
  $(this).css("background-color","#E68836");
  pushOp("*","#mul");
  
}).mouseup(function(){
  $(this).css("background-color","#FF9D47");
}).mouseout(function(){
  $(this).css("background-color","#FF9D47");
});

$("#divide").mousedown(function(){
  $(this).css("background-color","#E68836");
  pushOp("/","#divide");
}).mouseup(function(){
  $(this).css("background-color","#FF9D47");
}).mouseout(function(){
  $(this).css("background-color","#FF9D47");
});

$("#sub").mousedown(function(){
  $(this).css("background-color","#E68836");
  pushOp("-","#sub");
}).mouseup(function(){
  $(this).css("background-color","#FF9D47");
}).mouseout(function(){
  $(this).css("background-color","#FF9D47");
});

$("#plus").mousedown(function(){
  $(this).css("background-color","#E68836");
  pushOp("+","#plus");
}).mouseup(function(){
  $(this).css("background-color","#FF9D47");
}).mouseout(function(){
  $(this).css("background-color","#FF9D47");
});

$("#equal").mousedown(function(){
  $(this).css("background-color","#E68836");
  calculate();
}).mouseup(function(){
  $(this).css("background-color","#FF9D47");
}).mouseout(function(){
  $(this).css("background-color","#FF9D47");
});

$("#C").mousedown(function(){
  $(this).css("background-color","#CCCCCC");
  $("#display").text("0");
  numbers = [];
  ops = [];
  if(cop!==null){
    $(cop).css({"border-width":"1px","border-color":"#808080"});
  }
}).mouseup(function(){
  $(this).css("background-color","#DCDCDC");
}).mouseout(function(){
  $(this).css("background-color","#DCDCDC");
});

$("#CE").mousedown(function(){
  $(this).css("background-color","#CCCCCC");
  if(flag){
    if(cop!==null){
      var tmp3 = ops.pop();
       $(cop).css({"border-width":"1px","border-color":"#808080"});
      cop = null;
      flag = false;
      console.log("Clear op:"+tmp3);
    }else{
      $("#display").text("0");
      numbers = [];
      ops = [];
    }
    }else{
      flag = true;
      var tmp4 = numbers.pop();
      $("#display").text("0");
      console.log("Clear numbers:"+tmp4);
    }
}).mouseup(function(){
  $(this).css("background-color","#DCDCDC");
}).mouseout(function(){
  $(this).css("background-color","#DCDCDC");
});

$("#point").mousedown(function(){
  $(this).css("background-color","#D2D5D9");
  var text = $("#display").text();
  var newtext;
  if(text.indexOf(".")===-1||text==="0"){
    newtext = text + ".";
    flag = false;
  }else{
    newtext = text;
  }
  $("#display").text(newtext);
//  pushNumber(newtext,newtext);
}).mouseup(function(){
  $(this).css("background-color","#E9ECF0");
}).mouseout(function(){
  $(this).css("background-color","#E9ECF0");
});

$(".item").hover(function(){
  $(this).css("color", "white");
  $(this).css('cursor','hand');
},function(){
  $(this).css("color", "black");
  $(this).css('cursor','pointer');
});