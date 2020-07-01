document.addEventListener('DOMContentLoaded', function() {

    let counter = 5;
    let logs = [];

    console.log('Counter app');
    
    const containerElem = document.querySelector('.container');
    containerElem.style.border = '1px solid blue';

    const minusElem = document.createElement('button');
    containerElem.appendChild(minusElem);
    minusElem.innerText = 'Minus';
    minusElem.id = 'minus';

    const counterElem = document.createElement('span');
    containerElem.appendChild(counterElem);
    counterElem.id = 'counter';
    counterElem.innerText = counter;

    const plusElem = document.createElement('button');
    containerElem.appendChild(plusElem);
    plusElem.innerText = 'Plus';
    plusElem.id = 'plus';

    minusElem.addEventListener("click", onMinusClicked);
    plusElem.addEventListener("click", onPlusClicked);

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
});
