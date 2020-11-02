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

    function getFromLocalStorage() {
        let blockHourNineVal = JSON.parse(window.localStorage.getItem("nine"));
        $("#blockHourVariable9").text(blockHourNineVal);

        let blockHourTenVal = JSON.parse(window.localStorage.getItem("ten"));
        $("#blockHourVariable10").text(blockHourTenVal);

        let blockHourElevenVal = JSON.parse(window.localStorage.getItem("eleven"));
        $("#blockHourVariable11").text(blockHourElevenVal);

        let blockHourTwelveVal = JSON.parse(window.localStorage.getItem("twelve"));
        $("#blockHourVariable12").text(blockHourTwelveVal);

        let blockHourThirteenVal = JSON.parse(window.localStorage.getItem("thirteen"));
        $("#blockHourVariable13").text(blockHourThirteenVal);

        let blockHourFourteenVal = JSON.parse(window.localStorage.getItem("fourteen"));
        $("#blockHourVariable14").text(blockHourFourteenVal);

        let blockHourFifteenVal = JSON.parse(window.localStorage.getItem("fifteen"));
        $("#blockHourVariable15").text(blockHourFifteenVal);

        let blockHourSixteenVal = JSON.parse(window.localStorage.getItem("sixteen"));
        $("#blockHourVariable16").text(blockHourSixteenVal);

        let blockHourSeventeenVal = JSON.parse(window.localStorage.getItem("seventeen"));
        $("#blockHourVariable17").text(blockHourSeventeenVal);
        } getFromLocalStorage();

}) 