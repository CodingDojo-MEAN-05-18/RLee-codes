Real-Time Colors

Create a socket application that presents the user with 3 buttons for color options. 

When a user clicks on one of the color options, all currently connected socket users should have their 
entire background change to that color.

BONUS: As soon as a new user connects to our server, update their color with the most recent color 
previously selected by the last user.

my project
1. Server loads index.ejs & updates newly connected user's "#wrapper" background color to the last
    selected color.
2. Clicking one of the three color buttons emits a "colorChosen" event to the server along with the
    selected color's value.
3. "colorChosen" event triggers an io.emit, "selection" which conveys the current color selection to
    all connected users.
4. "selection" event triggers the update of the "#wrapper"'s background color to the selected color.