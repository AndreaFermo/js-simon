const numberList = [];
const numbersToRemember = 5;
const numbersDom = document.querySelector('#numbers')

for (let i = 0; i < numbersToRemember; i++) {
    numberList.push(createUniqueRandomNumber());
}

numbersDom.innerHTML = numberList;

setTimeout(dNone, 5000);

function createRandomNumber() {
   return Math.floor(Math.random() * 10 + 1);
};


function createUniqueRandomNumber() {
    let validNumber;
    let validRandomNumber;

    while (!validNumber) {
        validRandomNumber = createRandomNumber();
        if(!numberList.includes(validRandomNumber)) {
            validNumber = !validNumber;
        }
    }

    return validRandomNumber;
};

function dNone() {
    return numbersDom.classList.add('dNone');
}










