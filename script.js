let answer = 0;

let Arr = [];
let calculationArr = [];

let currentInput = "";
let objectCalc = new Object;



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
                addnumber(arg);
                break;

        case ".":
        case"+" :
        case"/" :
        case "*" :
        case "-" :
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


    }

}

function addnumber(arg){
    currentInput = currentInput + arg;
    console.log(currentInput);
}

function equation(arg){
    if(currentInput != ""){
    calculationArr.push(currentInput);
    currentInput = "";
    }else{
        alert("No Input provided!!")
    
    }
    

    console.log(calculationArr);
}

function backSpace(){
    currentInput =currentInput.slice(0,-1);
}

function reset(){
    answer = 0;
    if(calculationArr.length >0){
        calculationArr.length = 0;
    }
    if(Arr.length >0){
        Arr.length = 0;
    }
    currentInput = "";
}


const button = document.querySelector("#buttons");

const displayInput = document.createElement("p");
displayInput.style.fontSize = "66px";
button.addEventListener("click", function (){
displayInput.textContent = currentInput;

})

const inputDisplay = document.querySelector("#input-box");
inputDisplay.appendChild(displayInput);