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
        
        // create a variable for this function to use the current time
        var currentHour = moment().hour();

        // loop an if/else statement over all time blocks (past/present/future)
        $(".time-block").each(function() {
            var timeBlockHour =  parseInt($(this).attr("id").split("hour")[1]);

            // change the color with if/else according to css
            if (timeBlockHour < currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (timeBlockHour === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // load any saved data from local storage using getItem

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    // call tracker function
    hourTracker();
})