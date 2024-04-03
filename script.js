let allClear = document.querySelector('.clear')
let backspace = document.querySelector('.backspace')

let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')

let equalTo = document.querySelector('.equal')

let searchForm = document.querySelector('#inputSearch')

function appendToInput(elm){
    searchForm.value += elm;
}

allClear.addEventListener('click',()=>{
    searchForm.value = "";
})

backspace.addEventListener('click',()=>{
    let currentVal = searchForm.value;
    searchForm.value = currentVal.slice(0,-1);
})

searchForm.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        searchForm.value = eval(`${searchForm.value}`);
    }
})

equalTo.addEventListener('click',()=>{
    searchForm.value = eval(`${searchForm.value}`);
});


let modeBtn = document.querySelector('.darkLight')
let modeIcon = document.querySelector('[data-modeChange]')
let darkMode = false;

modeBtn.addEventListener('click',()=>{
    if(darkMode === false){
        enableDark();
    }else{
        enableLight();
    }
})

function enableLight(){

    document.documentElement.style.setProperty('--lm-backgroundWrapper','#ffffff');
    document.documentElement.style.setProperty('--lm-border','#808080');
    document.documentElement.style.setProperty('--lm-text','#000000');
    document.documentElement.style.setProperty('--lm-bgButton','#dadada');

    modeIcon.src = "moon-icon.svg"
    darkMode = false;
}

function enableDark(){

    document.documentElement.style.setProperty('--lm-backgroundWrapper','#000000');
    document.documentElement.style.setProperty('--lm-border','#dcdcdc');
    document.documentElement.style.setProperty('--lm-text','#ffffff');
    document.documentElement.style.setProperty('--lm-bgButton','#403f3e');

    darkMode = true;
    modeIcon.src = "sun-icon.svg"
}











