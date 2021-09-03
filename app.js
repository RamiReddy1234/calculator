function calculate(num){
    let inputbtn = document.getElementById('input-btn').value;
    let inputtotal = inputbtn + num;
    let inputvalue = document.getElementById('input-btn').value = inputtotal;
    return inputvalue
}
let equalbtn = document.getElementById('equal-btn');
equalbtn.addEventListener('click', function(){
    let equalnumber = document.getElementById('input-btn').value;
    let total = eval(equalnumber);
    document.getElementById('input-btn').value = total;
})
let clearbtn = document.getElementById('clear-btn');
clearbtn.addEventListener('click', function(){
 document.getElementById('input-btn').value = "";
   
})