anychart.onDocumentReady(function () {

anychart.data.loadJsonFile("./py-data.json", function (data) {

    // create a chart from the loaded data
var chart = anychart.graph(data);

    // set the title
chart.title("Test Network Graph");
	  // set the size of nodes

var nodes=chart.nodes();


nodes.normal().height(10);
nodes.hovered().height(12);
nodes.selected().height(12);

// set the fill of nodes
nodes.normal().fill("#172121");
nodes.hovered().fill("#173131");
nodes.selected().fill("#173131");
 
// set the stroke of nodes
nodes.normal().stroke(null);
nodes.hovered().stroke("#333333", 3);
nodes.selected().stroke("#333333", 3);

    // draw the chart
    chart.container("container").draw();

    //iterations
    chart.layout().iterationCount(400);
//configuring tooltips
var id="lmao"
var id_1=""
var id_2=""
	chart.tooltip().useHtml(true);
	chart.tooltip().format(function(){
		if(this.type=="node"){
			id=this.id;
			return "<span style='font-weight:bold'>" + this.id;
		}
		else{
			id_1=this.getData("from");
			id_2=this.getData("to");
			return this.getData("from")+"->"+this.getData("to");
		}
	})

//console.log(nodes.selected())
const node_list = document.querySelectorAll('[id^=ac_path_]');
//console.log(node_list);

	//adding listener
	for(let i=0; i<node_list.length;i++){
		node_list[i].addEventListener("click",function(){
		openNav();
		if(id!="lmao"){
			get_ip(id);
		}
		else{
			get_ip(id_1);
			get_ip(id_2);
		}

		//console.log(id);
		});
	};
    })
});
async function get_ip(ip){
	let obj;
	let index;
	const res = await fetch("./pretty_ip.json")
	if(res.ok){
	obj = await res.json();
	console.log(obj);
	console.log(obj.length);
	for(let i=0;i<obj.length;i++){
		if(obj[i].query==ip){
			index=i;
			break
		}
	}
	element=obj[index];
	console.log(element.lon)
	
	//google maps stuff
	let map;

async function initMap() {
  // The location of Uluru
	
  const position = { lat: Number(element.lat), lng: Number(element.lon),};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Location of"+element.as,
  });
}

initMap();


	console.log(element);
	const someElement = document.getElementById("some");
	someElement.innerHTML=`
	<p id="some" class="some">
	<strong>Country:</strong> ${element.country}<br>
        <strong>Latitude:</strong> ${element.lat}<br>
        <strong>Longitude:</strong> ${element.lon}<br>
        <strong>Organization:</strong> ${element.org}<br>
        <strong>AS:</strong> ${element.as}
	</p>
`		
	} else{
		console.error("Network Error");
	}

}








/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


