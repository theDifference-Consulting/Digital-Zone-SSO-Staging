
var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('lighthouse'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/lighthouse.json"
})

var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('construction01'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/construction01.json"
})

var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('construction02'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/construction02.json"
})

var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('construction03'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/construction03.json"
})

var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('podcast-alley'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/podcast-alley.json"
})

var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('qr-castle'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/qr-castle.json"
})

var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('sea-monster'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/sea-monster.json"
})

var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('airship'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/airship.json"
})

var waterAnim = lottie.loadAnimation({
	container: document.getElementById('water-anim'), // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: false, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/water-loop.json"
})

window.addEventListener('DOMContentLoaded', function() {
	zoneAnim.play();
	waterAnim.play();
	setTimeout( function() {
		document.getElementById('cloud-1').classList.add('reveal');
		document.getElementById('cloud-2').classList.add('reveal');
	},500);
	setTimeout( function() {
		 //match the zoom CSS transition timing 
		document.getElementById('scroll-path').classList.remove('zoom');
	},3000);

});

// ZOOM CONTROL
let multiplier = 1; //on change, reset DOM
setZoom(multiplier);

function setZoom(multiplier) {
	let baseWidth = 1920;
	let baseHeight = 1080;
	let zoomWidth = baseWidth * multiplier;
	let zoomHeight = baseHeight * multiplier;
	// make an object of zones to loop through and apply the functions
	document.getElementById('scroll-path').style.width = zoomWidth;
	document.getElementById('scroll-path').style.height = zoomHeight;
	document.getElementById('water-anim').style.width = zoomWidth;
	document.getElementById('water-anim').style.height = zoomHeight;
	document.getElementById('lighthouse').style.width = zoomWidth;
	document.getElementById('lighthouse').style.height = zoomHeight;
	document.getElementById('construction01').style.width = zoomWidth;
	document.getElementById('construction01').style.height = zoomHeight;
	document.getElementById('construction02').style.width = zoomWidth;
	document.getElementById('construction02').style.height = zoomHeight;
	document.getElementById('construction03').style.width = zoomWidth;
	document.getElementById('construction03').style.height = zoomHeight;
	document.getElementById('podcast-alley').style.width = zoomWidth;
	document.getElementById('podcast-alley').style.height = zoomHeight;
	document.getElementById('qr-castle').style.width = zoomWidth;
	document.getElementById('qr-castle').style.height = zoomHeight;
	document.getElementById('airship').style.width = zoomWidth;
	document.getElementById('airship').style.height = zoomHeight;
	document.getElementById('sea-monster').style.width = zoomWidth;
	document.getElementById('sea-monster').style.height = zoomHeight;
	document.getElementById('island').style.width = zoomWidth;
	document.getElementById('island').style.height = zoomHeight;
};

function zoneZoom() {
	setTimeout(function() {
		let e = document.querySelector("#construction01 > svg > g");
		let width = e.offsetWidth;
		let height = e.offsetHeight;

		let zoneOffset = "137px, 18px"; // add to the object of each zone

		console.log("window H: " + window.innerHeight + " element H: " +  e.getBoundingClientRect().height);
		let zoomFactor = window.innerHeight / e.getBoundingClientRect().height;
		console.log(zoomFactor);
		document.querySelector("#construction01 > svg > g").addEventListener('click', function() {
			document.getElementById('wrapper').setAttribute("style", "transform:scale("+zoomFactor+") translate(" + zoneOffset + "); ");
		});
	},6000); // waterfall this with the loading/intro.
}

zoneZoom();

function screenAspect() {
	// compage width and height to know which is the constraint
	// add a warning that it looks better horizontal
}