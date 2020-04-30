
var zoneAnim = lottie.loadAnimation({
	container: document.getElementById('zone-anim'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/points-of-interest.json"
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

window.addEventListener('DOMContentLoaded', function () {
	zoneAnim.play();
	waterAnim.play();
	setTimeout( function() {
		document.getElementById('cloud-1').classList.add('reveal');
		document.getElementById('cloud-2').classList.add('reveal');
	},500);
setTimeout( function() {
	 //match the zoom CSS transition timing 
	document.getElementById('scroll-path').classList.remove('zoom');
	setTimeout( function() {
		document.getElementById('zone01').classList.remove('hidden');
	},750); //match the zoom CSS transition timing 
},3000);
});

// cloudAnim.addEventListener('complete', function(){
// 	//fire functions after the clouds part
// 	document.getElementById('scroll-path').classList.remove('zoom');
// 	setTimeout( function() {
// 		document.getElementById('zone01').classList.remove('hidden');
// 	},750); //match the zoom CSS transition timing 
// } );




	// ZOOM CONTROL
let multiplier = 3; //on change, reset DOM
setZoom(multiplier);
// window.addEventListener('DOMContentLoaded', function () {
// 	console.log('loaded...');
// 	setTimeout(function () { 
// 		document.getElementById('scroll-path').classList.remove('zoom');
// 		document.getElementById('zone01').classList.remove('hidden');
// 		console.log('fire');
// 	},2000);
// });

function setZoom(multiplier) {
	let baseWidth = 1920;
	let baseHeight = 1080;
	let zoomWidth = baseWidth * multiplier;
	let zoomHeight = baseHeight * multiplier;
	document.getElementById('scroll-path').style.width = zoomWidth;
	document.getElementById('scroll-path').style.height = zoomHeight;
	document.getElementById('water-anim').style.width = zoomWidth;
	document.getElementById('water-anim').style.height = zoomHeight;
	document.getElementById('zone-anim').style.width = zoomWidth;
	document.getElementById('zone-anim').style.height = zoomHeight;
	document.getElementById('island').style.width = zoomWidth;
	document.getElementById('island').style.height = zoomHeight
}
	
/* ========== Scroll camera path ============= */

$(document).ready(init);

function init() {

$.fn.scrollPath("getPath")
	// Move to 'zone-1' element
	.moveTo(597 * multiplier , 625 * multiplier , {name: "zone01"})
	// Line to 'zone-2' element
	.lineTo(775 * multiplier, 443 * multiplier, {name: "zone02"})
	// Line to 'zone-3' element
	.lineTo(982 * multiplier, 567 * multiplier, {name: "zone03"})
	// Line to 'zone-3' element
	.lineTo(1017 * multiplier, 287 * multiplier, {name: "zone04"})
	// Line to 'zone-3' element
	.lineTo(1309 * multiplier, 476 * multiplier, {name: "zone05"})
	// back to 'zone-1'
	.lineTo(597 * multiplier, 625 * multiplier, {name: "end"})

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".scroll-path").scrollPath({drawPath: false, wrapAround: true});

	let currentZone = 'zone01';
	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");

		// show and hide zone info popup
		$('#' + target).addClass('hidden');

		$(this).click(function(e) {
			e.preventDefault();
			// Show/Hide the zone info popups
			$('#' + currentZone).addClass('hidden');
			$('#' + target).removeClass('hidden');

			// Animate the character
			charAction.animate(currentZone, target, target);

			// Move to the target zone
			$.fn.scrollPath("scrollTo", target, 500, "easeInOutSine");

			//Spin the compass
			$('#compass').toggleClass('spin');

			console.log('current zone:' + currentZone);
			console.log('next zone:' + target);
			// Update the current zone var
			 currentZone = target;
		});
	});
}	

let charAction = {
	zone01: {
		in: [30,54],
		loop: [55,170],
		out: [171,177]
	},
	zone02: {
		in: [260,272],
		loop: [273,421],
		out: [422,428]
	},
	zone03: {
		in: [506,518],
		loop: [519,541],
		out: [542,548]
	},
	zone04: {
		in: [622,646],
		loop: [647,830],
		out: [831,837]
	},
	zone05: {
		in: [921,933],
		loop: [934,956],
		out: [957,936]
	}
};

var charTest = lottie.loadAnimation({
	container: document.getElementById('character'), // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: false, // Optional
	useSubFrames: false,
	path: ''
})



let clickCharacter = '';

function charSelection() {
	let clickCharacter = "anim/char-01.json";
	let charDiv = document.getElementById('character');
	if (charDiv.childNodes[0]) {
		charDiv.removeChild(charDiv.childNodes[0]); 
	}

	charTest = lottie.loadAnimation({
		container: document.getElementById('character'), // Required
		renderer: 'svg', // Required
		loop: true, // Optional
		autoplay: false, // Optional
		useSubFrames: false,
		path: clickCharacter
	})

	charAction.animate('zone01', 'zone01', 'zone01');

	document.getElementById('z1').classList.remove('hidden');
	document.getElementById('z2').classList.remove('hidden');
	document.getElementById('z3').classList.remove('hidden');
	document.getElementById('z4').classList.remove('hidden');
	document.getElementById('z5').classList.remove('hidden');
};

charAction.animate = function(zoneOut, zoneIn, zoneLoop) {
	// console.log(this[zoneOut].out);
	// console.log(this[zoneIn].in);
	// console.log(this[zoneLoop].loop);
	charTest.playSegments([this[zoneOut].out, this[zoneIn].in, this[zoneLoop].loop], true);
};

document.getElementById("char-1").addEventListener("click", charSelection);
document.getElementById("char-2").addEventListener("click", charSelection);
document.getElementById("char-3").addEventListener("click", charSelection);
document.getElementById("char-4").addEventListener("click", charSelection);


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

console.log(getUrlVars()["char"]);

history.pushState({page: 1}, "Welcome to the Digital Zone", "?char=2")

