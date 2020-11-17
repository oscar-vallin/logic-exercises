//example: 4003600000000014

const card = "5105105105105100";

const validateCreditCard = num => {
    let arrayNum = num.split("");
    let multiplyTarget = arrayNum.map((n,i) => i % 2 == 0 ? n * 2: n)
            .join("")
            .split("")
            .reduce((accumulator, currentValue) => parseInt(accumulator)+parseInt(currentValue),0)
    if(multiplyTarget % 2 === 0){
        if(arrayNum.length === 15 && (arrayNum[0] == 3 && arrayNum[1] == 7 || 4)){
            return console.log("This is an American Express Target")
        }else if(arrayNum.length === 16 && ( arrayNum[0] == 5 && (arrayNum[1] == 1 || 2 || 3 || 4 || 5))){
            return console.log("This is a MaterCard Target")
        }else if((arrayNum.length === 13 || 16) && arrayNum[0] == 4){
            return console.log("This is a VISA Target")
        }
    }else{
        console.log("This is an Invalid Number Card");
    }
    
};

validateCreditCard(card);