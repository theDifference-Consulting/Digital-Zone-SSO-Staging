import React, {useState} from 'react'
import './compass.scss'


// document.querySelector("#compass").addEventListener('click', function() {
// 	setZoom(calcZoom(baseWidth, baseHeight));
// 	wrapper.classList.remove("zoomed-in");
// 	this.classList.toggle("spin");
// 	this.classList.remove("back");
// 	try {
// 		document.getElementById(activeZone + "-info").classList.add('hidden');
// 	} catch (error){}
// });

const Compass = (props) => {
	const [spin, setSpin] = useState(false);

	function clickActions() {
		props.reset()
		setSpin(!spin)
	}

	return (
		<div 
			role="button"
			tabIndex={0}
			id="compass"
			onClick={clickActions}
			onKeyDown={clickActions}
			className={spin ? "spin " + props.back : props.back}
			>
		</div>
	)
}

export default Compass