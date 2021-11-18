import React, {useEffect, useState} from 'react';
import './island.scss';
import LottiePlayer from "../../components/lottiePlayer";
import Compass from "../compass/compass";

//import lottie files
import waterLoop from "../../anim/waterLoop.json";
import lighthouse from "../../anim/lighthouse.json";
import arrow from "../../anim/arrow.json";
import waterfall from "../../anim/waterfall.json";
import seaMonster from "../../anim/seaMonster.json";
import qrCastle from "../../anim/qrCastle.json";
import driveIn from "../../anim/driveIn.json";
import newsletter from "../../anim/newsletter.json";
import library from "../../anim/library.json";
import podcastAlley from "../../anim/podcastAlley.json";
import digitalAdvisoryBoardLab from "../../anim/digitalAdvisoryBoardLab.json";
import metricsOutpost from "../../anim/metricsOutpost.json";

const Island = () => {

	const [wrapperTransform, setWrapperTransform] = useState();
	const [wrapperSize, setWrapperSize] = useState({});
	const [zoneInfo, setZoneInfo] = useState({text: "", link: "/", height: 0, id: "", zoom: ""});
	const [cloudState, setCloudState] = useState({cloud: "", loading: ""});
	const [playAudio, setPlayAudio] = useState(false);

	function zoomReset() {
		setWrapperTransform("");
		setZoneInfo({height:0, id: "", zoom:""});
		setWrapperTransform("translate(-50%, -50%)");
	}

	function zoneZoom() {
		//Set state info for clicked zone, which triggers useEffect function
		setZoneInfo({
			text: this.info, 
			link: this.link, 
			height:'auto', 
			id: this.zoneOutline,
			zoom: "back"
		});
	}

	useEffect(() => {
		//handle flexWrapper scaling the island when window is loaded, or resized
		function handleResize() {
			// fallback on window dimensions for initial load
			let width = document.getElementById('flexWrapper').offsetWidth || window.innerWidth
			let height = document.getElementById('flexWrapper').offsetHeight || window.innerHeight
			if (width / height > 1.778) {
				setWrapperSize({width: height * 1.778, height: height}); 
			} else { //set width
				setWrapperSize({width: width, height: width * 0.5625}); 
			}
		}

		function hideClouds() {
			setCloudState({cloud: "reveal", loading: "hidden"})
		}

		function handleZoom() {
			//handleResize();
			if (document.getElementById(zoneInfo.id)) {
				let zoomControl = document.getElementById('zoomControl').getBoundingClientRect();
				let clickedZone = document.getElementById(zoneInfo.id).parentElement.parentElement.getBoundingClientRect();
				
				let padding = 40;
				let heightZoomFactor = zoomControl.height  / (clickedZone.height + 2 * padding);
				let scaleFactor = heightZoomFactor;
				// Positioning calculations rely on #wrapper having transform-origin: top left class
				// xPos: absolute x value of clicked zone / wrapper width to get a fraction, convert to %, adjust for scaleFactor 
				let xPos = -(((clickedZone.x + (clickedZone.width / 2) - zoomControl.x) / (zoomControl.width)  * 100 * scaleFactor) );
				// yPos: absolute y value  / wrapper height to get fraction, convert to %, adjust for scaleFactor
				let yPos = -(((clickedZone.y - zoomControl.y - padding) / (zoomControl.height)  * 100 * scaleFactor) );

				setWrapperTransform("translate("+xPos+"%, calc("+yPos+"% - 50vh)) scale("+ scaleFactor+")");
			}
		}

    window.addEventListener('resize', handleResize, false); //browser resized
    document.addEventListener("keydown", (e) => { if(e.keyCode === 27) {zoomReset();}}, false); // reset zoom with escape key
    window.addEventListener('load', handleResize(), false); // size the island wrapper once page has loaded
    window.addEventListener('load', hideClouds(), false); // hide clouds once page has loaded
    handleZoom(); // fire handle zoom when zoneInfo is modified
	}, [zoneInfo]);

	useEffect(() => {
		const audio = document.getElementById("audio");
		if (playAudio) {
				audio.play()

			} else {
				audio.pause()
			}
		
	},[playAudio])

	return (
		<div id="islandWrapper">
			<div id="flexWrapper">
				<div
				id="zoomControl"
				style={{
					width: wrapperSize.width, 
					height: wrapperSize.height,
					transform: wrapperTransform,
					}}
				>
					<LottiePlayer animData={waterLoop}/>
					<LottiePlayer 
						animData={lighthouse} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='lighthouse-halo'
						info="<p>
								The island is your main navigation page. The topic areas are structures around the island, and each active topic area is labeled.
							</p>
							<p>
								Click on a topic area to zoom in and see a summary of the topic.
							</p>
							<p>
								Click the compass to go back to the full island or click through to access the topic area's full content page with a variety of tools, tips and articles. Visit the Visitor Centre content page to learn more about the Zone and the people behind it!
							</p>"
							link="/visitor-centre/"
						/>
					<LottiePlayer animData={arrow}/>
					<div id="island"></div>
					<LottiePlayer animData={waterfall}/>
					<LottiePlayer animData={seaMonster}/>
					<LottiePlayer 
						animData={qrCastle} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='qr-halo'
						info="Here you'll learn all about using QR codes at Gilead. You'll see examples, get tips and hear how colleagues are using them to enhance and extend conference posters."
						link="/qr-castle/"
						/>
					<LottiePlayer 
						animData={driveIn} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='drivein-halo'
						info="This is where you’ll find the latest video stories about digital innovation happening around Gilead. We will be posting new videos regularly so check back often!"
						link="/drive-in/"
						/>
					<LottiePlayer 
						animData={newsletter} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='newsletterdepot-halo'
						info="Welcome to the Newsletter Depot! Here you can find a variety of helpful email templates that can be downloaded for use in any of your email campaign needs."
						link="/newsletter-depot/"
						/>
					<div id="path-around"></div>
					<LottiePlayer 
						animData={library} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='libraryhalo'
						info="An inventory of every digital project from across Gilead’s regions."
						link="/library/"
						/>
					<div id="trees"></div>
					<div id="path-above"></div>
					<LottiePlayer 
						animData={podcastAlley} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='PodcastAlley-Halo'
						info="Here you'll find the Digital Zone's podcasting resources. You can listen and subscribe to episodes and get tips and guidance to help make your own podcasts."
						link="/podcast-alley/"
						/>
						<LottiePlayer 
						animData={digitalAdvisoryBoardLab} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='adboardlab-halo'
						info="Visit the Digital Advisory Board Lab, where you can learn all about the virtual innovation that allows users to gain insight from other professionals without geographical or other restrictions."
						link="/digital-advisory-board-lab/"
						/>
						<LottiePlayer 
						animData={metricsOutpost} 
						activeZone={true}
						onclick={zoneZoom}
						zoneOutline='metrics-halo'
						info="We often spend a lot of time and effort planning, designing and executing our digital activities. But how do we know if our efforts were fruitful? Was the activity a success? Did it reach its target and goals? This is where metrics come in. Enter here to begin your journey into the world of metrics at Gilead!"
						link="/metrics-outpost/"
						/>
				</div>
			</div>
			<div className="info-wrapper" style={{ height: zoneInfo.height}}>
				<div className="zone-wrapper">
					<p dangerouslySetInnerHTML={{__html: zoneInfo.text}}></p>
					<a href={zoneInfo.link} className="block-highlight button">
						Enter
					</a>
				</div>
			</div>
			<Compass reset={zoomReset} back={zoneInfo.zoom}/>
			<div 
				role="button"
				tabIndex={0}
				id="play-mute" 
				onClick={() => {setPlayAudio(!playAudio)}}
				onKeyDown={() => {setPlayAudio(!playAudio)}}
				aria-label="play pause audio"
				className={playAudio ? "" : "play"}></div>

			<div id="ie-notice">
				Note: this site works best on a more modern browswer than Internet Explorer. Please consider updating for a better experience.
			</div>
			<div className={cloudState.cloud + " cloud left"}></div>
			<div className={cloudState.cloud + " cloud right"}></div>
			<img src="img/DigitalZoneLoading.gif" className={cloudState.loading} id="loading" alt="loading"/>
			{/*eslint-disable*/}
				<audio id="audio" autoPlay loop > {/*disable audio track warning since it's a background track*/}
			{/*eslint-enable*/}
				<source src="/media/beach-ambience1.mp3" type="audio/mpeg"/>
			</audio>
		</div>
	)
}

export default Island