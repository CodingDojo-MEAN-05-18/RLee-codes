Before you start coding this, first outline or write down the steps of accomplishing this.

For example:

Have the server render views/index.ejs that has the form for the user to fill out

The user fills out the form and submits

The submitted form gets sent to /result

The server recognizes when someone posts things to /result, grabs information from
the POST, and sends the POST data back as it renders views/results.ejs


My ver.

1. '/' displays the form for the user to fill out

2. submitted form goes to '/process' which logs the req.body containing the POST DATA to
session and redirects to '/result'

3. '/result' checks for the presence of the session data.
    a. if not present redirects to '/'
    b. if present saves the session stored req.body to a function scoped variable & clears the session, then
    renders the result page which displays the submitted data.