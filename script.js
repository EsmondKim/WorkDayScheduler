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

    $("#tenButton").click(function() {
        window.localStorage.setItem("ten", JSON.stringify($("#blockHourVariable10").val()))
        })
        
    $("#elevenButton").click(function() {
        window.localStorage.setItem("eleven", JSON.stringify($("#blockHourVariable11").val()))
        })
    
    $("#twelveButton").click(function() {
        window.localStorage.setItem("twelve", JSON.stringify($("#blockHourVariable12").val()))
        })    

    $("#thirteenButton").click(function() {
        window.localStorage.setItem("thirteen", JSON.stringify($("#blockHourVariable13").val()))
        })

    $("#fourteenButton").click(function() {
        window.localStorage.setItem("fourteen", JSON.stringify($("#blockHourVariable14").val()))
        })

    $("#fifteenButton").click(function() {
        window.localStorage.setItem("fifteen", JSON.stringify($("#blockHourVariable15").val()))
        })

    $("#sixteenButton").on("click", function() {
        window.localStorage.setItem("sixteen", JSON.stringify($("#blockHourVariable16").val()));
        })

    $("#seventeenButton").click(function() {
        window.localStorage.setItem("seventeen", JSON.stringify($("#blockHourVariable17").val()))
        })

}) 

