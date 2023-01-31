$(function(){

//DOM Variables
let currentDay = $("#currentDay");
let container = $(".container");

//function to set the day in the jumbotron
function displayDay() {
    let day = moment().format("dddd, Do MMMM YYYY");
    currentDay.text(day);
}

function setColor(element) {
    let textAreaID = element.attr("id");
    let textAreaNum = parseInt(textAreaID);
    let currentHour = moment().format("H:mm");
    let currentHourNum = parseInt(currentHour);

    if (textAreaNum < currentHourNum) {
        element.addClass("past");
        element.removeClass("present future");
    } else if (textAreaNum === currentHourNum) {
        element.addClass("present");
        element.removeClass("future past");
    } else {
        element.addClass("future");
        element.removeClass("past present");
    };
};

function handleSave (element) {
    let textAreaID = element.attr("id");
    let textInput = element.val().trim();

    localStorage.setItem(textAreaID, textInput);
};

function renderTimeBlocks() {
for (let i = 9; i < 18; i++) {
    let row = $("<div>").addClass("row input-group mb-3");
        let timeBlock = $("<div>").addClass("input-group-prepend time-block");
            let hour = moment(i, "HH").format("ha");
            let hour24 = moment(i, "HH").format("H:mm");
            let span = $("<span>").addClass("input-group-text hour").text(hour);
            timeBlock.append(span);

        let textArea = $("<input>").attr("type", "text").addClass("form-control textarea")
            .attr("placeholder", "Enter task here").attr("aria-label", "Enter task here")
            .attr("aria-describedby", "button-addon2").attr("id", hour24).val(localStorage.getItem(hour24));
            
            setInterval(setColor, 1000, textArea);

        let buttonDiv = $("<div>").addClass("input-group-append");
            let saveButton = $("<button>").addClass("btn btn-outline-secondary saveBtn")
                .attr("type", "button").attr("id", "button-addon2").text("Save");
            buttonDiv.append(saveButton);

        row.append(timeBlock, textArea, buttonDiv);

    container.append(row);
    
    saveButton.on("click", function() {
        if (textArea.val() === "") {
            return;
        }
        handleSave(textArea);
        });
    };


   
};

renderTimeBlocks();

setInterval(displayDay, 1000);

});

