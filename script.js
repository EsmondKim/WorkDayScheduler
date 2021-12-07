$(document).ready(function () {
  console.log(moment().format());
  console.log(moment().hours());
  let currentHour = moment().hours();

  //Header element to add day, date and time.
  $("#currentDayAndTime").text(
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  );

  //The Function that changes blocks to the appropriate color
  function hourReady() {
    //for each loops
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id"));
      let blockHourVariable =
        "#blockHourVariable" + parseInt($(this).attr("id"));
      if (blockHour < currentHour) {
        $(blockHourVariable).addClass("past");
      }

      if (blockHour === currentHour) {
        $(blockHourVariable).addClass("present");
      }

      if (blockHour > currentHour) {
        $(blockHourVariable).addClass("future");
      }
    });
  }
  hourReady();

  //Function to write appointments to local memory.
  $("#0Button").click(function () {
    window.localStorage.setItem(
      "12am",
      JSON.stringify($("#blockHourVariable0").val())
    );
  });

  $("#1Button").click(function () {
    window.localStorage.setItem(
      "1am",
      JSON.stringify($("#blockHourVariable1").val())
    );
  });

  $("#2Button").click(function () {
    window.localStorage.setItem(
      "2am",
      JSON.stringify($("#blockHourVariable2").val())
    );
  });

  $("#3Button").click(function () {
    window.localStorage.setItem(
      "3am",
      JSON.stringify($("#blockHourVariable3").val())
    );
  });

  $("#4Button").click(function () {
    window.localStorage.setItem(
      "4am",
      JSON.stringify($("#blockHourVariable4").val())
    );
  });

  $("#5Button").click(function () {
    window.localStorage.setItem(
      "5am",
      JSON.stringify($("#blockHourVariable5").val())
    );
  });

  $("#6Button").click(function () {
    window.localStorage.setItem(
      "6am",
      JSON.stringify($("#blockHourVariable6").val())
    );
  });

  $("#7Button").click(function () {
    window.localStorage.setItem(
      "7am",
      JSON.stringify($("#blockHourVariable7").val())
    );
  });

  $("#8Button").click(function () {
    window.localStorage.setItem(
      "8am",
      JSON.stringify($("#blockHourVariable8").val())
    );
  });

  $("#9Button").click(function () {
    window.localStorage.setItem(
      "9am",
      JSON.stringify($("#blockHourVariable9").val())
    );
  });

  $("#10Button").click(function () {
    window.localStorage.setItem(
      "10am",
      JSON.stringify($("#blockHourVariable10").val())
    );
  });

  $("#11Button").click(function () {
    window.localStorage.setItem(
      "11am",
      JSON.stringify($("#blockHourVariable11").val())
    );
  });

  $("#12Button").click(function () {
    window.localStorage.setItem(
      "12pm",
      JSON.stringify($("#blockHourVariable12").val())
    );
  });

  $("#13Button").click(function () {
    window.localStorage.setItem(
      "1pm",
      JSON.stringify($("#blockHourVariable13").val())
    );
  });

  $("#14Button").click(function () {
    window.localStorage.setItem(
      "2pm",
      JSON.stringify($("#blockHourVariable14").val())
    );
  });

  $("#15Button").click(function () {
    window.localStorage.setItem(
      "3pm",
      JSON.stringify($("#blockHourVariable15").val())
    );
  });

  $("#16Button").on("click", function () {
    window.localStorage.setItem(
      "4pm",
      JSON.stringify($("#blockHourVariable16").val())
    );
  });

  $("#17Button").click(function () {
    window.localStorage.setItem(
      "5pm",
      JSON.stringify($("#blockHourVariable17").val())
    );
  });

  $("#18Button").click(function () {
    window.localStorage.setItem(
      "6pm",
      JSON.stringify($("#blockHourVariable18").val())
    );
  });

  $("#19Button").click(function () {
    window.localStorage.setItem(
      "7pm",
      JSON.stringify($("#blockHourVariable19").val())
    );
  });

  $("#20Button").click(function () {
    window.localStorage.setItem(
      "8pm",
      JSON.stringify($("#blockHourVariable20").val())
    );
  });

  $("#21Button").click(function () {
    window.localStorage.setItem(
      "9pm",
      JSON.stringify($("#blockHourVariable21").val())
    );
  });

  $("#22Button").click(function () {
    window.localStorage.setItem(
      "10pm",
      JSON.stringify($("#blockHourVariable22").val())
    );
  });

  $("#23Button").click(function () {
    window.localStorage.setItem(
      "11pm",
      JSON.stringify($("#blockHourVariable23").val())
    );
  });

  function getFromLocalStorage() {
    let blockHour0Val = JSON.parse(window.localStorage.getItem("12am"));
    $("#blockHourVariable0").text(blockHour0Val);

    let blockHour1Val = JSON.parse(window.localStorage.getItem("1am"));
    $("#blockHourVariable1").text(blockHour1Val);

    let blockHour2Val = JSON.parse(window.localStorage.getItem("2am"));
    $("#blockHourVariable2").text(blockHour2Val);

    let blockHour3Val = JSON.parse(window.localStorage.getItem("3am"));
    $("#blockHourVariable3").text(blockHour3Val);

    let blockHour4Val = JSON.parse(window.localStorage.getItem("4am"));
    $("#blockHourVariable4").text(blockHour4Val);

    let blockHour5Val = JSON.parse(window.localStorage.getItem("5am"));
    $("#blockHourVariable5").text(blockHour5Val);

    let blockHour6Val = JSON.parse(window.localStorage.getItem("6am"));
    $("#blockHourVariable6").text(blockHour6Val);

    let blockHour7Val = JSON.parse(window.localStorage.getItem("7am"));
    $("#blockHourVariable7").text(blockHour7Val);

    let blockHour8Val = JSON.parse(window.localStorage.getItem("8am"));
    $("#blockHourVariable8").text(blockHour8Val);

    let blockHour9Val = JSON.parse(window.localStorage.getItem("9am"));
    $("#blockHourVariable9").text(blockHour9Val);

    let blockHour10Val = JSON.parse(window.localStorage.getItem("10am"));
    $("#blockHourVariable10").text(blockHour10Val);

    let blockHour11Val = JSON.parse(window.localStorage.getItem("11am"));
    $("#blockHourVariable11").text(blockHour11Val);

    let blockHour12Val = JSON.parse(window.localStorage.getItem("12pm"));
    $("#blockHourVariable12").text(blockHour12Val);

    let blockHour13Val = JSON.parse(window.localStorage.getItem("1pm"));
    $("#blockHourVariable13").text(blockHour13Val);

    let blockHour14Val = JSON.parse(window.localStorage.getItem("2pm"));
    $("#blockHourVariable14").text(blockHour14Val);

    let blockHour15Val = JSON.parse(window.localStorage.getItem("3pm"));
    $("#blockHourVariable15").text(blockHour15Val);

    let blockHour16Val = JSON.parse(window.localStorage.getItem("4pm"));
    $("#blockHourVariable16").text(blockHour16Val);

    let blockHour17Val = JSON.parse(window.localStorage.getItem("5pm"));
    $("#blockHourVariable17").text(blockHour17Val);

    let blockHour18Val = JSON.parse(window.localStorage.getItem("6pm"));
    $("#blockHourVariable18").text(blockHour18Val);

    let blockHour19Val = JSON.parse(window.localStorage.getItem("7pm"));
    $("#blockHourVariable19").text(blockHour19Val);

    let blockHour20Val = JSON.parse(window.localStorage.getItem("8pm"));
    $("#blockHourVariable20").text(blockHour20Val);

    let blockHour21Val = JSON.parse(window.localStorage.getItem("9pm"));
    $("#blockHourVariable21").text(blockHour21Val);

    let blockHour22Val = JSON.parse(window.localStorage.getItem("10pm"));
    $("#blockHourVariable22").text(blockHour22Val);

    let blockHour23Val = JSON.parse(window.localStorage.getItem("11pm"));
    $("#blockHourVariable23").text(blockHour23Val);
  }

  getFromLocalStorage();
});
