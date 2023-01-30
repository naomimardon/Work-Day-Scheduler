$(function(){

//DOM Variables
let currentDay = $("#currentDay");


//function to set the day in the jumbotron
function displayDay() {
    let day = moment().format("dddd, Do MMMM YYYY")
    currentDay.text(day);
}

setInterval(displayDay, 1000);




































});