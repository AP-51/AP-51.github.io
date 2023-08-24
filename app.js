anychart.onDocumentReady(function () {

anychart.data.loadJsonFile("./py-data.json", function (data) {

    // create a chart from the loaded data
var chart = anychart.graph(data);

    // set the title
chart.title("Test Network Graph");
	  // set the size of nodes

var nodes=chart.nodes();

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4c992a292c2401dfde753761a39f58651fc9ce22
=======

>>>>>>> a50a4c08124b9cb11da56bcb7dacf13b6e4de4e7
nodes.normal().height(30);
nodes.hovered().height(45);
nodes.selected().height(45);

// set the fill of nodes
nodes.normal().fill("#dd0099");
nodes.hovered().fill("#ff00dd");
nodes.selected().fill("#dd0099");
 
// set the stroke of nodes
nodes.normal().stroke(null);
nodes.hovered().stroke("#333333", 3);
nodes.selected().stroke("#333333", 3);

    // draw the chart
    chart.container("container").draw();

<<<<<<< HEAD
<<<<<<< HEAD
    //iterations
    chart.layout().iterationCount(30);


//console.log(nodes.selected())
const node_list = document.querySelectorAll('[id^=ac_path_1]');

	//adding listener
	for(let i=0; i<node_list.length;i++){
		node_list[i].addEventListener("click",function(){
		openNav();
		});
	};
    })
});



/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
=======
    //iterate ig?
    chart.layout().iterationCount(10);
=======
    //iterations
    chart.layout().iterationCount(30);
>>>>>>> a50a4c08124b9cb11da56bcb7dacf13b6e4de4e7


//console.log(nodes.selected())
const node_list = document.querySelectorAll('[id^=ac_path_]');

	//adding listener
	for(let i=0; i<node_list.length;i++){
		node_list[i].addEventListener("click",function(){
		openNav();
		});
	};
    })
});
<<<<<<< HEAD
>>>>>>> 4c992a292c2401dfde753761a39f58651fc9ce22
=======



/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
>>>>>>> a50a4c08124b9cb11da56bcb7dacf13b6e4de4e7
