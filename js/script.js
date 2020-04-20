	// ZOOM CONTROL
let multiplier = 3; //on change, reset DOM
setZoom(multiplier);
window.addEventListener('DOMContentLoaded', function () {
	console.log('loaded...');
	setTimeout(function () { 
		document.getElementById('scroll-path').classList.remove('zoom');
		console.log('fire');
	},2000);
});

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
		$(".scroll-path").scrollPath({drawPath: true, wrapAround: true});

		let currentZone = 'zone01';
		// Add scrollTo on click on the navigation anchors
		$("nav").find("a").each(function() {
			var target = $(this).attr("href").replace("#", "");

			// show and hide zone info popup
			$('#' + target).addClass('hidden');
			$('#zone01').removeClass('hidden');

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

setTimeout(function(){ zoneAnim.play(); }, 0); //set delay

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

setTimeout(function(){ waterAnim.play(); }, 0); //set delay

var charTest = lottie.loadAnimation({
				container: document.getElementById('character'), // Required
				renderer: 'svg', // Required
				loop: true, // Optional
				autoplay: false, // Optional
				useSubFrames: false,
				path: "anim/char-01.json"
			})

let charAction = {
	zone01: {
		in: [30,67],
		loop: [0,0],
		out: [90,102]
	},
	zone02: {
		in: [128,140],
		loop: [0,0],
		out: [173,184]
	},
	zone03: {
		in: [214,247],
		loop: [248, 265],
		out: [266,301]
	},
	zone04: {
		in: [331,358],
		loop: [0,0],
		out: [394,406]
	},
	zone05: {
		in: [434,445],
		loop: [446,469],
		out: [470,482]
	}
};

charAction.animate = function(zoneOut, zoneIn, zoneLoop) {
	// console.log(this[zoneOut].out);
	// console.log(this[zoneIn].in);
	// console.log(this[zoneLoop].loop);
	charTest.playSegments([this[zoneOut].out, this[zoneIn].in, this[zoneLoop].loop], true);
};

