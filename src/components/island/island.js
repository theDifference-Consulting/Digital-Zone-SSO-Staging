import React from 'react'

import LottiePlayer from "../../components/lottiePlayer"

//import lottie files
import waterLoop  from "../../anim/waterLoop.json"
import lighthouse  from "../../anim/lighthouse.json"
import arrow  from "../../anim/arrow.json"
import waterfall  from "../../anim/waterfall.json"
import seaMonster  from "../../anim/seaMonster.json"
import qrCastle  from "../../anim/qrCastle.json"
import airship  from "../../anim/airship.json"
import driveIn  from "../../anim/driveIn.json"
import construction02  from "../../anim/construction02.json"
import library  from "../../anim/library.json"
import podcastAlley  from "../../anim/podcastAlley.json"

const Island = () => {

	return (
		<>
			<div id="bg-water"></div>
			<LottiePlayer animData={waterLoop}/>
			<LottiePlayer animData={lighthouse} activeZone={true}/>
			<LottiePlayer animData={arrow}/>
			<div id="island"></div>
			<LottiePlayer animData={waterfall}/>
			<LottiePlayer animData={seaMonster}/>
			<LottiePlayer animData={qrCastle} activeZone={true}/>
			<LottiePlayer animData={airship} activeZone={true}/>
			<LottiePlayer animData={driveIn} activeZone={true}/>
			<LottiePlayer animData={construction02}/>
			<div id="path-around"></div>
			<LottiePlayer animData={library} activeZone={true}/>
			<div id="trees"></div>
			<div id="path-above"></div>
			<LottiePlayer animData={podcastAlley} activeZone={true}/>
		</>
	)
}

export default Island