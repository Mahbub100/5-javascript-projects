var Feet = document.getElementById('feet');
var Inch = document.getElementById('inch');

Feet.addEventListener('input', function(){

    let f= this.value ;
    let i= f*12;
    Inch.value=i;  

}); 
Inch.addEventListener('input', function(){

    let i= this.value ;
    let f= i/12;
    Feet.value=f;  

}); 