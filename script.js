// Display current date and time in the header or the navbar
var currentDate = moment().format("dddd, LL");
console.log(currentDate);
$("#current-date").append(currentDate);

var currentTime = moment().format("LT");
console.log(currentTime);
$("#current-time").append(currentTime);

var now = new Date().getHours();



// Getting function(s) ready
window.onload = function() {
  trackTime();
}


  // Defining and logging the main elements in the scheduler
  var hourId = $(".hour");
  console.log(hourId);

  var calendarRow = $(".calendar-row");
  console.log(calendarRow);


  // Setting the classes for each time block on the scheduler
  function trackTime() {

    // Get current hours 
    var timeNow = moment().hour();

      // Check if time NOW matches time of time-block, and assign classes for background color indicators
      // 9am
      if (timeNow > 9) {
        $(".text-area-1").addClass("past");
      }
      else if (timeNow === 9) {
        $(".text-area-1").addClass("present");
      }
      else if (timeNow < 9) {
        $(".text-area-1").addClass("future");
      }

      // 10am
      if (timeNow > 10) {
        $(".text-area-2").addClass("past");
      }
      else if (timeNow === 10) {
        $(".text-area-2").addClass("present");
      }
      else if (timeNow < 10) {
        $(".text-area-2").addClass("future");
      }

      // 11am
      if (timeNow > 11) {
        $(".text-area-3").addClass("past");
      }
      else if (timeNow === 11) {
        $(".text-area-3").addClass("present");
      }
      else if (timeNow < 11) {
        $(".text-area-3").addClass("future");
      }

      // 12pm
      if (timeNow > 12) {
        $(".text-area-4").addClass("past");
      }
      else if (timeNow === 12) {
        $(".text-area-4").addClass("present");
      }
      else if (timeNow < 12) {
        $(".text-area-4").addClass("future");
      }

      // 1pm
      if (timeNow > 13) {
        $(".text-area-5").addClass("past");
      }
      else if (timeNow === 13) {
        $(".text-area-5").addClass("present");
      }
      else if (timeNow < 13) {
        $(".text-area-5").addClass("future");
      }

      // 2pm
      if (timeNow > 14) {
        $(".text-area-6").addClass("past");
      }
      else if (timeNow === 14) {
        $(".text-area-6").addClass("present");
      }
      else if (timeNow < 14) {
        $(".text-area-6").addClass("future");
      }

      // 3pm
      if (timeNow > 15) {
        $(".text-area-7").addClass("past");
      }
      else if (timeNow === 15) {
        $(".text-area-7").addClass("present");
      }
      else if (timeNow < 15) {
        $(".text-area-7").addClass("future");
      }

      // 4pm
      if (timeNow > 16) {
        $(".text-area-8").addClass("past");
      }
      else if (timeNow === 16) {
        $(".text-area-8").addClass("present");
      }
      else if (timeNow < 16) {
        $(".text-area-8").addClass("future");
      }

      // 5pm
      if (timeNow > 17) {
        $(".text-area-9").addClass("past");
      }
      else if (timeNow === 17) {
        $(".text-area-9").addClass("present");
      }
      else if (timeNow < 17) {
        $(".text-area-9").addClass("future");
      }
      
    }

  // Setting item to local storage for each text area, and getting from local storage
  $(".saveBtn-1").on("click", function() {
    var input_textArea = $(".text-area-1");
    var output_textDiv = $(".text-area-1");

    localStorage.setItem("9AM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val()

    output_textDiv.textContent = localStorage.getItem("9AM");
    input_textArea.value = localStorage.getItem("9AM");
  })

  $(".saveBtn-2").on("click", function() {
    var input_textArea = $(".text-area-2");
    var output_textDiv = $(".text-area-2");

    localStorage.setItem("10AM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();

    output_textDiv.textContent = localStorage.getItem("10AM");
    input_textArea.value = localStorage.getItem("10AM");
  })

  $(".saveBtn-3").on("click", function() {
    var input_textArea = $(".text-area-3");
    var output_textDiv = $(".text-area-3");

    localStorage.setItem("11AM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();
  
    output_textDiv.textContent = localStorage.getItem("11AM");
    input_textArea.value = localStorage.getItem("11AM");
  })

  $(".saveBtn-4").on("click", function() {
    var input_textArea = $(".text-area-4");
    var output_textDiv = $(".text-area-4");

    localStorage.setItem("12PM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();

    output_textDiv.textContent = localStorage.getItem("12PM");
    input_textArea.value = localStorage.getItem("12PM");
  })

  $(".saveBtn-5").on("click", function() {
    var input_textArea = $(".text-area-5");
    var output_textDiv = $(".text-area-5");

    localStorage.setItem("1PM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();

    output_textDiv.textContent = localStorage.getItem("1PM");
    input_textArea.value = localStorage.getItem("1PM");
  })

  $(".saveBtn-6").on("click", function() {
    var input_textArea = $(".text-area-6");
    var output_textDiv = $(".text-area-6");

    localStorage.setItem("2PM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();

    output_textDiv.textContent = localStorage.getItem("2PM");
    input_textArea.value = localStorage.getItem("2PM");
  })

  $(".saveBtn-7").on("click", function() {
    var input_textArea = $(".text-area-7");
    var output_textDiv = $(".text-area-7");

    localStorage.setItem("3PM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();

    output_textDiv.textContent = localStorage.getItem("3PM");
    input_textArea.value = localStorage.getItem("3PM");
  })

  $(".saveBtn-8").on("click", function() {
    var input_textArea = $(".text-area-8");
    var output_textDiv = $(".text-area-8");
    
    localStorage.setItem("4PM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();

    output_textDiv.textContent = localStorage.getItem("4PM");
    input_textArea.value = localStorage.getItem("4PM");
  })

  $(".saveBtn-9").on("click", function() {
    var input_textArea = $(".text-area-9");
    var output_textDiv = $(".text-area-9");

    localStorage.setItem("5PM", input_textArea.val());
    output_textDiv.textContent = input_textArea.val();

    output_textDiv.textContent = localStorage.getItem("5PM");
    input_textArea.value = localStorage.getItem("5PM");
  })