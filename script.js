const output = document.querySelector(".output");
const inputValue  = document.querySelector(".operands");
const inputOperator  = document.querySelector(".operators");
let operatorId;
let firstRoundEntry = false;

let value = 0;
let secondValue = 0 ;

//handling the operand values
inputValue.addEventListener("click", function(event){
    //when we want to remove the last digit
    if (event.target.id === 'button-clear'){
        removeLast(output.innerText);    
    }
    //when we want to clear the display screen
    if(event.target.id === 'button-c'){
        initlize();
    }

    //checking to see if we what we entered is the first operand
    if(firstRoundEntry === true){
        output.innerText = '';
        firstRoundEntry = false;
    }

    //taking the operand
    if(event.target.id != '' && event.target.id != 'button-c' && event.target.id != 'button-clear'){
        console.log(event.target.id);
        output.innerText += event.target.innerText;
    }
    //checking for cases where someone clicks between the buttons
    if(event.target.id === ''){
        console.log("Multiselected buttons");
        alert("Please click a single button!\n You may have clicked between the buttons");
    }
    
});

//handling the operator input
inputOperator.addEventListener("click", function(event){
    firstRoundEntry = true;
    console.log("Text from screen: "+output.innerText);
    value = output.innerText;//storing the text on the screen before we erase everything
    output.innerText = '';//erasing the screen 
    
    if(event.target.id != ''){
        console.log(event.target.id);
        if (event.target.id != 'button-ans'){
            operatorId = event.target.id ;
            output.innerText = event.target.innerText;
            secondValue = value;
        }else{
            console.log("{secondValue:"+secondValue , " ,value:"+value ,",OperatorId:"+operatorId+"}");
            output.innerText = evaluate(parseInt (secondValue), parseInt (value) , operatorId);
        }
    }else{
        console.log("Error: Multiselected buttons");
    }
});

//doing the calculations
function evaluate( secondValue, value, operatorId){
    switch(operatorId){
        case 'button-divide':
            return secondValue/value;
        case 'button-mult':
            return secondValue*value;
        case 'button-minus':
            return secondValue-value;
        case 'button-plus':
            return secondValue+value;
        default:
            console.log("We did not expect that operator");
            break;
    }  
}
//intializing the display screen
function initlize(){
    value = 0;
    secondValue = 0;
    output.innerText = 0 ;
}
//removing the last value of the string in  the display area 
function removeLast(word){
    console.log("String before slicing: "+word);
    let newString = word.slice(0 ,-1);
    console.log("String after slicing: "+newString);
    output.innerText = newString;
}