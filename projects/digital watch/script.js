
let p = document.querySelector("p");

const time = ()=>{
   let currDate = new Date();
currDate = currDate.toLocaleTimeString(); 
console.log(currDate);
p.innerText = currDate;
}
setInterval(time ,1000);
