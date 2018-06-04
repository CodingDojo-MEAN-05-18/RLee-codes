Use Otters instead of Mongooses

GET "/" : Index page should display all of the otters in the family.  (Use display tiles)
GET "/otters/:id" :  Displays information about one mongoose.
    use custom id field instead of Mongo's default ids
GET "otters/new" : Displays a form for making a new otter
    form should POST to "/otters"
POST "/otters" : Process form data from "otters/new" and save the new otter to the db
GET "/otters/edit/:id" : Should show a formm to edit an existing otter
    again making use of the custom id field
POST "/otters/:id" : Process form data from "otters/edit/:id" and save changes to the db
POST "/otters/destroy/:id" : Should delete the selected mongo from the database by ID
