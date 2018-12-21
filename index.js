// const jadeInfo = {
//     name: "jade",
//     age: 36,
//     favFood: "fork, spaghetti"
// }
// console.log(jadeInfo.name);

// function sayHello(name, age) {
//     console.log(`Hello my ${name} Im ${age} years old`);
// }
// sayHello("jade", 36);

// function sayHello(name, age) {
//     return `Hello my name is ${name}. Im ${age} years old.`;
// }

// const greetJade = sayHello("jade", 36);
// console.log(greetJade);

// const calculater = {
//     plus: function(a, b){
//         return a + b;
//         },
//     minus: function(a, b){
//         return a - b;
//     }    
// }

// const plus = calculater.plus(5, 8);
// const minus = calculater.minus(10, 6);

// console.log(plus);
// console.log(minus);

// const title = document.getElementById("title");
// const title = document.querySelector("#title");

// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";
// console.dir(title);
// console.dir(document);

// const age = prompt("How old are you?");

// console.log(age);
// if(age > 18){
//     console.log("You can drink");
// } else{
//     console.log("You can't");
// }

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d"

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);

    // const currentClass = title.className;
    // if(currentClass !== CLICKED_CLASS){
    //     title.className = CLICKED_CLASS;
    // } else{
    //     title.className ="";
    // }

    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // } else{
    //     title.classList.remove(CLICKED_CLASS);
    // }

    // const currentColor = title.style.color; 
    // if(currentColor === BASE_COLOR){
    //     title.style.color = OTHER_COLOR;
    // } else{
    //     title.style.color = BASE_COLOR;
    // }
}

function init(){
    // title.style.color = BASE_COLOR;
    // title.style.cursor = "pointer";
    title.addEventListener("click", handleClick);
} //초기화 함수
init();
