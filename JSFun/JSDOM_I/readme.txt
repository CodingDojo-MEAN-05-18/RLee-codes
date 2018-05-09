Assignment: JavaScript DOM I
Complete the appendList function. appendList should take an array of strings and the id of a <ul> element, and append all elements of the array as <li> tags.

<html>
<body>
    <h1>Students</h1>
    <ul id="main">
        <!-- this is empty-->
    </ul> 
<script>
    function appendList(array, id){
        // finish this function
    };
    let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
    let target_id = "main";
    appendList(students, target_id);
</script>   
</body>
</html>

Bonus: Create a new function called superAppend that also takes the type of element we want to append.

function superAppend(array, element, id){
    // element can be p, li, h1, etc etc
};
