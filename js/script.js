		
/* ========== Scroll camera path ============= */

$(document).ready(init);

function init() {

$.fn.scrollPath("getPath")
	// Move to 'zone-1' element
	.moveTo(463, 878, {name: "zone-1"})
	// Line to 'zone-2' element
	.lineTo(696, 652, {name: "zone-2"})
	// Line to 'zone-3' element
	.lineTo(991, 794, {name: "zone-3"})
	// Line to 'zone-3' element
	.lineTo(1061, 432, {name: "zone-4"})
	// Line to 'zone-3' element
	.lineTo(1454, 663, {name: "zone-5"})
	// back to 'zone-1'
	.lineTo(463, 878, {name: "zone-1"})

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});
}		

		