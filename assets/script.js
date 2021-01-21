$(document).ready(function() {
var todaysDate = moment().format('LL'); 
var currentTime = moment().hour();
var $textArea = $("textarea");

console.log(currentTime);

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

function setCalendar () {
    $textArea.each(function() {
        $id = $(this).attr('data-value');
        $activity = localStorage.getItem($id);

        if ($activity !== null) {
            $(this).children(".col-sm-10").val($activity)
        }
    });
}

setCalendar();
// create afunction to save info to local storage using info

$(".saveBtn").on("click", function () {
    $timeOfEvent = $(this).parent().attr("id");
    $textInfo = $(this).prev().val().trim();

    localStorage.setItem($timeOfEvent, JSON.stringify($textInfo));
    // console.log(timeOfEvent, textInfo);
  
    // console.log($(this));
    // console.log($(this).prev().val().trim());
    
    // console.log($timeOfEvent);


})
console.log(localStorage);

});