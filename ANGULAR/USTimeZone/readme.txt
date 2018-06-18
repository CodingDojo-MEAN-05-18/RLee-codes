Create an app which displays the current time based on the time-zone the 
user selects as shown below in the wireframe. 
The most recent button clicked should appear with a yellow background.

Note: Don't worry about having the time-zone be accurate based on the user's
physical location, assume your location to be the origin of all users using 
your app. 

As a bonus, attempt to present the accurate time-zone, regardless of where we
run this application. The purpose of this assignment is to learn how to use
the events, data binding, structural and attribute directives.

// Gets UTC and converts to selected timezone via offset passed in as 
    optional parameter 'tz'
// This will work whatever the local timezone of the user.
// BONUS OBJECTIVE COMPLETE

Requirements:

Create 4 bottons.
    Each button should cause the appropriate datetime to appear below.
    Make sure the last button clicked is also the only button currently highlighted
        (**exception added for "CLEAR" button which is never highlighted)
    
Use Date.now for the current time, and consieder how you can modify the datetime
object to reflect a different time.

The 'Clear' button should clear the datetime text and the previous button that
was highlighted should no longer be highlighted.