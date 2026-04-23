let isBracket = false;
let Arr = [];
let calculationArr = [];
let isNeg = true;
let currentInput = "";
let isDecimal = false;
let sum = undefined;
let isEqual = false;
let pCalculationArr = [];
let pArr = [];
let pCurrentInput = "";
let pSum= undefined;
let answer = 0;



function buttonClicked(arg){
    switch (arg){
        case '1' :
        case '2' :
        case'3' :
        case '4' :
        case'5' :
        case'6':
        case'7':
        case'8':
        case'9':
        case '0':
        case ".":
                addnumber(arg);
                break;

        case"+" :
        case"/" :
        case "*" :
             equation(arg);
             break;

        case "AC" :
             reset();
             break;

        case "=" : 
        solution();
        break;

        case "⌫":
            backSpace();
            break;

        case "bracket":
            bracketFunction();
            break;

        case "-" :
            negativeInput(arg);
            break;

    }

}

function negativeInput(arg){
    if(isNeg){
        addnumber(arg);
    }else{
        equation(arg);
    }
}

function addnumber(arg){
    if(arg == "."){
        
         if(isDecimal){
            alert("Cannot add 2 decimal points");
        }else{
            if(currentInput.length == 0){
                currentInput = "0.";
                isDecimal = true;
            }else{
            currentInput = currentInput + arg;
            isDecimal = true;
        }
        }
    }else{
        currentInput = currentInput + arg;
    }
    
    isNeg = false
}

function equation(arg){
    if(currentInput != ""){
    calculationArr.push(currentInput);
    currentInput = "";
    isNeg = true;
    isDecimal = false;
    Arr.push(arg);

    calculator(calculationArr , Arr);
    }else{
       
         console.log(isEqual);
        if(isEqual){
            reset();
        }
         alert("No Input provided!!");
    
    }
}

function backSpace(){
    currentInput =currentInput.slice(0,-1);
}

function reset(){
    answer = 0;
    sum = undefined;
    if(calculationArr.length >0){
        calculationArr.length = 0;
    }
    if(Arr.length >0){
        Arr.length = 0;
        
    }
    currentInput = "";
}


function bracketFunction(){
    if(isBracket){
        isBracket = false;
        Arr.push(")");

    }else{
        isBracket = true;
        Arr.push("(");
    }
}

function solution(){
    isEqual = true;
    equation("+");
    answer = sum;
    sum = undefined;
    currentInput = "";
    

}

function calculator(inputArray , equationArr){
console.log(Arr);


let tempArr = inputArray;
  console.log(inputArray);

if(Arr.includes("/") || Arr.includes("*")){

}else{
    for(let i = 0 ; i< equationArr.length ; i++){
        sum = addSubs(tempArr.at(0),tempArr.at(1),equationArr.at(i));

        tempArr = tempArr.slice(2);

        tempArr.unshift(sum);
        
    

    }
}

}

function addSubs(int1 , int2 , equation) {
    if(int2 == undefined){
        int2 = 0;
    }
    if(equation == "+"){
        return parseInt(int1) + parseInt(int2);
    }else if(equation == "-"){
        return parseInt(int1) - parseInt(int2);
    }
}

const button = document.querySelector("#buttons");

const displayInput = document.createElement("p");
displayInput.style.fontSize = "66px";
displayInput.style.margin = "10px";

const displayOutput = document.createElement("p");
displayOutput.style.fontSize = "22px";
displayOutput.style.margin = "2px";
displayOutput.style.color = "grey";
displayOutput.style.height = "27.5px";
button.addEventListener("click", function (){
displayInput.textContent = currentInput;
displayOutput.textContent = sum;
if(isEqual){
    isEqual = false;
    displayInput.style.fontSize = "88px";
    displayInput.textContent = answer;
}
})

const inputDisplay = document.querySelector("#input-box");
inputDisplay.style.display = "flex";
displayOutput.style.justifyContent = "flex-start";
inputDisplay.appendChild(displayInput);

const outputDisplay = document.querySelector("#output-box");

outputDisplay.appendChild(displayOutput);