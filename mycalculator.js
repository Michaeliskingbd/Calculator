const display1EL =  document.querySelector('.display-1');
const display2EL =  document.querySelector('.display-2');
const tempDisplayEL =  document.querySelector('.temp-display');
const numbersEL =  document.querySelectorAll('.number');
const operatorEL =  document.querySelectorAll('.operation');
const equalEL =  document.querySelector('.equal');
const clearEL =  document.querySelector('.clear-all');
const clearlastEL =  document.querySelector('.clear-last-entity');

let dis1Num = "";
let dis2num = "";
let result = null;
let lastOperation = "";
let haveDot = false;


numbersEL.forEach (number => {
    number.addEventListener('click', (e)=>{
        if( e.target.innertext === '.' && !haveDot){
            haveDot = true;
        }else if (e.target.innertext === '.' && haveDot){
           return;
        }
        dis2num += e.target.innerText;
        display2EL.innerText = dis2num;

    })
})
operatorEL.forEach (operation => {
    operation.addEventListener('click', (e) =>{
        if (!dis2num) result;
        haveDot= false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2num && lastOperation){
            mathOperation();
        } else {
            result = parseFloat(dis2num); 
        }
        clearVar(operationName);
        lastOperation = operationName
        console.log(result);
    })
});

function clearVar(name = ''){
    dis1Num += dis2num+ ' ' + name + ' ';
    display1EL.innerText = dis1Num;
    display2EL.innerText = '';
    dis2num = '';
    tempDisplayEL.innerText = result;
}

function mathOperation() {
    if(lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(dis2num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2num);
    }
}

equalEL.addEventListener('click', (e) => {
    if( !dis1Num || !dis2num ) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2EL.innertext = result;
    tempDisplayEL.innertext = '';
    dis2num = result
    dis1Num = '';
});

clearEL.addEventListener('click', (e) => {
    dis1Num = '';
    dis2num = '';
    result = '';
    tempDisplayEL.innerText = '0';
});

clearlastEL.addEventListener('click', (e) => {
    display2EL.innerText = '';
    dis2num = '';
});

clearEL.addEventListener('click', (e) => {
    window.location.reload()
})



//TIME//

function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour clock format
    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes} ${amOrPm}`;
    timeDisplay.textContent = timeString;
}

// Update the time initially and then every second
updateTime();
setInterval(updateTime, 1000);
