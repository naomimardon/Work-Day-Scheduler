$(function(){

//DOM Variables
let currentDay = $("#currentDay");
let container = $(".container");

//function to set the day in the jumbotron
function displayDay() {
    let day = moment().format("dddd, Do MMMM YYYY")
    currentDay.text(day);
}

function renderTimeBlocks() {
    let row = $("<div>").addClass("row input-group mb-3");
        let timeBlock = $("<div>").addClass("input-group-prepend time-block");
            let hour = moment(9, "h").format("ha");
            let span = $("<span>").addClass("input-group-text hour").text(hour);
            timeBlock.append(span);
        let textArea = $("<input>").attr("type", "text").addClass("form-control textarea")
            .attr("placeholder", "Enter task here").attr("aria-label", "Enter task here")
            .attr("aria-describedby", "button-addon2");
        let buttonDiv = $("<div>").addClass("input-group-append");
            let saveButton = $("<button>").addClass("btn btn-outline-secondary saveBtn")
                .attr("type", "button").attr("id", "button-addon2").text("Save");
            buttonDiv.append(saveButton);
        row.append(timeBlock, textArea, buttonDiv);
    container.append(row);
}


renderTimeBlocks()













setInterval(displayDay, 1000);

});