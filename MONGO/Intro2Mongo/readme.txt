Assignment: Intro to MongoDB
For This section, we want you to do the following operations in a MongoDB database. Work with a partner or a small group so everyone gets a chance to collaborate and work as a team. For some of these, you may have to refer to MongoDB's operator documentation. This is one of the most important assignments in this section, make sure you answer all questions and take notes for future assignments.

(Format below is:

requirement: 
answer

)

Create a database called 'my_first_db':
use my_first_db

Create students collection:
db.createCollection("students")

Each document you insert into this collection should have the following format: 
({	
	name: STRING, 
	home_state: STRING, 
	lucky_number: NUMBER, 
	birthday: {month: NUMBER, day: NUMBER, year: NUMBER}
})

Create 5 students with the appropriate info:
db.students.insert({ name: "Cynthia", home_state : "Wyoming", lucky_number: 1, birthday : {month: 02, day: 24, year: 1974}  })
db.students.insert({ name: "Shannon", home_state : "Tennessee", lucky_number: 7, birthday : {month: 03, day: 25, year: 1975} })
db.students.insert({ name: "Ray", home_state: "Georgia", lucky_number: 3, birthday : {month: 05, day: 09, year: 1978} })
db.students.insert({ name: "Barret", home_state: "Texas", lucky_number: 10, birthday : {month: 08, day: 08, year: 1984} })
db.students.insert({name: "Manju", home_state: "Washington", lucky_number: 31, birthday: { month:09, day: 21, year: 1992 } })


Get all students:
db.students.find()

Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo):
db.students.find({home_state: "California"})
db.students.find({home_state: "Washington"}).pretty()

Get all students whose lucky number is:
greater than 3
db.students.find({lucky_number: {$gt: 3} })

less than or equal to 10:
db.students.find({lucky_number: {$lte: 10} })

between 1 and 9 (inclusive):
db.students.find({lucky_number: {$in: [1,2,3,4,5,6,7,8,9] } })

Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 
'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.updateMany({}, {$set:{interests: ["coding", "brunch", "MongoDB"] } })

Add some unique interests for each particular student into each of their interest arrays.
db.students.update({ name: "Cynthia" }, {$addToSet: {interests: "hopscotch"}})
db.students.update({name: "Shannon"}, {$addToSet: {interests: "twister"}})
db.students.update({name: "Ray"}, {$addToSet: {interests: "chess"}})
db.students.update({name: "Barret"}, {$addToSet: {interests: "gunfighting"}})
db.students.update({name: "Manju"}, {$addToSet: {interests: "hacking"}})

Add the interest 'taxes' into someone's interest array.
db.students.update({name: "Cynthia"}, {$push: {interests: "taxes"}})

Remove the 'taxes' interest you just added.
db.students.update({name: "Cynthia"}, {$pop: {interests: 1}})

Remove all students who are from California (or Washington).
db.students.remove({home_state: "California"})
db.students.remove({home_state: "Washington"})


Remove a student by name. 
db.students.remove({name: "Cynthia"})

Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt: 5}}, true)

Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({},{$set: {number_of_belts: 0}})

Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({home_state: "Washington"}, {$inc{number_of_belts: 1}})

Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany({}, {$rename: {"number_of_belts": "belts_earned"}})

Remove the 'lucky_number' field.
db.students.updateMany({}, {$unset: {lucky_number: ""}})

Add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({},{$currentDate:{updated_on: true}})
