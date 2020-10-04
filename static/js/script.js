const wrapper = document.getElementById('wrapper');

// base size variables
const baseWidth = 1920;
const baseHeight = 1080;

const animations = document.getElementsByClassName("anim");

for (var i = 0; i < animations.length; i++) {
	var anim = lottie.loadAnimation({
		container: document.getElementById(animations[i].id), // Required
		renderer: 'svg', // Required
		loop: true, // Optional
		autoplay: true, // Optional
		useSubFrames: false,
		rendererSettings: {
	        progressiveLoad: true
	      },
		path: "anim/"+animations[i].id+".json"
	});
	anim.play();
}

function setZoom(multiplier) {
	// is this always used with calcZoom?
	document.getElementById("wrapper").setAttribute("style", "transform:scale("+multiplier+");");
}

window.addEventListener("resize", function() {
	setZoom(calcZoom(baseWidth, baseHeight));
});

// ZOOM CONTROL

function calcZoom(inputWidth, inputHeight) {
	function getWidth() {
		return Math.max(
			document.body.offsetWidth,
			document.documentElement.offsetWidth,
			document.documentElement.clientWidth,
			document.body.clientWidth,
			window.innerWidth
			);
		}

		function getHeight() {
		return Math.max(
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.documentElement.clientHeight,
			document.body.clientHeight,
			window.innerHeight
			);
		}

	winWidth = getWidth();
	winHeight = getHeight();

	var baseAspect =  inputHeight / inputWidth;
	var widthFactor = winWidth / inputWidth;
	var heightFactor = winHeight / inputHeight;

	if (widthFactor >= 1 && heightFactor >= 1) {
		// both dimensions are larger
		if (winWidth > winHeight) {
			return heightFactor;
		} else {
			return widthFactor;
		}
	} else {
		// at least one dimension is smaller
		if (winWidth >= winHeight / baseAspect) {
			// wide aspect, but not narrower than the base aspect
			return heightFactor;
		} else {
			//narrow aspect
			return widthFactor;
		}
	}
}

function animLoad() { 
	const zones = document.getElementsByClassName("active-zone");
	var arr = [];
	for (var i = 0; i < zones.length; i++) {
		var e = document.querySelector("#" + zones[i].id + " > svg > g");
			setTimeout(function() {
			},500);
		e.addEventListener('click', function() {
			let zoneMargin = 80;
			let zoneWidth = this.getBoundingClientRect().width + zoneMargin;
			let zoneHeight = this.getBoundingClientRect().height + zoneMargin;
			// holy shit the zone centering coords are crazy to calculate!
			let hroizontalOffset = (wrapper.getBoundingClientRect().left + ((wrapper.getBoundingClientRect().width / 2) - this.getBoundingClientRect().left - ( zoneWidth / 2) + (zoneMargin /2))) * (-1 / calcZoom(baseWidth, baseHeight));
			let verticalOffset = (wrapper.getBoundingClientRect().top + ((wrapper.getBoundingClientRect().height / 2) - this.getBoundingClientRect().top - ( zoneHeight / 2) + 5)) * (-1 / calcZoom(baseWidth, baseHeight));
	
			let zoomFactor = calcZoom(zoneWidth, zoneHeight) * calcZoom(baseWidth, baseHeight);
			wrapper.setAttribute("style", "transform:scale("+zoomFactor+") translate("+hroizontalOffset * -1+"px,"+verticalOffset * -1+"px); ");
			wrapper.classList.add('zoomed-in');
			activeZone = this.parentElement.parentElement.id;
			document.getElementById(activeZone + "-info").classList.remove('hidden');
			document.querySelector("#compass").classList.toggle("spin");
			document.querySelector("#compass").classList.add("back");
		});
	}
};

//initro timing functions.
// --> add some logic to wait until everything is actually loaded
anim.addEventListener('DOMLoaded', function() { 
	document.getElementById('loading').classList.add('hidden');
	document.getElementById('cloud-1').classList.add('reveal');
	document.getElementById('cloud-2').classList.add('reveal');

	setTimeout( function() {
		 //match the zoom CSS transition timing 
		setZoom(calcZoom(baseWidth, baseHeight));
		document.getElementById('audio').play();
		animLoad();
	},300);
});

document.querySelector("#compass").addEventListener('click', function() {
	setZoom(calcZoom(baseWidth, baseHeight));
	wrapper.classList.remove("zoomed-in");
	this.classList.toggle("spin");
	this.classList.remove("back");
	try {
		document.getElementById(activeZone + "-info").classList.add('hidden');
	} catch (error){}
});

var playing = true;
document.getElementById('play-mute').addEventListener('click', function() {
	if (playing) {
		document.getElementById('audio').pause();
		playing = false;
	} else {
		document.getElementById('audio').play();
		playing = true;
	}
	document.getElementById('play-mute').classList.toggle('play');
});

