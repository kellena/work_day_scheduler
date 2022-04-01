// make sure everything is properly linked to HTML **

// create basic HTML to resemble mockup
// - create 9 rows with 3 columns each **
// - hour column (size 1)
// - description column (size 10)
// - save button column will be (size 1)

// set up an event handler for the save button
$(".saveBtn").on("click", saveTimeBlock)

function saveTimeBlock(){
    localStorage.setItem("hourSlot9", hour + description)
    }

// - listen for clicks on each time block's save button **
// - save it to local storage
// - each row saves that specific row rather than the whole doc 

// load any saved data from local storage

function loadSavedData(){
    localStorage.getItem()
}

// figure out how to enter text in each the main row box
// - possible text area, or check bootstrap for formatting



// display day, month, and day of month
// moment.js, figure out formatting
// - how to track hours
// - moment().startOf('hour').fromNow();

// color coding of time blocks
// - function to track hours

function timeColor(){
    var currentHour = moment().format('h:mm:ss a');


}

// - - if currentHour > timeBlockHour, set boxes to gray (past)
// - - else if currentHour = timeBlockHour, set boxes to red (present)
// - - else set time blocks to green (future)
// - - look for times at current hour and up to the next hour