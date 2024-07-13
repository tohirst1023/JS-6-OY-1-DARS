// setTimeout(function () {
//   alert("Assalomu aleykom");
// }, 3000);


// setInterval(function () {
//     console.log ("Assalomu aleykom")
// },2000);

 
let hoursEL  = document.querySelector(".hours");
let minutesEL = document.querySelector(".minutes");
let secondsEL = document.querySelector(".seconds");

setInterval(function () {
    let date = new Date ();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hoursEL.textContent = hours;
    minutesEL.textContent = minutes;
    secondsEL.textContent = seconds;


}, 1000)