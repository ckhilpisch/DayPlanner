$(document).ready(function() {
var todaysDate = moment().format('LL'); 
var currentTime = moment().hour();
var $textArea = $("textarea");
// add moment to p id=currentDay
$("#currentDay").html(todaysDate);
// create a fumction to show the date and time using moment
// use function to determine a class of either past, present, or future
function classAddition() {
    $textArea.each(function(){

    $timeValue = parseInt($(this).attr('data-value'));

    if ($timeValue === currentTime) {
        $(this).addClass("present");
    } else if 
        ($timeValue > currentTime) {
            $(this).addClass("future");
    } else if 
        ($timeValue < currentTime) {
            $(this).addClass("past");
    }
    // console.log($timeValue);
    });
};
classAddition();
//create a function that loads information from local storage on to the page

function setCalendar () {
    $textArea.each(function() {
        $timeOfEvent = $(this).parent().attr("id");
        $activity = localStorage.getItem($timeOfEvent);

        if ($activity !== null) {
            $(this).val($activity)
        }
        console.log($activity);
    });
}

setCalendar();
// create afunction to save info to local storage using info

$(".saveBtn").on("click", function () {
    $timeOfEvent = $(this).parent().attr("id");
    $textInfo = $(this).prev().val().trim();
    localStorage.setItem($timeOfEvent, $textInfo);
})
console.log(localStorage);

});