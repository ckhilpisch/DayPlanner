$(document).ready(function() {
var todaysDate = moment().format('LL'); 
var currentTime = moment().hour();
var timeBlock = $(".time-block");
var textArea = $("textarea");



// add moment to p id=currentDay
$("#currentDay").html(todaysDate);


// create a fumction to show the date and time using moment
// use function to determine a class of either past, present, or future
function classAddition() {
    var timeValue = ($(textArea).attr("data-value"));
    timeValue = parseInt(timeValue);

    if (timeValue === currentTime) {
        $("textArea").addClass("present");
    } else if 
        (timeValue > currentTime) {
            $("textArea").addClass("future");
    } else if 
        (timeValue < currentTime) {
            $("textArea").addClass("past");
    }
    console.log(timeValue);
}
classAddition();



});