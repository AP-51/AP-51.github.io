anychart.onDocumentReady(function () {

anychart.data.loadJsonFile("./py-data.json", function (data) {

    // create a chart from the loaded data
var chart = anychart.graph(data);

    // set the title
chart.title("Test Network Graph");
	  // set the size of nodes

var nodes=chart.nodes();

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

    //iterate ig?
    chart.layout().iterationCount(10);

  });
});
