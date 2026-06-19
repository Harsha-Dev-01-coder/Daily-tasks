const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");
const btn = document.querySelector("#show-btn");

btn.addEventListener("click", function(){
    
    result.textContent = nameInput.value;

    nameInput.value = "";
});