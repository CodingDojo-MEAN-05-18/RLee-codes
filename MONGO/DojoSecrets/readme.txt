Dojo Secrets
Create an application that builds on top of the login and registration application you built in 
the previous assignment.
    a. Dashboard Page from previous assignment will now display all secrets .
        i. dynamically generated secrets will link to a page when comments may be left on the
            selected secret.
        ii.  delete button in secret listing will be visible only to the user who left the secret.
    b. Secrets array must be added to the User Schema
After a user is logged into the application, they may leave a Dojo Secret.

Users may delete their own secrets, but no others.

Upon clicking a secret, redirect the user to a details page, where the user may view all the 
comments on the secret and leave their own anonymous secret.

Include backend validations to ensure that no forms are submitted blank.

Remember to plan your database carefully so that you are taking advantage of Mongo's strengths. 
Hint: No joins!








Part 1 below here.
-----------------------------------------------------------------------------------------



1. Assignment: Login and Registration
Create a login and registration that uses back-end validation, catches errors, and displays them to the client.

Required Registration Fields:

email
first_name
last_name
password
birthday


Each registration field should have at least one back-end validation on it!
Emails should be unique and valid emails.
How are we going to deal with uniqueness errors? 
The login form should just have fields for password and email.
For this assignment, we recommend that you write all your own code to check for possible errors. 
After you have successfully checked for errors with your own code and passed back error messages to the user, implement mongoose validations.


1. index.ejs will contain form for registration & a button to go to the login page
    a. registration will automatically log in the new user on successful Registration
    b. basic validations will run on the server before data is submitted to DB
        i. regex for email format, no duplicate emails
        ii. back-end validations, value: required & min length will be applied on data insertion to db
    c. server-side and back-end validations will flash to the index page to alert the user. 

2. login.ejs will contain a form for login data & button to go to the registration page. 
    a. basic validations will run on the server before db is quieried.
        i. no empty forms submitted.
        ii. regex for valid email format
    b. any errors will flash to login page to alert user.

3. dashboard will display all user data & contain a button to logout
    a. logout will clear session data & redirect to login page.