	// ZOOM CONTROL
let multiplier = 3; //on change, reset DOM
setZoom(multiplier);
// setTimeout(function () { 
// 	document.getElementById('scroll-path').classList.remove('zoom');
// 	console.log('fire');
// },2000);

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

	document.getElementById('center').style.left = 960 * multiplier;
	document.getElementById('center').style.top = 540 * multiplier;
	document.getElementById('zone-1').style.left = 597 * multiplier;
	document.getElementById('zone-1').style.top = 625 * multiplier;
	document.getElementById('zone-2').style.left = 775 * multiplier;
	document.getElementById('zone-2').style.top = 443 * multiplier;
	document.getElementById('zone-3').style.left = 982 * multiplier;
	document.getElementById('zone-3').style.top = 567 * multiplier;
	document.getElementById('zone-4').style.left = 1017 * multiplier;
	document.getElementById('zone-4').style.top = 287 * multiplier;
	document.getElementById('zone-5').style.left = 1309 * multiplier;
	document.getElementById('zone-5').style.top = 476 * multiplier;
}

//navigation "where are we" function



	
/* ========== Scroll camera path ============= */

$(document).ready(init);

function init() {

	$.fn.scrollPath("getPath")
		// Move to center of island
		// .moveTo(960 * multiplier , 540 * multiplier , {name: "center"})
		// Move to 'zone-1' element
		.moveTo(597 * multiplier , 625 * multiplier , {name: "zone-1"})
		// Line to 'zone-2' element
		.lineTo(775 * multiplier, 443 * multiplier, {name: "zone-2"})
		// Line to 'zone-3' element
		.lineTo(982 * multiplier, 567 * multiplier, {name: "zone-3"})
		// Line to 'zone-3' element
		.lineTo(1017 * multiplier, 287 * multiplier, {name: "zone-4"})
		// Line to 'zone-3' element
		.lineTo(1309 * multiplier, 476 * multiplier, {name: "zone-5"})
		// back to 'zone-1'
		.lineTo(597 * multiplier, 625 * multiplier, {name: "end"})

		// We're done with the path, let's initate the plugin on our wrapper element
		$(".scroll-path").scrollPath({drawPath: false, wrapAround: true});

		let currentZone = 'zone-1';
		// Add scrollTo on click on the navigation anchors
		$("nav").find("a").each(function() {
			var target = $(this).attr("href").replace("#", "");
			$('#' + target).addClass('hidden');
			$('#zone-1').removeClass('hidden');
			$(this).click(function(e) {
				e.preventDefault();
				$('#' + currentZone).addClass('hidden'); //roll this into a function
				currentZone = target;
				$('#' + currentZone).removeClass('hidden');
				console.log(currentZone)
				// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
				// for extra easing functions like the one below
				$.fn.scrollPath("scrollTo", target, 100, "easeInOutSine");
			});
		});

		console.log(currentZone)

		//gather array of zones, set the initial zone, on scroll go to the next in the array
		// let pointArray = [];

		// $("nav").find("a").each(function() {
		// 	 pointArray.push($(this).attr("href").replace("#", ""));
		// });
		
		//                    //
		// Custom Snap Scroll //
		//                    //
		//let i = 0;

		// Debounce by David Walsh 
		// function debounce(func, wait, immediate) {
		// 	var timeout;
		// 	return function() {
		// 		var context = this, args = arguments;
		// 		var later = function() {
		// 			timeout = null;
		// 			if (!immediate) func.apply(context, args);
		// 		};
		// 		var callNow = immediate && !timeout;
		// 		clearTimeout(timeout);
		// 		timeout = setTimeout(later, wait);
		// 		if (callNow) func.apply(context, args);
		// 	};
		// };

		// $(window).bind('mousewheel', debounce(function(e) {
		// 		if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
		// 			e.preventDefault();
		// 			if (i > 0 ){i--;} else {i = pointArray.length - 1;}				
		// 		} else  {
		// 			e.preventDefault();
		// 			if (i < pointArray.length - 1){i++;} else {i = 0;}
		// 		} 
		// 		console.log(i);
		// 		$.fn.scrollPath("scrollTo", pointArray[i], 1000, "easeInOutSine");
		// },100));
}	


var zoneAnim = bodymovin.loadAnimation({
				container: document.getElementById('zone-anim'), // Required
				renderer: 'html', // Required
				loop: true, // Optional
				autoplay: true, // Optional
				path: "anim/points-of-interest.json"
			})

var zone_anim = lottie.loadAnimation(zoneAnim);
setTimeout(function(){ zoneAnim.play(); }, 0); //set delay

var waterAnim = bodymovin.loadAnimation({
				container: document.getElementById('water-anim'), // Required
				renderer: 'html', // Required
				loop: true, // Optional
				autoplay: true, // Optional
				path: "anim/water-loop.json"
			})

var waterAnim = lottie.loadAnimation(waterAnim);
setTimeout(function(){ waterAnim.play(); }, 0); //set delay



