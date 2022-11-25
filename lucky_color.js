(function(){
    "use strict";
     document.getElementById('btn').addEventListener('click',
     function(){
         var results = ['pink','green','yellow','orange','purple','red','black','blue','brown'];
         var result = Math.floor(Math.random()*results.length);
         document.getElementById('result').innerHTML = results[result];
        console.log(result);
         if(result==0){
         color0();
         } else if (result == 1){
             color1();
         } else if (result == 2){
             color2();
         } else if (result == 3){
             color3();
         } else if (result == 4){
             color4();
         } else if (result == 5){
             color5();
         } else if (result == 6){
             color6();
         } else if (result == 7){
             color7();
         } else {
             color8();
         }

     });
     document.getElementById('btn').addEventListener('mousedown',function(){this.className = 'pushed';});
     document.getElementById('btn').addEventListener('mouseup',function(){this.className='';});
 })();


     function color0(){
       document.getElementById('wrapper').style.backgroundColor = "#ff69b4";

     };
     function color1(){
         document.getElementById('wrapper').style.backgroundColor = "#006400";

     };
     function color2(){
         document.getElementById('wrapper').style.backgroundColor = "#ffd700";

     };
     function color3(){
         document.getElementById('wrapper').style.backgroundColor = "#ff8c00";

     };
     function color4(){
         document.getElementById('wrapper').style.backgroundColor = "#9400d3";

     };
     function color5(){
        document.getElementById('wrapper').style.backgroundColor = "#dc143c";

    };
    function color6(){
        document.getElementById('wrapper').style.backgroundColor = "#000000";

    };
    function color7(){
        document.getElementById('wrapper').style.backgroundColor = "#4169e1";

    };
    function color8(){
        document.getElementById('wrapper').style.backgroundColor = "#a0522d";

    };
