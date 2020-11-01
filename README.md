# WorkDayScheduler

This is a work day scheduler to help busy office workers plan the hours between 9 am and 5 pm.

The scheduler uses moment.js to display and to check the current time.
The current day date and time is shown at the top of the calendar. 
The scheduler displays blocks for standard business hours.
The code uses if statements and variables to check if blocks are in the past, present, or future, and color codes the blocks.
Events can be saved by typing into an hour's block.  Those events are saved into local storage when a user clicks the save button, and the events persist in local storage when the browser is opened and closed.

Deployed website:
[Here is a link to the deployed website](https://esmondkim.github.io/WorkDayScheduler/) 

Sceenshots
![And a screenshot](/Assets/schedulerscreenshot.jpg)

This is the User Story and Acceptance Criteria for the site.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```