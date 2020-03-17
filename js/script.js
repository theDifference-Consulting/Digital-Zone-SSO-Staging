		
/* ========== Scroll camera path ============= */

$(document).ready(init);

function init() {

$.fn.scrollPath("getPath")
	// Move to 'zone-1' element
	.moveTo(597, 625, {name: "zone-1"})
	// Line to 'zone-2' element
	.lineTo(775, 443, {name: "zone-2"})
	// Line to 'zone-3' element
	.lineTo(982, 567, {name: "zone-3"})
	// Line to 'zone-3' element
	.lineTo(1017, 287, {name: "zone-4"})
	// Line to 'zone-3' element
	.lineTo(1309, 476, {name: "zone-5"})
	// back to 'zone-1'
	.lineTo(597, 625, {name: "end"})

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: false, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();

			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	//gather array of zones, set the initial zone, on scroll go to the next in the array
	let pointArray = [];

	

	$("nav").find("a").each(function() {
		 pointArray.push($(this).attr("href").replace("#", ""));
	});
	
	//                    //
	// Custom Snap Scroll //
	//                    //
	// let i = 0;

	// // Debounce by David Walsh 
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
	// },1000));
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
