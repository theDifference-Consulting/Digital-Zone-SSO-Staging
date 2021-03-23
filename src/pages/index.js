import React, {useState, useEffect} from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Island from "../components/island/island"
import Mobile from "../components/mobile/mobile"

const Index = () => {

	const [ifMobile, setIfMobile] = useState(false);

	useEffect(() => {
		function checkSize() {
			if (Math.min(window.innerWidth, window.innerHeight) < 600) {
				setIfMobile(true)
				console.log(ifMobile)
			} else {
				setIfMobile(false)
				console.log(ifMobile)
			}
		}
		checkSize();
		//window.addEventListener("resize",checkSize, false);
	},[])

	function MobileSelector() {
		if(ifMobile) {
			return (<Mobile/>)
		}
		return ( <Island/>)
	}

  return (
    <>
    	
    	<Helmet>
    	{
					//preload the cloud curtain
				}
				<link rel="preload" as="image" href="img/cloud-left.svg"/>
				<link rel="preload" as="image" href="img/cloud-right.svg"/>
				{
				//	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js" type="text/javascript" />
				}
				<meta name="robots" content="noindex, nofollow"/>
				<link href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
				<link rel="stylesheet" type="text/css" href="css/style.css"/>
				<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
				
				<link rel="preload" as="image" href="img/DigitalZoneLoading.gif"/>
			</Helmet>
			<img src="img/cloud-left.svg" style={{display: "none"}}/>
			<img src="img/cloud-right.svg" style={{display: "none"}}/>
			<MobileSelector/>
		</>
	)
}

export default Index