const output = document.querySelector(".output");
const inputValue  = document.querySelector(".operands");
const inputOperator  = document.querySelector(".operators");

inputValue.addEventListener("click", function(event){
    if(event.target.innerText === "clear"){
        output.innerText = "";
    }
    output.innerText = event.target.innerText;
});