const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js_grettings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    COLOR_CN = "grettingColor";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
    
function paintGretting(text){
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.classList.add(COLOR_CN);
    gretting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUSer = localStorage.getItem(USER_LS);
    if(currentUSer === null){
        askForName();
    } else{
        paintGretting(currentUSer);
    }
}

function init(){
    loadName();
}

init();