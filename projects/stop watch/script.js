let timer = document.querySelector("p");
let start = document.querySelector("#btn1");
let stop = document.querySelector("#btn2");
let reset = document.querySelector("#btn3");

let count = "0";
let interval;
const startb =()=>{
    clearInterval(interval);

interval = setInterval(()=>{
    count++;
    timer.innerText = count;

},1000);

}
 
const stopb = ()=>{
    clearInterval(interval);
}
const clearb=()=>{
    count="0";
    clearInterval(interval);
     timer.innerText=count;
}


start.addEventListener("click",startb);
stop.addEventListener("click",stopb);
reset.addEventListener("click",clearb);


