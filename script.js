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
            let blockHourVariable = "#blockHourVariable" + parseInt($(this).attr("id"));
            if(blockHour < currentHour) {
                $(blockHourVariable).addClass("past");
            }

            if(blockHour === currentHour) {
                $(blockHourVariable).addClass("present");
            }
            
            if(blockHour > currentHour) {
                $(blockHourVariable).addClass("future");
            }
        
        })
    } hourReady()

    //Function to write appointments to local memory.
    $("#nineButton").click(function() {
        window.localStorage.setItem("nine", JSON.stringify($("#blockHourVariable9").val()))
        })

    $("#sixteenButton").on("click", function() {
        window.localStorage.setItem("sixteen", JSON.stringify($("#blockHourVariable16").val()));
        console.log($("#blockHourVariable16").val());
        })

    

}) 

