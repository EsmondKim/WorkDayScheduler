$(document).ready(function() { 
    console.log(moment().format());
    console.log(moment().hours());
    let currentHour = (moment().hours());
//Header element to add day, date and time.
    $("#currentDayAndTime").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    //The Function that changes blocks to the appropriate color
   
    function hourReady() {  
        //for each loops
        $(".time-block").each(function() {
            let blockHour = parseInt($(this).attr("id"));
            if(blockHour < currentHour) {
                $("#" + blockHour).addClass("past");
            }

            if(blockHour === currentHour) {
                $("#" + blockHour).addClass("present");
            }
            
            if(blockHour > currentHour) {
                $("#" + blockHour).addClass("future");
            }
        
        })
    } hourReady()
    



//Save button times
//text input

}) 

