$(document).ready(function() {
var todaysDate = moment().format('LL'); 
var currentTime = moment().hour();
var textArea = $("textarea");
var dataValue = $("data-value");

// console.log(dataValue);

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

// create afunction to save info to local storage using info

$(".saveBtn").on("click", function () {
    timeOfEvent = $(this).parent().attr("id");
    // textInfo = $(this).prev().val().trim();

    // localStorage.setItem(timeOfEvent, textInfo);
    // console.log(timeOfEvent, textInfo);
  
    console.log($(this));
    console.log($(this).prev().val().trim());
    
    console.log(timeOfEvent);

})


});