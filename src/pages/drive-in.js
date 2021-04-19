import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"

export default function index() {
  return (
    <>
	<Helmet>
        <title>Gilead Digital Zone — Drive-Innovation Theater</title>
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
        <div className="container-fluid drive-in">
            <Navbar activePage='drive-in'/>
            <header>
                <div className="container">
                    <div className="heading-cloud-wrapper row">
                        <h1>Drive-Innovation <br/>Theater</h1>
                    </div>
                </div>
            </header>

			<section className="light-bg row" id="welcome">
                <div className="container">
                    <img src="../img/popcorn-bug.svg" className="bug"/>
                    <h2>Welcome!</h2>
                    <div style={{padding:'30px 0'}}>
                        This is where you’ll find the latest video stories about digital innovation happening around Gilead. We will be posting new videos regularly so check back often!
                    </div>
                    <div className="yellow-video-block">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/463565573" width="640" height="360" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
                        </div>
                        <b>Mike Elliott</b><br/>
                            Stockley Park, UK<br/>
                            michael.elliott@gilead.com
                    </div>
                </div>
            </section>

            <section className="light-bg row" id="now-showing">
                <div className="container">
                    <img src="../img/popcorn-bug.svg" className="bug"/>
                    <h2>Now Showing</h2>
                    <div style={{padding:'30px 0'}}>
                        Learn all about the Gilead Advisory Platform, a powerful new Advisory Board connection tool.
                    </div>
                    <div className="yellow-video-block">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/483166427" width="640" height="360" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
                        </div>
                        <b>Julie Newman</b><br/>
                        Australia<br/>
                        julie.newman@gilead.com
                    </div>
                    <div className="row margin-top-md">
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Take a journey through our powerful new medication reminder tool, the PrEP app.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/536992198" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>
                                <p>
                                    <b>Julie Newman</b><br/>
                                    Australia<br/>
                                    julie.newman@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Get to know the Covid-19 Middle East Chatbot and how it's being used to share knowledge efficiently.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/463559431" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>
                                <p>
                                    <b>Sherif Khattab</b><br/>
                                    Dubai, UAE<br/>
                                    sherif.khattab@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Take a look at how we are using digital tools to help nurses with their ongoing education.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/470263070" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>
                                <p>
                                    <b>Danielle Brackenridge</b><br/>
                                    UK<br/>
                                    danielle.brackenridge@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Explore the world of hackathons and see how we're using developer bootcamps to assist in HIV research.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/470281346" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>
                                <p>
                                    <b>Roberto La Ferla</b><br/>
                                    Italy<br/>
                                    Roberto.LaFerla@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Check out the Gilead Middle East database, and how we are using it to connect and share our expertise.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/463557184" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>

                                <p>
                                    <b>Sherif Khattab</b><br/>
                                    Dubai, UAE<br/>
                                    sherif.khattab@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Learn about 2020’s ESL IHC convention and our preparations to get the most out of a virtual experience.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/467531893" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>
                                            <b>Ramon Thali</b><br/>
                                            Switzerland<br/>
                                            ramon.thali@gilead.com
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p>
                                            <b>Ivo Berkovic</b><br/>
                                            Switzerland<br/>
                                            ivo.berkovic@gilead.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-sm-6 ">
                                <div className="yellow-video-block">
                                    <p>
                                        Learn about the way HIV experts in Australia have adapted to stay connected and share their expertise with each other.
                                    </p>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/465969769" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                    </div>
                                    <b>Julie Newman</b><br/>
                                    Australia<br/>
                                    julie.newman@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                            </div>
                            <div className="col-sm-6 ">
                                <div className="yellow-video-block">
                                    <p>
                                        Learn how the Middle East Medical Affairs team uses a digital platform to expand its reach to local HIV specialists, provide them with much needed scientific information and learn about their interests and behaviors.
                                    </p>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/463555097" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                        </div>
                                    <b>Sherif Khattab</b><br/>
                                    Dubai, UAE<br/>
                                    sherif.khattab@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
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