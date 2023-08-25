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
			return "<span style='font-weight:bold'>" + this.getData("from")+" -> "+this.getData("to");
		}
	})

//console.log(nodes.selected())
const node_list = document.querySelectorAll('[id^=ac_path_]');
const click_list = document.querySelectorAll('[id^=ac_rect_]');
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
		}

		//console.log(id);
		});
	};
	console.log(click_list);
	for(let i=0; i<click_list.length;i++){
		click_list[i].addEventListener("click",function(){
		closeNav();
		})
	}
    })
});
async function get_ip(ip){
	let obj;
	let index;
	const res = await fetch("./pretty_ip.json")
	if(res.ok){
	obj = await res.json();
	//console.log(obj);
	//console.log(obj.length);
	for(let i=0;i<obj.length;i++){
		if(obj[i].query==ip){
			index=i;
			break
		}
	}
	element=obj[index];
	//console.log(element.lon)
	
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
    zoom: 9,
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

	var as="";
	//console.log(element);
	const someElement = document.getElementById("some");
	const another = document.getElementById("IP");

	if(element.as==""){
	as="Unknown";
	}
	else{
	as=element.as;
	}

	another.innerHTML=`
	IP : ${ip}`
	someElement.innerHTML=`
	<span style="font-weight:400">Country:</span> ${element.country}<br>
        <span style="font-weight:400">Latitude:</span> ${element.lat}<br>
        <span style="font-weight:400">Longitude:</span> ${element.lon}<br>
        <span style="font-weight:400">Organization:</span> ${element.org}<br>
        <span style="font-weight:400">AS:</span> ${as}
`		
	} else{
		console.error("Network Error");
	}

}








/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "550px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


