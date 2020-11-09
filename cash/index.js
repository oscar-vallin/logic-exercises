 //global variables
 let _1 = 0.01;
 let _5 = 0.05;
 let _10 = 0.10;
 let _25 = 0.25;
 const c = document.getElementById('cash');

 const cash = () => {
     let change = parseFloat(prompt("Change: "));
     let count = 0;
     while(change !== 0){
         if(change >= _25){
             change -= _25;
             change = parseFloat(change.toFixed(2));
             count++;
         }else if(change >= _10){
             change -= _10;
             change = parseFloat(change.toFixed(2));
             count++;
         }else if(change >= _5){
             change -= _5;
             change = parseFloat(change.toFixed(2));
             count++;
         }else if(change >= _1){
             change -= _1;
             change = parseFloat(change.toFixed(2));
             count++;
         }else{
             alert(`The date is incorrect`)
             return cash();
         }
     }
     console.log("mission accomplished");
     console.log("times ", count);
 }

 //handle control
 c.addEventListener('click', cash);