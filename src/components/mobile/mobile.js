import React from "react";

import "./mobile.scss";

const zones = [
	{
		title: "Visitor Centre",
		desc: "Visit the Visitor Centre content page to learn more about the Zone and the people behind it!",
		link: "/visitor-centre",
		image: "mobile-lighthouse.svg"
	},
	{
		title: "Digital AdBoard Lab",
		desc: "Visit the Digital Advisory Board Lab, where you can learn all about the virtual innovation that allows users to gain insight from other professionals without geographical or other restrictions.",
		link: "/digital-advisory-board-lab",
		image: "DAB-mobile-bug.svg"
	},
	{
		title: "QR Castle",
		desc: "Here you'll learn all about using QR codes at Gilead. You'll see examples, get tips and hear how colleagues are using them to enhance and extend conference posters.",
		link: "/qr-castle",
		image: "mobile-qr.svg"
	},
	{
		title: "Drive-Innovation Theatre",
		desc: "This is where you’ll find the latest video stories about digital innovation happening around Gilead.",
		link: "/drive-in",
		image: "mobile-drive-in.svg"
	},
	{
		title: "Podcast Alley",
		desc: "Here you'll find the Digital Zone's podcasting resources. You can listen and subscribe to episodes and get tips and guidance to help make your own podcasts.",
		link: "/podcast-alley",
		image: "mobile-podcast.svg"
	},
	{
		title: "Digital Project Library",
		desc: "An inventory of every digital project from across Gilead’s regions.",
		link: "/library",
		image: "mobile-library.svg"
	},
	{
		title: "Newsletter Depot",
		desc: "Welcome to the Newsletter Depot! Here you can find a variety of helpful email templates that can be downloaded for use in any of your email campaign needs.",
		link: "/newsletter-depot",
		image: "newsletter-mobile-bug.svg"
	},
	{
		title: "Online Listening Pub",
		desc: "With Internet and social media at consumers’ fingertips, we have the opportunity to use social and search listening to rapidly gain information about our patient’s needs. Visit the Online Listening Pub to learn all about these powerful tools!",
		link: "/listening-pub",
		image: "listening-mobile.svg"
	},
	{
		title: "Metrics Outpost",
		desc: "We often spend a lot of time and effort planning, designing and executing our digital activities. But how do we know if our efforts were fruitful? Was the activity a success? Did it reach its target and goals? This is where metrics come in. Enter here to begin your journey into the world of metrics at Gilead!",
		link: "/metrics-outpost",
		image: "metrics-outpost-mobile.svg"
	},
]

const Content = () => {
	const layout = zones.map((z) =>
		<a href={z.link}>
			<div className="zone-content">
				<h3>{z.title}</h3>
				<p>{z.desc}</p>
				<img src={"/img/" + z.image} alt={"section" + z.title + "illustration"}/>
			</div>
		</a>
	)
	 return (
	 	<div>{layout}</div>
	 	)
}

const Mobile = () => {

	return (
			<div className="mobile">
				<div id="header">
					<div className="title-box">
						<h1>Welcome to the Digital Zone</h1>
						<p>
							Our mission is to increase the use of digital tools at Gilead to facilitate the sharing of information with healthcare professionals, patients and caregivers!
						</p>
					</div>
					<img src="img/monster.svg" className="monster" alt="monster illustration"/>
				</div>
				<Content/>
				<footer>
					<img src="/img/mobile-footer-compass.svg" alt="gilead copyright 2021"/>
				</footer>
			</div>
		)
}

export default Mobile
