let counter = 5;
let logs = [];


// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Counter app');

//     const containerElem = document.querySelector('.container');
//     containerElem.style.border = '1px solid blue';
    
//     const counterElem = document.getElementById('counter');
//     counterElem.innerText = counter;
// });

function onMinusClicked() {
    console.log('on minus clicked!');
    counter--;
    console.log('counter: ', counter);

    const counterElem = document.getElementById('counter');
    counterElem.innerText = counter;

    logs.push(`${counter}: ${new Date()}`);
    console.log(logs);

    const logsElem = document
}

function onPlusClicked() {
    console.log('on plus clicked!');
    counter++;
    console.log('counter: ', counter);

    const counterElem = document.getElementById('counter');
    counterElem.innerText = counter;
}