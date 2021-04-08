import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"

export default function index() {
  return (
    <>
	<Helmet>
        <title>Gilead Digital Zone — Newsletter Depot</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
    	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
    </Helmet>
    <main className="secondary-template">
        <div className="container-fluid newsletter">
            <Navbar activePage='newsletter'/>
            <header>
                <div className="">
                    <div className="heading-cloud-wrapper">
                        <h1>Newsletter <br/>Depot</h1>
                    </div>
                </div>
            </header>

			<section className="light-bg row" id="welcome">
                <div className="container">
                    <img src="../img/newsletter-bug.svg" className="bug"/>
                    <h2>Welcome!</h2>
                    <div style={{padding:'30px 0'}}>
                        Welcome to the Newsletter Depot! Here you can find a variety of helpful email templates that can be downloaded for use in any of your email campaign needs. Check out the video below to get the most out of this Zone. 
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/666" width="640" height="360" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
                        </div>
                </div>
            </section>

            <section className="light-bg row" id="now-showing">
                <div className="container">
                    <img src="../img/newsletter-bug.svg" className="bug"/>
                    <h2> Templates</h2>
                    <div className="wood-background">
                        <div className="row templates">
                            <div className="col-md-6">
                                <img src="/img/sample-template.jpg" className="img-fluid"/>
                            </div>
                            <div className="col-md-6">
                                <img src="/img/sample-template.jpg" className="img-responsive"/>
                            </div>
                            <div className="col-md-6">
                                <img src="/img/sample-template.jpg" className="img-responsive"/>
                            </div>
                            <div className="col-md-6">
                                <img src="/img/sample-template.jpg" className="img-responsive"/>
                            </div>
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