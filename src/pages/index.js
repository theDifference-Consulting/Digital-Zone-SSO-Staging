import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function index() {
  return (
    <>
    	<Helmet>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.7/lottie.js" type="text/javascript" />
			<script src="https://identity.netlify.com/v1/netlify-identity-widget.js" type="text/javascript" />
			<meta name="robots" content="noindex, nofollow"/>
			<link href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
			<link rel="stylesheet" type="text/css" href="css/style.css"/>
			<link rel="stylesheet" type="text/css" href="css/zone.css"/>
			<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
			{
				//preload the cloud curtain
			}
			<link rel="preload" as="image" href="img/cloud-left.svg"/>
			<link rel="preload" as="image" href="img/cloud-right.svg"/>
			<link rel="preload" as="image" href="img/DigitalZoneLoading.gif"/>
		</Helmet>
		<div id="wrapper">
			<div id="bg-water"></div>
			<div id="water-loop" className="anim"></div>
			<div id="lighthouse" className="active-zone anim"></div>
			<div id="arrow" className="anim"></div>
			<div id="island"></div>
			<div id="waterfall" className="anim"></div>
			<div id="sea-monster" className="anim"></div>
			<div id="qr-castle" className="active-zone anim"></div>
			<div id="airship" className="active-zone anim"></div>
			<div id="drive-in" className="active-zone anim"></div>
			<div id="construction02" className="anim"></div>
			<div id="path-around"></div>
			<div id="library" className="active-zone anim"></div>
			<div id="trees"></div>
			<div id="path-above"></div>
			<div id="podcast-alley" className="active-zone anim"></div>
		</div>
		<div className="info-wrapper">
			<div className="hidden" id="qr-castle-info">
				<div className="zone-wrapper">
					<p>
						Here you'll learn all about using QR codes at Gilead. You'll see examples, get tips and hear how colleagues are using them to enhance and extend conference posters.
					</p>
					<a href="/qr-castle/">
						<button className="block-highlight">Enter</button>
					</a>
				</div>
			</div>
			<div className="hidden" id="airship-info">
				<div className="zone-wrapper">
					<p>
						Check here often for breaking news about some of the innovations and digital projects that are happening across Gilead and the world.
					</p>
					<a href="/news/">
						<button className="block-highlight">Enter</button>
					</a>
				</div>
			</div>
			<div className="hidden" id="lighthouse-info">
				<div className="zone-wrapper">
					<p>
						The island is your main navigation page. The topic areas are structures around the island, and each active topic area is labeled.
					</p>
					<p>
						Click on a topic area to zoom in and see a summary of the topic.
					</p>
					<p>
						Click the compass to go back to the full island or click through to access the topic area's full content page with a variety of tools, tips and articles. Visit the Visitor Centre content page to learn more about the Zone and the people behind it!
					</p>
					<a href="/visitor-centre/">
						<button className="block-highlight">Enter</button>
					</a>
				</div>
			</div>
			<div className="hidden" id="podcast-alley-info">
				<div className="zone-wrapper">
					<p>
						Here you'll find the Digital Zone's podcasting resources. You can listen and subscribe to episodes and get tips and guidance to help make your own podcasts.
					</p>
					<a href="/podcast-alley/">
						<button className="block-highlight">Enter</button>
					</a>
				</div>
			</div>
			<div className="hidden" id="drive-in-info">
				<div className="zone-wrapper">
					<p>
						This is where you’ll find the latest video stories about digital innovation happening around Gilead. We will be posting new videos regularly so check back often!
					</p>
					<a href="/drive-in/">
						<button className="block-highlight">Enter</button>
					</a>
				</div>
			</div>
			<div className="hidden" id="library-info">
				<div className="zone-wrapper">
					<p>
						An inventory of every digital project from across Gilead’s regions.
					</p>
					<a href="/library/">
						<button className="block-highlight">Enter</button>
					</a>
				</div>
			</div>
		</div>
		<div id="compass"></div>
		<div id="play-mute"></div>
		<div id="ie-notice">
			Note: this site works best on a more modern browswer than Internet Explorer. Please consider updating for a better experience.
		</div>
		<div id="cloud-1"></div>
		<div id="cloud-2"></div>
		<img src="img/DigitalZoneLoading.gif" id="loading"/>
		<audio id="audio" autoPlay loop>
			<source src="/media/beach-ambience1.mp3" type="audio/mpeg"/>
		</audio>
    	<Helmet>
			<script defer src="../js/script.js" type="text/javascript"/>
		</Helmet>
 	</>
	)
}