const numberList = [];
const enteredNumberList = [];
const numbersToRemember = 5;
const numbersDom = document.querySelector('#numbers');
const resultDom = document.querySelector('#result');

for (let i = 0; i < numbersToRemember; i++) {
    numberList.push(createUniqueRandomNumber(numberList, 1, 10));
}

numbersDom.innerHTML = numberList;

setTimeout(dNone, 30000);

setTimeout(getNumbers, 30100);


function createRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + 1);
}


function createUniqueRandomNumber(list, min, max) {
    let validNumber;
    let validRandomNumber;

    while (!validNumber) {
        validRandomNumber = createRandomNumber(min, max);
        if(!list.includes(validRandomNumber)) {
            validNumber = !validNumber;
        }
    }

    return validRandomNumber;
}

function dNone() {
    return numbersDom.classList.add('dNone');
}

function getNumbers() {
    let score = 0;

    for (let i = 0; i < numbersToRemember; i++) {
        let enteredNumber = parseInt(prompt('inserisci un numero'));
        console.log(enteredNumber);
     
        if (numberList.includes(enteredNumber)) {
            enteredNumberList.push(enteredNumber)
            console.log(`hai ricordato il numero: ${enteredNumber}`)
            score ++;
            console.log(score);
        }
    }

    resultDom.innerHTML = `hai indovinato ${score} numeri e sono i seguenti: ${enteredNumberList}`;
}










