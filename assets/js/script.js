// make sure everything is properly linked to HTML **
// display current date
var currentDay = moment().format('MMM Do YYYY')
$("#currentDay").html(currentDay);

// create basic HTML to resemble mockup
// - create 9 rows with 3 columns each **
// - hour column (size 1), description column (size 10), save button column (size 1)

// make sure jQuery detects doc is ready for editing
// (looked this up, new to me but most documents had this format)
$(document).ready(function () {
   
    // set up an event listener for the save button on click
    $(".saveBtn").on("click", function() {
        // create variables for hour and description to be saved, use "id" for all hours
        var hour = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();
       
        // save to local storage
        localStorage.setItem(hour, description)
    })

// create tracker for current time, give past/present/future
    function hourTracker () {

    }

})

// load any saved data from local storage

function loadSavedData(){
    localStorage.getItem()
}

// figure out how to enter text in each the main row box
// - possible text area, or check bootstrap for formatting
// (done, changed div to textarea in html)

// color coding of time blocks
// - function to track hours

function timeColor(){
    var currentHour = moment().format('h:mm:ss a');


}

// - - if currentHour > timeBlockHour, set boxes to gray (past)
// - - else if currentHour = timeBlockHour, set boxes to red (present)
// - - else set time blocks to green (future)
// - - look for times at current hour and up to the next hour