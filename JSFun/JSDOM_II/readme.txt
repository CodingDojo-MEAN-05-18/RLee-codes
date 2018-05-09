JavaScript DOM II
Fix the following code so its output matches the example.

<!DOCTYPE html>
<html>
<head>
	<title></title>
    <style type="text/css">
		/* border and styling for table data */
		td{
			border: 1px solid silver;
			text-align: center;
			width: 40px;
			height: 40px;
		}
		/* background and bolding for the first element of our rows and data */
		td:first-child, tr:first-child{
			background-color: silver;
			font-weight: bold;
		}
	</style>
</head>
<body>
	<div id="target"></div>
</body>
<script type="text/javascript">
	// define draw table
	function draw_table(){
		// create our html string, open up the table tag
		let html_string = "<table>";
		// outer loop
		for(let i = 0; i<13; i++){
			// create a row for each iteration of the outer loop
			html_string += "<tr>";
			// inner loop
			for(let j = 0; j<13; j++){
				// calculate our number
				let nums = i * j;
				// attach our table data tags around the number
				let data = "<td>" + nums + "</td>";
				// add it to the html
				html_string += data;
			}
			// after the inner loop, we cap our table rows
			html_string += "</tr>";
		}
		// after the outer loop, we cap our entire table
		html_string += "</table>";
		document.getElementById("target").innerHTML = html_string;
	}
	draw_table();
</script>
</html>
Currently, the draw_table() function is not properly outputting the multiplication table, and is filling one row and column up with 0. 
Modify draw_table() table so it matches the example.jpg output. 
You will need to add new logic to handle the edge cases!