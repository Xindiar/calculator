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
            if(isBracket){
                pAddNumber(arg);
            }else{
                addnumber(arg);
            }
                
                break;

        case"+" :
        case"/" :
        case "*" :
            if(isBracket){
                pEquation(arg);
            }else{
                equation(arg);
            }

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
    if(isBracket){
        if(isNeg){
        pAddNumber(arg);
    }else{
        pEquation(arg);
    }
    }else{
        if(isNeg){
        addnumber(arg);
    }else{
        equation(arg);
    }
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
    
    isNeg = false;
}

function pAddNumber(arg){
    if(arg == "."){
        
         if(isDecimal){
            alert("Cannot add 2 decimal points");
        }else{
            if(pCurrentInput.length == 0){
                pCurrentInput = "0.";
                isDecimal = true;
            }else{
            pCurrentInput = pCurrentInput + arg;
            isDecimal = true;
        }
        }
    }else{
        pCurrentInput = pCurrentInput + arg;
    }
    isNeg = false;
}

function equation(arg){
    if(currentInput != ""){
    calculationArr.push(currentInput);
    currentInput = "";
    isNeg = true;
    isDecimal = false;
    Arr.push(arg);

    sum = calculator(calculationArr , Arr);
    }else{
       
        if(isEqual){
            reset();
        }
         alert("No Input provided!!");
    
    }
}

function pEquation(arg){
    if(pCurrentInput != ""){
    pCalculationArr.push(pCurrentInput);
    pCurrentInput = "";
    isNeg = true;
    isDecimal = false;
    pArr.push(arg);

     pSum =calculator(pCalculationArr , pArr);
    }else{
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
    if(pCalculationArr.length > 0){
        pCalculationArr.length = 0;
    }
    if(pArr.length > 0){
        pArr.length = 0;
    }
    pCurrentInput = "";
    pSum= undefined;
    isBracket = false;
    isNeg = true;
    isDecimal = false;
    isEqual = false;


}


function bracketFunction(){
    if(isBracket){
        isEqual = true;
        pEquation("+");
        isBracket = false;
        currentInput = pSum +"";
        pSum = undefined;
        pCurrentInput = "";
        isEqual=false;
        isNeg = false;

    }else{
        isBracket = true;  
        if(currentInput != ""){
    calculationArr.push(currentInput);
        }
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

let tempSum = 0;
let temp = 0;

let tempArr = Array.from(inputArray);
let tempEqArr = Array.from(equationArr) ;

if(isEqual){
    //Dividing first 
    for(let i=0 ; i<equationArr.length ;i++){
        if(equationArr.at(i) == "/"){
            temp = divMul(inputArray.at(i) , inputArray.at(i+1),equationArr.at(i))
            inputArray.splice(i,2,temp);
            equationArr.splice(i,1);
            
            temp=0;
            i=-1;
        }
    }
       for(let i=0 ; i<equationArr.length ;i++){
        if(equationArr.at(i) == "*"){
            temp = divMul(inputArray.at(i) , inputArray.at(i+1),equationArr.at(i))
            inputArray.splice(i,2,temp);
           equationArr.splice(i,1);
            temp = 0;
            i=-1;
        }

    }

        for(let i = 0 ; i< equationArr.length ; i++){
        tempSum = addSubs(inputArray.at(0),inputArray.at(1),equationArr.at(i));

        inputArray = inputArray.slice(2);
        inputArray.unshift(tempSum);
        
    

    }
}else{
    for(let i=0 ; i<tempEqArr.length ;i++){
        if(tempEqArr.at(i) == "/"){
            temp = divMul(tempArr.at(i) , tempArr.at(i+1),tempEqArr.at(i));
            tempArr.splice(i,2,temp);
            tempEqArr.splice(i,1);
            
            i=-1;
            tempSum = temp;
            temp=0;
        }
    }
       for(let i=0 ; i<tempEqArr.length ;i++){
        if(tempEqArr.at(i) == "*"){
            temp = divMul(tempArr.at(i) , tempArr.at(i+1),tempEqArr.at(i));
            tempArr.splice(i,2,temp);
            tempEqArr.splice(i,1);
            i=-1;
            tempSum = temp;
            temp = 0;
        }
    }
    for(let i = 0 ; i< tempEqArr.length ; i++){
        tempSum = 0;
        tempSum = addSubs(tempArr.at(0),tempArr.at(1),tempEqArr.at(i));

        tempArr = tempArr.slice(2);

        tempArr.unshift(tempSum);
        
    

    }
}

return tempSum;

}

function addSubs(int1 , int2 , equation) {
    if(int2 == undefined){
        int2 = 0;
    }
    if(equation == "+"){
        return parseFloat(int1) + parseFloat(int2);
    }else if(equation == "-"){
        return parseFloat(int1) - parseFloat(int2);
    }
}

function divMul(int1 , int2 , equation){
    if(int2 == undefined ){
        int2 = 1 ;
    } 
    if(int2 == "0"){
        alert("replacing 0 with 1");
        int2 =1;
    } 
    if(equation == "/"){
        let temp = parseFloat(int1) / parseFloat(int2);
        let result = temp.toFixed(3);
        return result+"";
    }else if(equation == "*"){
        let temp = parseFloat(int1) * parseFloat(int2);
        let result = temp.toFixed(3);
        return result+"";
        
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
if(isBracket){
    displayInput.textContent = pCurrentInput;
}else{
    displayInput.textContent = currentInput;
}

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