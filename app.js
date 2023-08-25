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
nodes.hovered().fill("#dd0099");
nodes.selected().fill("#dd0099");
 
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
//function get_ip(ip){

	
//fetch("http://ip-api.com/json/"+ip+"?fields=org,as,country,lat,lon",{
//	method:"GET",
//	mode:"cors",
//	headers:{
//		"Access-Control-Allow-Origin":"http://ip-api.com",

//	},
//})
//	.then((response)=>response.json())
//	.then(data=>{obj=data;})
//	.then(()=>{return obj;})
//}
async function get_ip(ip){
	let obj;
	let index;
	const res = await fetch("./pretty_ip.json")
	if(res.ok){
	obj = await res.json();
	//console.log(obj);
	//console.log(obj.length);
	for(let i=0;i<obj.length;i++){
		if(obj[i].query=ip){
			index=i;
			break
		}
	}
	element=obj[index];
	console.log(element);
	const someElement = document.getElementById("some");
	someElement.innerHTML=`
	<p id="ips" class="ips">
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



//async function get_ip(ip) {
  //let obj;

//	const res = await fetch('http://ip-api.com/json/'+ip+'?fields=org,as,country,lat,lon',{
//		method:"GET",
//		mode:"cors",
//		headers:{
//			"Access-Control-Allow-Origin":"http://ip-api.com",
//		},
//	})

//  obj = await res.json();

//  console.log(obj);
//obj.then(()=>{document.getElementById("some").innerHtml="Organisation Name = "+obj.org+"</br>"+"Country = "+obj.country+"</br>"+"Latitude = "+obj.lat+"</br>"+"Longitude = "+obj.lon+"</br>"+"AS Number = "+obj.as+"</br>";});
  //return obj;





/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
