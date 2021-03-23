import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"

export default function index() {
  return (
    <>
	<Helmet>
        <title>Gilead Digital Zone — QR Castle</title>
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
    	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript" />
        <script src="../js/bootstrap.min.js" type="text/javascript" />
    </Helmet>
    <main className="secondary-template">
        <div className="container-fluid qr-castle">
            <Navbar activePage='qr-castle'/>
            <header>
                <div className="container">
                    <div className="heading-cloud-wrapper row">
                        <h1>QR Castle</h1>
                    </div>
                </div>
            </header>

			<section className="light-bg row" id="welcome">
                <div className="container">
                    <img src="../img/qr-bug.svg" className="bug"/>
                    <h2>Welcome!</h2>
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="../img/welcome-qr.svg"/>
                        </div>
                        <div className="col-sm-7">
                            <h3>Use this QR Code to access a video welcoming you to the Zone</h3>
                            <ul className="triangle">
                                <li>Open the camera on your phone or mobile device</li>
                                <li>Point it at the QR code to scan</li>
                                <li>Press and hold the home button</li>
                                <li>Tap on the notification banner to open the link associated with the QR code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="audio-quote">
                <div className="container">
                    <blockquote>
                        “Using QR video links on conference posters is an effective way of communicating the science, and video may be a preferable form of media for many conference attendees. It’s key to continuously improve the way we communicate data externally since it ultimately impacts patient care. Having QR video links on Gilead conference posters would be great as standard practice; especially recently with virtual conferences where there is no person-to-person interaction at the poster.”
                    </blockquote>
                    <p>
                        <b>-Julie Ryu</b><br/>
                        Director, Medical Affairs Research
                    </p>
                </div>
            </section>
            <section className="light-bg row" id="what-qr">
                <div className="container">
                    <img src="../img/qr-bug.svg" className="bug"/>
                    <h2>What Is A QR Code?</h2>
                    <p>
                        A QR code or "Quick Response" code is a type of barcode that contains a matrix of dots that can be scanned by your smartphone camera to open a webpage, send an email, access additional data or deliver an augmented reality experience.
                    </p>
                </div>
            </section>
            <section className="light-bg row" id="qr-at-gilead">
                <div className="container">
                    <img src="../img/qr-bug.svg" className="bug"/>
                    <h2>QR Codes @ Gilead</h2>
                    <p>
                        QR Codes have a variety of applications, and one of the hottest right now at Gilead is to enhance and extend the content and reach of your conference poster.
                    </p>
                    <p>
                        By giving conference attendees an easy way to access a video, article, or podcast from the author or some other resource, your poster starts to feel like an interactive experience that appeals to different learning modalities. It’s a convenient and cool way to get the key information during or after the conference.
                    </p>
                    <p>
                        Hear how Damien Fagan, Associate Director Medical Affairs, HIV in Melbourne and his colleagues used QR codes to substantially increase the number of people who benefitted from their poster presentations.
                    </p>
	                <div className="vimeo-embed" style={{padding:`56.25% 0 0 0`, position:`relative`}}><iframe src="https://player.vimeo.com/video/416411111?title=0&byline=0&portrait=0" style={{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`100%`}} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
	                <h3>Use the QR code on the posters to access additional content!</h3>
	                <div className="row">
	                    <div className="col-sm-6">
	                        <img src="../img/qr-1.svg" className="qr-example"/>
	                        <img src="../img/qr-example-1.png" className="img-responsive"/>
	                    </div>
	                    <div className="example-spacer visible-xs"></div>
	                    <div className="col-sm-6">
	                        <img src="../img/qr-2.svg" className="qr-example"/>
	                        <img src="../img/qr-example-2.png" className="img-responsive"/>
	                    </div>
	                </div>
                </div>
            </section>
            <section className="light-bg row" id="create-own">
                <div className="container">
                    <img src="../img/tool-bug.svg" className="bug"/>
                    <h2>Ready To Use QR Codes On Your Posters?</h2>
                    <h3 className="yellow-bg">Here’s What to Do</h3>
                    <div className="row">
                        <div className="col-sm-2 hidden-xs col-sm-offset-1">
                            <img src="../img/poster.svg" className="img-responsive"/>
                        </div>
                        <div className="col-sm-6 ">
                            <ol>
                                <li>
                                    Create the video or other content people will access through the QR code
                                </li>
                                <li>
                                    Upload the video and poster content to One Drive
                                </li>
                                <li>
                                    Share the video and poster content from One Drive to MAO.Graphics@gilead.com
                                </li>
                                <li>
                                    The graphics team will create the poster, compress the poster and add the QR code
                                </li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="light-bg row" id="qr-pros">
                    <div className="container">
                        <img src="../img/qr-bug.svg" className="bug"/>
                        <h2>Advice From QR Code Pros</h2>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-md-offset-2">
                                <div className="headshot-bg">
                                    <h3>
                                    Damien Fagan
                                    </h3>
                                    Associate Director<br/>
                                    Medical Affairs, HIV
                                    <img src="../img/damien-fagan.jpg"/>
                                </div>
                                <ol>
                                    <li>
                                        Start planning and outreach as early as possible since there are a lot of people across different functions to potentially involve.
                                    </li>
                                    <li>
                                        Leverage your network of global colleagues and relationships to reach out to the primary author, especially if they are external.
                                    </li>
                                    <li>
                                        Give clear guidance on your objective, timelines and expectations from the beginning. Keep in mind that many clinicians may not prioritize this endeavor, so you may need to be persistent and send a few reminder emails.
                                    </li>
                                    <li>
                                        Provide some local context for why you believe this research is beneficial to your key opinion leaders (KOLs) – this helps the author tailor the communication to your audience.
                                    </li>
                                    <li>
                                        Think outside the box. For example, we are looking at other ways to bring data to life, including augmented reality – watch this space for that!
                                    </li>
                                </ol>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="headshot-bg">
                                    <h3>
                                    Mike Tran
                                    </h3>
                                    Senior Manager,<br/>
                                    Graphics Services
                                    <img src="../img/mike-tran.jpg"/>
                                </div>
                                <ol>
                                    <li>
                                        Consider people’s time and attention span at conferences and keep the video to 2 minutes or less.
                                    </li>
                                    <li>
                                        If shooting the video yourself with an iPhone, use a tripod for stability, good lighting and a quiet environment.
                                    </li>
                                    <li>
                                        Be creative! People appreciate the extra effort, and you’ll have more people watching the entire video.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

	        <footer>
	            <div className="container">
	                <div className="copyright">©2021 Gilead</div>
	            </div>
	        </footer>
	        <a href="/" id="back-compass"></a>
	        </div>
	    </main>
    </>
	)
}