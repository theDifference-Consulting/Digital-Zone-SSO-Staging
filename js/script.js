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
				$('#' + currentZone).addClass('hidden'); //roll this into a function

				console.log('current zone:' + currentZone);

				currentZone = target;

				$('#' + currentZone).removeClass('hidden');

				console.log('next zone:' + currentZone);

				// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
				// for extra easing functions like the one below
				$.fn.scrollPath("scrollTo", target, 500, "easeInOutSine");

				$('#compass').toggleClass('spin');
			});
		});
		console.log(currentZone)
}	


var zoneAnim = lottie.loadAnimation({
				container: document.getElementById('zone-anim'), // Required
				renderer: 'svg', // Required
				loop: true, // Optional
				autoplay: true, // Optional
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
				path: "anim/char-01.json"
			})

// Action 01:
// Animate In: 30-67
// Animate Out: 90-102
// Action 02:
// Animate In: 128-140
// Animate Out: 173-185
// Action 03:
// Animate In: 214-247
// Loop: 248-265
// Animate Out: 266-301
// Action 04:
// Animate In: 331-358
// Animate Out: 394-406
// Action 05:
// Animate In: 434-445
// Loop: 446-469
// Animate Out: 470-482

// let charAction = {
// 	act01In: [30,67],
// 	act01Out: [90,102],
// 	act02In: [128,140],
// 	act02Out: [173,184],
// 	act03In: [214,247],
// 	act03Loop: [248, 265],
// 	act03Out: [266,301],
// 	act04In: [331,358],
// 	act04Out: [394,406],
// 	act05In: [434,445],
// 	act05Loop: [446,469],
// 	act05Out: [470,482]
// }

let charAction = {
	zone01: {
		in: [30,67],
		loop: [],
		out: [90,102]
	},
	zone02: {
		in: [128,140],
		loop: [false],
		out: [173,184]
	},
	zone03: {
		in: [214,247],
		loop: [248, 265],
		out: [266,301]
	},
	zone04: {
		in: [331,358],
		loop: [false],
		out: [394,406]
	},
	zone05: {
		in: [434,445],
		loop: [446,469],
		out: [470,482]
	}
}

// 1. where are we
// 2. where are we going?
// 3. pause or loop current location?

charAction.pause = function() {
    charTest.removeEventListener('loopComplete', charAction.pause);
     charTest.goToAndStop(charTest.totalFrames - 1, true)
  }

document.getElementById('z2').addEventListener('click', (e) => {
	charTest.playSegments([charAction.zone01.out, charAction.zone02.in, charAction.zone02.loop], true);
    charTest.addEventListener('loopComplete', charAction.pause);
});

document.getElementById('z3').addEventListener('click', (e) => {
	charTest.playSegments([charAction.zone02.out, charAction.zone03.in, charAction.zone03.loop], true);
});

document.getElementById('z4').addEventListener('click', (e) => {
	charTest.playSegments([charAction.zone03.out, charAction.zone04.in], true);
    charTest.addEventListener('loopComplete', charAction.pause);
});




charAction.animate = function(zoneOut, zoneIn, zoneLoop) {
	console.log(charAction.zoneOut.out);

};

document.getElementById('z5').addEventListener('click', (e) => {charAction.animate(zone04, 'zone05', 'zone05')});

