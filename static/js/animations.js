var cloudAnim = lottie.loadAnimation({
	container: document.getElementById('body'), // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: true, // Optional
	useSubFrames: false,
	rendererSettings: {
        progressiveLoad: true
      },
	path: "anim/cloud-opening.json"
})

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
	cloudAnim.play();  
	zoneAnim.play();
	waterAnim.play();
});

cloudAnim.addEventListener('complete', function(){
	//fire functions after the clouds part
	document.getElementById('scroll-path').classList.remove('zoom');
	setTimeout( function() {
		document.getElementById('zone01').classList.remove('hidden');
	},750); //match the zoom CSS transition timing 
} );