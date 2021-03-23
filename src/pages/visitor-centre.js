import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"

export default function index() {
  return (
    <>
	<Helmet>
        <title>Gilead Digital Zone — Visitor Centre</title>
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
        <div className="container-fluid podcast-alley">
            <Navbar activePage='visitor-centre'/>
            <header>
                <div className="container">
                    <div className="heading-cloud-wrapper row">
                        <h1>Visitor Centre</h1>
                    </div>
                </div>
            </header>

		 <section className="light-bg row" id="welcome">
                <div className="container">
                    <img src="../img/info-bug.svg" className="bug"/>
                    <h2>Welcome!</h2>
                    <h3>Welcome to the Digital Zone!</h3>
                    <p>
                        Our mission is to increase the use of digital tools at Gilead to facilitate the sharing of information with healthcare professionals, patients and caregivers!
                    </p>
                    <br/>
                    <h3>Our goal is to</h3>
                    <ul className="triangle">
                        <li>
                            Establish the Digital Zone as the first point of reference when considering digital strategies that may be of interest
                        </li>
                        <li>
                            Create a cross-functional team that includes members from medical, commercial, clin ops, enterprise services and other areas of the company
                        </li>
                        <li>
                            Explore the potential of digital tools to facilitate external engagement, communication and the sharing of medical information to improve patient lives
                        </li>
                        <li>
                            Build digital tools and communications strategies into the medical POA process
                        </li>
                        <li>
                            Embed digital technology in Gilead’s daily practice and encourage innovation sharing across countries, functions and TAs
                        </li>
                    </ul>
                </div>
            </section>
            <section className="light-bg row" id="">
                <div className="container">
                    <img src="../img/info-bug.svg" className="bug"/>
                    <h2>Navigating the Zone</h2>
                    <p>
                        The island is your main navigation page. The topic areas are structures around the island, and each active topic area is labeled. Click on a topic area to zoom in and see a summary of the topic.
                    </p>
                    <p>
                        From there, click the compass to go back to the full island or click through to access the topic area’s full content page with a variety of tools, tips and articles.
                    </p>
                    <p>
                        You can also use the menulet in the top right of each content page to jump to a specific zone’s content page and bypass the main island.
                    </p>
                    <p>
                        Don’t forget to bookmark <b>gileaddigitalzone.com!</b> <br/>
                        We feel sure you’ll be back often as we add more content.
                    </p>
                </div>
            </section>
            <section className="light-bg row" id="who-we-are">
                <div className="container">
                    <img src="../img/info-bug.svg" className="bug"/>
                    <h2>Who We Are</h2>
                    <p>
                        We are the Digital Zone Tourism Board, a group of dedicated digital pioneers across Gilead who have teamed up to make sure the Zone is filled with exciting and useful content for you.
                    </p>
                    <p>
                        We coordinate interviews with digital groundbreakers across Gilead, share useful tips, tricks and hacks for implementing digital tools in our work, and lead by example, embracing digital tools wherever we can. Feel free to reach out to any board member nearest your region if you’d like expert input on using digital tools at Gilead.
                    </p>
                    <br/>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Julie Newman
                                </h3>
                                Australia<br/>
                                julie.newman@gilead.com
                                <img src="../img/Julie_ProfilePic.png"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Ramon Thali
                                </h3>
                                Switzerland<br/>
                                ramon.thali@gilead.com
                                <img src="../img/ramon.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Ahmet Yilmaz
                                </h3>
                                Turkey<br/>
                                ahmet.yilmaz1@gilead.com
                                <img src="../img/ahmet.jpg"/>
                            </div>
                        </div>
                        <div className="clearfix hidden-xs"></div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Nimesh Vadgama
                                </h3>
                                UK<br/>
                                nimesh.vadgama@gilead.com
                                <img src="../img/nimesh.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Hassan Aladdin, PhD
                                </h3>
                                Nordics<br/>
                                Hassan.Aladdin@gilead.com
                                <img src="../img/Hassan-Alladin.png"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Cindy Elliott
                                </h3>
                                UK<br/>
                                cindy.elliott@gilead.com
                                <img src="../img/cindy.jpg"/>
                            </div>
                        </div>
                        <div className="clearfix hidden-xs"></div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>Mario Garcia</h3>
                                Spain<br/>
                                mario.garcia@gilead.com
                                <img src="../img/mario.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Joyeta Das
                                </h3>
                                London<br/>
                                joyeta.das@gilead.com
                                <img src="../img/joyeta.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Olivier Lada
                                </h3>
                                France<br/>
                                olivier.lada@gilead.com
                                <img src="../img/olivier.jpg"/>
                            </div>
                        </div>
                        <div className="clearfix hidden-xs"></div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Tina Raselli
                                </h3>
                                Switzerland<br/>
                                tina.raselli@gilead.com
                                <img src="../img/tina.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="headshot-bg">
                                <h3>
                                Guillaume Walckenaer
                                </h3>
                                France<br/>
                                Guillaume.Walckenaer@gilead.com
                                <img src="../img/GuillaumeWalckenaer.png"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="light-bg row" id="digital-champions">
                    <div className="container">
                        <img src="../img/info-bug.svg" className="bug"/>
                        <h2>Local Digital Champions<br/> are a Great Resource</h2>
                        <p>
                            <h3><b>Digital Champion Role:</b> (there are some differences among countries)</h3>
                        </p>
                        <ol>
                            <li>
                                Primary contact for new digital initiatives which are rolled out within Gilead
                            </li>
                            <li>
                                Consolidating the communication plans from Medical Affairs during this lockdown period, which necessarily take place in digital platforms, and that are led and executed by the different Medical Affairs Managers
                            </li>
                            <li>
                                Look out for digital initiatives, which might be of interest for the team
                            </li>
                            <li>
                                Advocate for the Digital Zone which will soon be rolled out
                            </li>
                        </ol>
                        <div className="full-width">
                            <h3>ACE Digital Champions </h3>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Julie Newman
                                    </h3>
                                    Australia<br/>
                                    julie.newman@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Martin Baril
                                    </h3>
                                    Canada<br/>
                                    martin.baril@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix visible-xs-block"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Dylana Mumm
                                    </h3>
                                    Canada<br/>
                                    dylana.mumm@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix hidden-xs"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Christopher Robinson
                                    </h3>
                                    UK
                                    <br/>
                                    christopher.robinson@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix visible-xs-block"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Christine Millet-Dusastre
                                    </h3>
                                    France
                                    <br/>
                                    christine.milletdusastre@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Silvia Dambacher
                                    </h3>
                                    Germany
                                    <br/>
                                    silvia.dambacher@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Boris Albuquerque
                                    </h3>
                                    Germany
                                    <br/>
                                    boris.albuquerque@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Daniel Canimanuel
                                    </h3>
                                    Spain
                                    <br/>
                                    daniel.canimanuel@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix visible-xs-block"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Roberto La Ferla
                                    </h3>
                                    Italy
                                    <br/>
                                    roberto.laferla@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix hidden-xs"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Reiner Ribarics
                                    </h3>
                                    Austria
                                    <br/>
                                    reiner.ribarics@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix visible-xs-block"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Thierry Marysael
                                    </h3>
                                    Belgium
                                    <br/>
                                    thierry.marysael@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Ramon Thali
                                    </h3>
                                    Switzerland
                                    <br/>
                                    ramon.thali@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Hassan Aladdin
                                    </h3>
                                    Nordics
                                    <br/>
                                    hassan.aladdin@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Ahmet Yilmaz
                                    </h3>
                                    Turkey
                                    <br/>
                                    ahmet.yilmaz1@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix visible-xs-block"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Tiago Antonio
                                    </h3>
                                    Portugal
                                    <br/>
                                    tiago.antonio@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix hidden-xs"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Carla Santos
                                    </h3>
                                    Portugal
                                    <br/>
                                    carla.santos@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="clearfix visible-xs-block"></div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Yulia Ivanets
                                    </h3>
                                    Russia
                                    <br/>
                                    yulia.ivanets@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="champion-names">
                                    <h3>
                                    Sherif Khatab
                                    </h3>
                                    Middle East
                                    <br/>
                                    sherif.khattab@gilead.com
                                </div>
                                <img src="../img/headshot-bottom-bg.svg"/>
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