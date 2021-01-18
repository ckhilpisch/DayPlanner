var todaysDate = moment().format('LL'); 
var currentTime = moment().format('LT');

console.log(currentTime);




$("#currentDay").html(todaysDate);

// create a fumction to show the date and time using moment
// use function to determine a class of either past, present, or future

// add moment to p id=currentDay


// function for saving items
// $( ".saveBtn" ).click(function() {
//     var timeValue = ($(this).attr("data-value"));
//     timeValue = parseInt(timeValue);

//     if (timeValue === ) {
//         $addClass (.present);
//     } else if {
//         (timeValue < ) {
//             $addClass.("future");
//         } else if {
//             (timeValue >) {
//                 $addClass.("past");
//             }
//         }
//     }
// });
console.log(moment().format('LL'));
