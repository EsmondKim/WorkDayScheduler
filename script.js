$(document).ready(function() { 
    console.log(moment().format());
    console.log(moment().hours());

    console.log("Test", currentDayAndTime);
    $("#currentDayAndTime").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    function hourReady() {
        let headerTime = moment().hours();    
        //for each loops
        $(".time-block").each(function() {
            let blockHour = parseInt($(this).attr("id"));
            //conditionals for color coding .past .future
        })
    }
}) 

//Save button times
//text input
//current hour
//block hours
//header element to append actual time
//moment.hours, you can reference the id on the calendar row and directly compare it to the moment.hours