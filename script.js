var todaysDate = moment().format('LL'); 
var currentTime = moment().format('LT');

$("#currentDay").html(todaysDate);

// create a fumction to show the date and time using moment
// use function to determine a class of either past, present, or future

// add moment to p id=currentDay


// function for saving items
$(window).load(function() {
    var timeValue = ($(this).attr("data-value"));
    timeValue = parseInt(timeValue);

    if (timeValue === currentTime) {
        $("textarea").addClass(".present");
    } else if 
        (timeValue < currentTime) {
            $("textarea").addClass(".future");
    } else if 
        (timeValue > currentTime) {
            $("textarea").addClass(".past");
    }
})
