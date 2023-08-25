anychart.onDocumentReady(function () {

anychart.data.loadJsonFile("./data.json", function (data) {

    // create a chart from the loaded data
var chart = anychart.graph(data);

    // set the title
chart.title("Visualizing the Internet Topology");
	  // set the size of nodes

var nodes=chart.nodes();



 
chart.interactivity().hoverGap(30);  
    // draw the chart
    chart.container("container").draw();

    //iterations
    chart.layout().iterationCount(400);

//configuring groups

var apnic = chart.group("APNIC");
var ripe = chart.group("RIPE");
var arin = chart.group("ARIN");
var global = chart.group("Global");
var unk = chart.group("Unknown");

//apnic
apnic.normal().height(18);
apnic.hovered().height(20);
apnic.selected().height(20);
apnic.normal().fill("#db2763");
apnic.normal().fill("#db2763");
apnic.normal().fill("#db2763");

//ripe
ripe.normal().height(17);
ripe.hovered().height(19);
ripe.selected().height(19);
ripe.normal().fill("#91cb3e");
ripe.normal().fill("#91cb3e");
ripe.normal().fill("#91cb3e");

//arin
arin.normal().height(17);
arin.hovered().height(19);
arin.selected().height(19);
arin.normal().fill("#6b7fd7");
arin.normal().fill("#6b7fd7");
arin.normal().fill("#6b7fd7");

//global
global.normal().height(14);
global.hovered().height(16);
global.selected().height(16);
global.normal().fill("#FAA613");
global.normal().fill("#FAA613");
global.normal().fill("#FAA613");

//unk
unk.normal().height(10);
unk.hovered().height(12);
unk.selected().height(12);
unk.normal().fill("#17A398");
unk.normal().fill("#17A398");
unk.normal().fill("#17A398");

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


