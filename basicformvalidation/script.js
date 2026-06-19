const nameInput = document.querySelector("#name");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    
    if(nameInput.value === ""){

        alert("Please enter a value");
    }
});