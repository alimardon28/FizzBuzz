let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elResult = document.querySelector(".result");


elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

 let inputValue = elInput.value;


   if(inputValue % 3 === 0 && inputValue % 5 === 0) {
    elResult.textContent = "FizzBuzz"
   }else if (inputValue % 3 === 0) {
    elResult.textContent = "Fizz"
   }else if (inputValue % 5 === 0) {
    elResult.textContent = "Buzz"
   }else{
      elResult.textContent = inputValue;
   }
})
